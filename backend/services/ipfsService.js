const PinataSDK = require("@pinata/sdk");
const dotenv = require("dotenv");
dotenv.config();

// Initialize Pinata with API keys from .env
const pinata = new PinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_SECRET_KEY);

// Function to upload JSON data to IPFS with a fileName
const uploadToIPFS = async (data, fileName) => {
  try {
    const result = await pinata.pinJSONToIPFS(data, {
      pinataMetadata: {
        name: fileName, // ✅ this adds the custom file name
      },
    });

    console.log(`✅ Data uploaded to IPFS. Name: ${fileName}, CID: ${result.IpfsHash}`);
    return result.IpfsHash; // Return the CID (hash)
  } catch (error) {
    console.error("❌ Error uploading to IPFS:", error);
    throw error;
  }
};

// Export the function
module.exports = { uploadToIPFS };
