import { ethers } from "hardhat";

async function main() {
    const NFT = await ethers.getContractFactory("NFT");
    const nft = await NFT.deploy();
    await nft.waitForDeployment();
    console.log(`NFT Contract deployed to: ${await nft.getAddress()}`);

    const Marketplace = await ethers.getContractFactory("NFTMarketplace");
    const marketplace = await Marketplace.deploy();
    await marketplace.waitForDeployment();
    console.log(`Marketplace Contract deployed to: ${await marketplace.getAddress()}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
