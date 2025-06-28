const Web3 = require("web3");
require('dotenv').config();
const path = require('path');

// Get contract address from .env
const contractAddress = process.env.CONTRACT_ADDRESS;
const ganacheUrl = process.env.GANACHE_URL || "HTTP://127.0.0.1:7545";

const web3 = new Web3(ganacheUrl);
const contractABI = require('../../smart_contracts/build/contracts/IoTStorage.json').abi;

if (!contractAddress) {
    throw new Error("CONTRACT_ADDRESS not found in .env file");
}

const contract = new web3.eth.Contract(contractABI, contractAddress);

const getAllTransactions = async (req, res) => {
    try {
        // Get the entry count
        const entryCount = await contract.methods.entryCount().call();
        
        // Get past events in a single call instead of looping
        const events = await contract.getPastEvents('CIDStored', {
            fromBlock: 0,
            toBlock: 'latest'
        });

        // Map events to transactions with Promise.all for parallel processing
        const transactions = await Promise.all(events.map(async (event) => {
            const { entryIndex, entryName, cid, sender } = event.returnValues;
            const block = await web3.eth.getBlock(event.blockNumber);
            
            return {
                transactionHash: event.transactionHash,
                blockNumber: event.blockNumber,
                timestamp: new Date(block.timestamp * 1000).toLocaleString(),
                entryIndex: entryIndex,
                entryName: entryName,
                cid: cid,
                sender: sender
            };
        }));

        // Sort by block number in descending order (newest first)
        transactions.sort((a, b) => b.blockNumber - a.blockNumber);

        res.json(transactions);
    } catch (error) {
        console.error("Error fetching transactions:", error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getAllTransactions };
