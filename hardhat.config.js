require("@nomiclabs/hardhat-waffle");

//import secret.json file
let secret = require("./secret.json")

// Hardhat task printing accounts (Signers)
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: secret.api_url,
      accounts: [secret.wallet_key]
    }
  }
};

