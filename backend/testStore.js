const { storeCIDOnBlockchain } = require("./storeOnBlockchain");

const testCID = "QmSaetSDDPDUtnJSkUYEdwxDJbngkrmGqoYD439DE2HRz6"; // Replace with a real IPFS CID

storeCIDOnBlockchain(testCID)
  .then((txHash) => console.log("✅ CID stored successfully in transaction:", txHash))
  .catch((err) => console.error("❌ Storage failed:", err));
