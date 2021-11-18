
// use after deplyment to interact with the smart contract
const CONTRACT_ADDRESS = "the address to which you contract was deployed";

// import secret.json file
let secret = require("../secret.json")

const { ethers } = require("ethers");

const contract = require("../artifacts/contracts/HelloWeb3.sol/HelloWeb3.json");

// provider object: Alchemy
const alchemyProvider = new ethers.providers.AlchemyProvider(network = "ropsten", secret.api_key);

// signer object: Metamask (you)
const signer = new ethers.Wallet(secret.wallet_key, alchemyProvider);

// contract instance
// every interaction with the contract will be through the given address
const helloWeb3Contract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    //display current greeting
    const greeting = await helloWeb3Contract.greeting();
    console.log("The current greeting is: " + greeting);

    // update greeting
    const setHelloTx = await helloWeb3Contract.setGreeting("Hoooola! Web3");
    
    // wait until the transaction is mined
    await setHelloTx.wait();

    // displays changed greeting
    console.log("The new greeting is: " + await helloWeb3Contract.greet())
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });