const Web3 = require("web3");
const dotenv = require("dotenv");
dotenv.config();

const contractABI = require("../../smart_contracts/build/contracts/IoTStorage.json").abi;
const contractAddress = process.env.CONTRACT_ADDRESS;
const ganacheUrl = process.env.GANACHE_URL;

if (!contractAddress) {
  throw new Error("CONTRACT_ADDRESS not found in environment variables");
}

const web3 = new Web3(ganacheUrl);
const contract = new web3.eth.Contract(contractABI, contractAddress);

const storeCIDOnBlockchain = async (entryName, cid) => {
  try {
    const accounts = await web3.eth.getAccounts();

    // Get the current entry count to determine the latest entry index
    const entryCount = await contract.methods.entryCount().call();

    // Fetch the last stored CID (if any) using the entry count
    let storedCID = "";
    if (entryCount > 0) {
      const lastEntry = await contract.methods.getDataEntry(entryCount - 1).call();
      storedCID = lastEntry.cid;
    }

    if (storedCID === cid) {
      console.log("📜 CID already stored on Ethereum blockchain.");
      return null;
    }

    // Store the new CID on the blockchain
    const receipt = await contract.methods.storeCID(entryName, cid).send({ from: accounts[0] });
    console.log("✅ CID stored on Ethereum:", cid);
    return receipt.transactionHash; // Return the transaction hash
  } catch (error) {
    console.error("❌ Error storing CID on Ethereum:", error);
    throw error;
  }
};

module.exports = { storeCIDOnBlockchain };
