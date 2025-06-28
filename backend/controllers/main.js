const { uploadToIPFS } = require("./uploadToIPFS");
const { storeCIDOnBlockchain } = require("./storeOnBlockchain");

const sensorData = {
  temperature: 25.5,
  humidity: 60,
  timestamp: Date.now(),
};

const processData = async () => {
  try {
    // Upload data to IPFS and get CID
    const cid = await uploadToIPFS(sensorData);

    // Store CID on Ethereum blockchain
    await storeCIDOnBlockchain(cid);

    console.log("🔗 IoT Data securely stored on Blockchain & IPFS. CID:", cid);
  } catch (error) {
    console.error("❌ Error in process:", error);
  }
};

// Run the process
processData();
