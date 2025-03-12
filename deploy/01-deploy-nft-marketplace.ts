import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import { ethers } from "hardhat"

const deployNftMarketplace: DeployFunction = async (
    hre: HardhatRuntimeEnvironment
) => {
    const { deployments, getNamedAccounts, network } = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    log("----------------------------------------------------")
    log(`Deploying NftMarketplace contract on ${network.name}...`)

    const nftMarketplace = await deploy("NftMarketplace", {
        from: deployer,
        args: [], // Add constructor arguments here if needed
        log: true,
        waitConfirmations: network.name === "sepolia" ? 6 : 1, // Adjust confirmations based on network
    })

    log(`✅ NftMarketplace deployed at: ${nftMarketplace.address}`)
    log("----------------------------------------------------")
}

export default deployNftMarketplace
deployNftMarketplace.tags = ["all", "nftmarketplace"]
