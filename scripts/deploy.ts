import { ethers } from "hardhat";

const POLYGON_MUMBAI_TRUSTFORWARDER = "0x9399BB24DBB5C4b782C70c2969F58716Ebbd6a3b"
async function main() {
  // We get the contract to deploy
  const contract = await ethers.getContractFactory("SimpleStorage");
  const storage = await contract.deploy(
    POLYGON_MUMBAI_TRUSTFORWARDER
  );

  await storage.deployed();

  console.log("Greeter deployed to:", storage.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
