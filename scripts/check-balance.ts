import { ethers } from "hardhat"

async function checkBalance() {
  const [deployer] = await ethers.getSigners();
  const balance = await deployer.getBalance();
  
  console.log("Deployer Address:", deployer.address);
  console.log("Balance:", ethers.utils.formatEther(balance), "ETH");
}

checkBalance()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
