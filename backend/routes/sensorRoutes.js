const express = require("express");
const router = express.Router();
const { db } = require("../config/firebaseConfig");
const { uploadToIPFS } = require("../services/ipfsService");

// ✅ Fetch latest IoT data
router.get("/getSensorData", async (req, res) => {
  try {
    const snapshot = await db.ref("sensorData").once("value");
    if (snapshot.exists()) {
      res.status(200).json(snapshot.val());
    } else {
      res.status(404).json({ message: "No data found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Upload IoT data to IPFS
router.post("/uploadToIPFS", async (req, res) => {
  try {
    const { temperature, humidity, timestamp, serialNumber } = req.body;

    if (!temperature || !humidity || !timestamp || !serialNumber) {
      return res.status(400).json({ message: "Missing data fields" });
    }

    const jsonData = { temperature, humidity, timestamp, serialNumber };
    const cid = await uploadToIPFS(jsonData);

    res.status(200).json({ message: "Data uploaded to IPFS", CID: cid });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Export the router
module.exports = router;
