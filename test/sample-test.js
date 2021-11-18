const { expect } = require("chai");

describe("HelloWeb3", function() {
  it("Should return the new greeting once it's changed", async function() {
    const HelloWeb3 = await ethers.getContractFactory("HelloWeb3");
    const greeter = await HelloWeb3.deploy("Hello Web3!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello Web3!");

    const setGreetingTx = await greeter.setGreeting("Hola Web3!");
    
    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola Web3!");
  });
});
