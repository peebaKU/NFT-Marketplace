import "@typechain/hardhat"
import "@nomiclabs/hardhat-waffle"
import "@nomiclabs/hardhat-etherscan"
import "@nomiclabs/hardhat-ethers"
import "hardhat-gas-reporter"
import "dotenv/config"
import "solidity-coverage"
import "hardhat-deploy"
import "solidity-coverage"
import { HardhatUserConfig } from "hardhat/config"

 
 import * as dotenv from "dotenv"
 dotenv.config()
 
 const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || ""
 const PRIVATE_KEY = process.env.PRIVATE_KEY || ""
 
 const config: HardhatUserConfig = {
     defaultNetwork: "hardhat",
     networks: {
         hardhat: {
             chainId: 31337,
         },
         sepolia: {
            url: SEPOLIA_RPC_URL,
            accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
            gasPrice: 5000000000, // 5 Gwei instead of 10 Gwei
            chainId: 11155111,
        },
        
     },
     solidity: {
         compilers: [
             { version: "0.8.7" },
             { version: "0.6.6" },
         ],
     },
     etherscan: {
         apiKey: process.env.ETHERSCAN_API_KEY,
     },
     gasReporter: {
         enabled: true,
         currency: "USD",
         outputFile: "gas-report.txt",
         noColors: true,
     },
     namedAccounts: {
         deployer: { default: 0 },
     },
     mocha: { timeout: 200000 },
 }
 
 export default config
 