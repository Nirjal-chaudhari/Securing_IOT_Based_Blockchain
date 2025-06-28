const { web3, contract } = require("../config/ethereumConfig");

const storeCIDOnBlockchain = async (entryName, cid) => {
  try {
    const accounts = await web3.eth.getAccounts();

    const receipt = await contract.methods
      .storeCID(entryName, cid)
      .send({ from: accounts[0], gas: 300000 });

    console.log("✅ Transaction successful! Receipt:", receipt.transactionHash);
    return receipt.transactionHash;

  } catch (error) {
    console.error("❌ Error storing CID on blockchain:", error);
    throw error;
  }
};

module.exports = { storeCIDOnBlockchain };
