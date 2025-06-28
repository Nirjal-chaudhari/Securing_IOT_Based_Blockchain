import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import './TransactionsPage.css';

const GANACHE_URL = process.env.REACT_APP_GANACHE_URL || 'http://127.0.0.1:7545';

function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [transactionStats, setTransactionStats] = useState({
    total: 0,
    successful: 0,
    failed: 0,
  });

  useEffect(() => {
    const initWeb3 = async () => {
      try {
        console.log('🔄 Attempting to connect to Ganache...');
        console.log('Ganache URL:', GANACHE_URL);

        const web3Instance = new Web3(GANACHE_URL);

        try {
          const networkId = await web3Instance.eth.net.getId();
          console.log('📡 Successfully connected to network ID:', networkId);

          const accounts = await web3Instance.eth.getAccounts();
          console.log('📡 Available accounts:', accounts);
        } catch (networkError) {
          console.error('❌ Network connection error:', networkError);
          throw new Error('Cannot connect to Ganache.');
        }

        setWeb3(web3Instance);
        setError(null);
      } catch (err) {
        console.error('❌ Detailed error:', err);
        setError('Failed to connect to Ganache: ' + err.message);
        setLoading(false);
      }
    };

    initWeb3();
  }, []);

  useEffect(() => {
    if (!web3) return;

    const fetchTransactions = async () => {
      try {
        console.log('🔄 Fetching transactions...');

        const latestBlock = await web3.eth.getBlockNumber();
        const transactions = [];
        let total = 0;
        let successful = 0;
        let failed = 0;

        const startBlock = Math.max(0, Number(latestBlock.toString()) - 20);

        for (let i = Number(latestBlock.toString()); i > startBlock; i--) {
          try {
            const block = await web3.eth.getBlock(i, true);

            if (block && block.transactions) {
              for (const tx of block.transactions) {
                const receipt = await web3.eth.getTransactionReceipt(tx.hash);
                const blockTimestamp = Number(block.timestamp.toString());
                const blockNum = Number(block.number.toString());

                const status = receipt.status ? 'Success' : 'Failed';
                if (status === 'Success') {
                  successful++;
                } else if (status === 'Failed') {
                  failed++;
                }

                transactions.push({
                  hash: tx.hash,
                  blockNumber: blockNum,
                  timestamp: new Date(blockTimestamp * 1000).toLocaleString(),
                  from: tx.from,
                  to: tx.to,
                  value: web3.utils.fromWei(tx.value, 'ether'),
                  status,
                });
              }
            }
          } catch (error) {
            console.error('Error processing block:', error);
          }
        }

        total = transactions.length;
        setTransactions(transactions);
        setTransactionStats({ total, successful, failed });
        setLoading(false);
      } catch (err) {
        console.error('❌ Error fetching transactions:', err);
        setError('Failed to fetch transactions: ' + err.message);
        setLoading(false);
      }
    };

    fetchTransactions();
    const interval = setInterval(fetchTransactions, 10000);
    return () => clearInterval(interval);
  }, [web3]);

  if (loading) {
    return <div className="loading">Loading transactions...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="transactions-container">
      <h1>Blockchain Transactions</h1>

      {/* Transaction Summary */}
      <div className="transaction-summary">
        <p>Total Transactions: {transactionStats.total}</p>
        <p>Successful Transactions: {transactionStats.successful}</p>
        <p>Failed Transactions: {transactionStats.failed}</p>
      </div>

      <div className="transactions-list">
        {transactions.map((tx) => (
          <div key={tx.hash} className="transaction-card">
            <div className="transaction-header">
              <span className="transaction-hash">Hash: {tx.hash}</span>
              <span className={`transaction-status ${tx.status.toLowerCase()}`}>
                {tx.status}
              </span>
            </div>
            <div className="transaction-details">
              <p>Block: {tx.blockNumber}</p>
              <p>Time: {tx.timestamp}</p>
              <p>From: {tx.from}</p>
              <p>To: {tx.to}</p>
              <p>Value: {tx.value} ETH</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TransactionsPage;
