# Securing IoT Data Using Blockchain
Securing IoT Data Using Blockchain is a decentralized system designed to ensure the integrity and authenticity of real-time IoT sensor data. The project uses IPFS to securely store data and the Ethereum blockchain to store the corresponding content identifier (CID) for tamper-proof verification. A React.js frontend and Node.js backend provide a seamless interface for monitoring and validating IoT data.

# Features
Decentralized Data Storage: IoT data is stored on IPFS, ensuring immutability and accessibility.

Blockchain Integration: CIDs are recorded on the Ethereum blockchain to verify data authenticity.

Real-Time Data Handling: Collects live sensor data using IoT devices and displays it on the dashboard.

Transaction History: Displays CID hashes and blockchain transaction logs.

Data Integrity Checks: Cross-verifies stored data with the blockchain to detect tampering.

# Technologies Used
React.js – Frontend interface

Node.js + Express – Backend API

Web3.js – Ethereum blockchain interaction

IPFS (via Pinata) – Decentralized file storage

Firebase – Temporarily used for real-time data before full decentralization

Ganache – Local Ethereum testing environment

Smart Contracts (Solidity + Truffle) – For CID storage and retrieval

# Project Structure
Data Flow: IoT Sensor → Firebase → IPFS → Ethereum Blockchain

# Frontend:

Real-time Dashboard

Transactions Page

Detailed View Page

# Backend Services:

Listen to Firebase updates

Upload data to IPFS

Store CID on the Ethereum blockchain

# Benefits
Ensures data immutability, transparency, and security

Provides decentralized verification of IoT data

Detects and prevents data tampering

Suitable for smart cities, healthcare applications, and industrial IoT

# Conclusion
This project demonstrates a practical use of blockchain technology to enhance the security and reliability of IoT data. By leveraging IPFS and Ethereum, it offers a transparent, decentralized solution for protecting and verifying real-time sensor data.
