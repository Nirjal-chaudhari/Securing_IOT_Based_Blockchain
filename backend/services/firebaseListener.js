const { db } = require("../config/firebaseConfig");
const { uploadToIPFS } = require("./ipfsService");
const { storeCIDOnBlockchain } = require("../controllers/storeOnBlockchain");

const listenToFirebase = () => {
  const sensorDataRef = db.ref("sensorData");

  // Listen for new sensor data entries
  sensorDataRef.on("child_added", async (snapshot) => {
    try {
      const newData = snapshot.val();
      const entry_no = snapshot.key; // This gets the entry_1, entry_2, etc. from Firebase
      const { cid } = newData;

      console.log("✅ New IoT data detected:", newData);

      // 👉 Check if CID already exists — skip if it does
      if (cid) {
        console.log(`ℹ️ Data with entry_no ${entry_no} already has a CID (${cid}), skipping...`);
        return;
      }

      // Prepare file name for IPFS (entry_1, entry_2, etc.)
      const fileName = `entry_${entry_no}`;

      // Upload data to IPFS
      const newCID = await uploadToIPFS(newData, fileName);
      console.log(`✅ Data uploaded to IPFS as ${fileName}, CID: ${newCID}`);

      // Store CID in Firebase
      await db.ref(`sensorData/${snapshot.key}`).update({ cid: newCID });
      console.log("✅ CID stored in Firebase successfully!");

      // Store CID + entry name on Blockchain
      const txHash = await storeCIDOnBlockchain(fileName, newCID);
      console.log("✅ CID stored on Blockchain, Transaction Hash:", txHash);

    } catch (error) {
      console.error("❌ Error handling new IoT data:", error);
    }
  });
};

module.exports = { listenToFirebase };
  