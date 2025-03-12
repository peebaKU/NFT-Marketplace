## Local Development

### 1. Run Hardhat Node
First, start a local Hardhat node:
```bash
yarn hardhat node
```
This will start a local Ethereum network for development and display a list of available accounts with test ETH.

### 2. Deploy Smart Contracts
In a new terminal window, compile and deploy the smart contracts:

```bash
# Compile the smart contracts
yarn hardhat compile

# Deploy to local network
yarn hardhat run scripts/deploy.ts --network localhost
```

Make sure to save the deployed contract addresses displayed in the console - you'll need them for frontend integration.

**Note:** Keep the Hardhat node running in a separate terminal while developing and testing your application.


### .env 
```bash
SEPOLIA_RPC_URL=""
PRIVATE_KEY=""
ETHERSCAN_API_KEY=""
```