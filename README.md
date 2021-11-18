# hello_web3

This is your first basic interaction with Web3. 
It is based on the hardhat dev environment and interacts with the Ethereum blockchain

These are the **instructions** to follow:

| Action / Command | Description |
| --- | --- |
| `git clone <code_link>` | Clone repo in your chosen location, make sure all dependencies are installed |
| update WALLEY_KEY, API_URL, and API_KEY on secret.json | Paste fields following provided instructions. Recommended, wallet: Metamask, node provider: Alchemy / Infura |
| `npx hardhat compile` | Compile smart contract |
| `npx hardhat test` | Run test of the setGreeting() function in HelloWeb3.sol |
| `npx hardhat run scripts/deploy.js --network <network_name>` | Deploy smart contract. Returns address at which it was deployed |
| update CONTRACT_ADDRESS on interact.js | Paste returned address of deployment to make sure the script interacts with the deployed instance of the contract |
| `npx hardhat run scripts/interact.js` | Updates the smart contract's greeting live on the blockchain |
