const { Accounts } = require("web3-eth-accounts");
const { default: Web3 } = require("web3/types");

// install solc compiler
solc = require("solc");

// read the file
fs = require("fs");

// deploy in Ganache. Use web3 w/o cannot connect to Ganache
Web3 = require("web3");
let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

// Read content of the file
let fileContent = fs.readFileSync("index.sol").toString();

console.log(fileContent);

var input = {
    language: "Solidity",
    sources: {
        "index.sol": {
            content: fileContent,
        },
    },
    settings: {
        outputSelection: {
            "*": {
                "*": ["*"],
            },
        },
    },
};

var output = JSON.parse(solc.compile(JSON.stringify(input)));
console.log(output);

ABI = output.contracts["index.sol"]["demo"].abi;
bytecode = output.contracts["index.sol"]["demi"].evm.bytecode.object;
console.log("ABI: ", ABI)
console.log("Bytecode: ", bytecode)

contract = new web3.eth.Contract(ABI);

web3.eth.getAccounts().then((accounts) => {
    console.log("Account: ", accounts);
});