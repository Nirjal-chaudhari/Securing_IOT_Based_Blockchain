// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IoTStorage {
    // Event to log storage of CID and entry number
    event CIDStored(string indexed entryName, string cid);
    
    // Mapping to store CIDs with their entry numbers
    mapping(string => string) public entries;
    
    // Function to store CID with entry number
    function storeCID(string memory _entryName, string memory _cid) public {
        // Store the CID
        entries[_entryName] = _cid;
        
        // Emit event - this will show up in Ganache GUI
        emit CIDStored(_entryName, _cid);
    }
    
    // Function to retrieve CID by entry number
    function getCID(string memory _entryName) public view returns (string memory) {
        return entries[_entryName];
    }
} 