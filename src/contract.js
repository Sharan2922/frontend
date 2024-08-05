// src/contract.js
import web3 from './web3';

const address = '0x2907a0c730957262d51692f6049fc1b9ad9b168d';
const abi = [
    {
        "inputs": [
          { "internalType": "uint256", "name": "_studentId", "type": "uint256" },
          { "internalType": "uint256", "name": "_documentId", "type": "uint256" },
          { "internalType": "string", "name": "_documentHash", "type": "string" },
          { "internalType": "string", "name": "_documentInfo", "type": "string" }
        ],
        "name": "addDocument",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "anonymous": false,
        "inputs": [
          { "indexed": true, "internalType": "uint256", "name": "studentId", "type": "uint256" },
          { "indexed": true, "internalType": "uint256", "name": "documentId", "type": "uint256" }
        ],
        "name": "DocumentVerified",
        "type": "event"
      },
      {
        "inputs": [
          { "internalType": "uint256", "name": "_instituteId", "type": "uint256" },
          { "internalType": "string", "name": "_name", "type": "string" },
          { "internalType": "string", "name": "_email", "type": "string" },
          { "internalType": "address", "name": "_instituteAddress", "type": "address" }
        ],
        "name": "registerInstitute",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          { "internalType": "uint256", "name": "_studentId", "type": "uint256" },
          { "internalType": "string", "name": "_name", "type": "string" },
          { "internalType": "string", "name": "_email", "type": "string" },
          { "internalType": "uint256", "name": "_instituteId", "type": "uint256" },
          { "internalType": "address", "name": "_studentAddress", "type": "address" }
        ],
        "name": "registerStudent",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          { "internalType": "uint256", "name": "_studentId", "type": "uint256" },
          { "internalType": "uint256", "name": "_documentId", "type": "uint256" }
        ],
        "name": "verifyDocument",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          { "internalType": "uint256", "name": "_studentId", "type": "uint256" },
          { "internalType": "uint256", "name": "_documentId", "type": "uint256" }
        ],
        "name": "getDocument",
        "outputs": [
          { "internalType": "string", "name": "", "type": "string" },
          { "internalType": "string", "name": "", "type": "string" },
          { "internalType": "bool", "name": "", "type": "bool" }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          { "internalType": "uint256", "name": "_instituteId", "type": "uint256" }
        ],
        "name": "getInstitute",
        "outputs": [
          { "internalType": "string", "name": "", "type": "string" },
          { "internalType": "string", "name": "", "type": "string" },
          { "internalType": "address", "name": "", "type": "address" }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          { "internalType": "uint256", "name": "_studentId", "type": "uint256" }
        ],
        "name": "getStudent",
        "outputs": [
          { "internalType": "string", "name": "", "type": "string" },
          { "internalType": "string", "name": "", "type": "string" },
          { "internalType": "uint256", "name": "", "type": "uint256" },
          { "internalType": "address", "name": "", "type": "address" }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          { "internalType": "address", "name": "", "type": "address" }
        ],
        "name": "instituteAddresses",
        "outputs": [
          { "internalType": "uint256", "name": "", "type": "uint256" }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          { "internalType": "uint256", "name": "", "type": "uint256" }
        ],
        "name": "institutes",
        "outputs": [
          { "internalType": "uint256", "name": "instituteId", "type": "uint256" },
          { "internalType": "string", "name": "name", "type": "string" },
          { "internalType": "string", "name": "email", "type": "string" },
          { "internalType": "address", "name": "instituteAddress", "type": "address" },
          { "internalType": "bool", "name": "registered", "type": "bool" }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          { "internalType": "address", "name": "_instituteAddress", "type": "address" }
        ],
        "name": "loginInstitute",
        "outputs": [
          { "internalType": "uint256", "name": "", "type": "uint256" },
          { "internalType": "string", "name": "", "type": "string" },
          { "internalType": "string", "name": "", "type": "string" }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          { "internalType": "address", "name": "_studentAddress", "type": "address" }
        ],
        "name": "loginStudent",
        "outputs": [
          { "internalType": "uint256", "name": "", "type": "uint256" },
          { "internalType": "string", "name": "", "type": "string" },
          { "internalType": "string", "name": "", "type": "string" }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          { "internalType": "address", "name": "", "type": "address" }
        ],
        "name": "studentAddresses",
        "outputs": [
          { "internalType": "uint256", "name": "", "type": "uint256" }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          { "internalType": "uint256", "name": "", "type": "uint256" }
        ],
        "name": "students",
        "outputs": [
          { "internalType": "uint256", "name": "studentId", "type": "uint256" },
          { "internalType": "string", "name": "name", "type": "string" },
          { "internalType": "string", "name": "email", "type": "string" },
          { "internalType": "uint256", "name": "instituteId", "type": "uint256" },
          { "internalType": "address", "name": "studentAddress", "type": "address" },
          { "internalType": "bool", "name": "registered", "type": "bool" }
        ],
        "stateMutability": "view",
        "type": "function"
      }   
];

const contract = new web3.eth.Contract(abi, address);

export default contract;
