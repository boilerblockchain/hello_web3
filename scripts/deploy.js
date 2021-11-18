// We require the Hardhat Runtime Environment explicitly here. This is optional 
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile 
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const HelloWeb3 = await hre.ethers.getContractFactory("HelloWeb3");
  const greeter = await HelloWeb3.deploy("Hello, Hardhat!");

  await greeter.deployed();

  console.log("HelloWeb3 deployed to:", greeter.address);
}

// Using this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
