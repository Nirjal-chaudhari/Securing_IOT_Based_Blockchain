const express = require("express");
const router = express.Router();
const Web3 = require("web3");
require("dotenv").config(); // Load environment variables from .env

// Load the contract address from the .env file
const contractAddress = process.env.CONTRACT_ADDRESS;
const ganacheUrl = process.env.GANACHE_URL || "http://localhost:7545";

console.log("Connecting to Ganache at:", ganacheUrl);
console.log("Using contract address:", contractAddress);

const { abi: contractABI, networks } = require("../../smart_contracts/build/contracts/IoTStorage.json");

const web3 = new Web3(ganacheUrl);

// Check if contract address is loaded properly
if (!contractAddress) {
  throw new Error("CONTRACT_ADDRESS is not defined in the .env file");
}

const contract = new web3.eth.Contract(contractABI, contractAddress);

router.get("/", async (req, res) => {
  try {
    console.log("Fetching transactions...");
    const transactions = [];
    const entryCount = await contract.methods.entryCount().call();
    console.log("Total entries:", entryCount);

    for (let i = 0; i < entryCount; i++) {
      console.log("Fetching entry", i);
      const transaction = await contract.methods.dataEntries(i).call();
      const receipt = await web3.eth.getTransactionReceipt(transaction.transactionHash);
      console.log("Transaction receipt:", receipt);
      
      transactions.push({
        entryName: transaction.entryName,
        cid: transaction.cid,
        transactionHash: receipt
      });
    }

    console.log("Sending response with", transactions.length, "transactions");
    res.json(transactions);
  } catch (err) {
    console.error("Error in transactions route:", err);
    res.status(500).json({ error: "Error fetching transactions", details: err.message });
  }
});

module.exports = router;
