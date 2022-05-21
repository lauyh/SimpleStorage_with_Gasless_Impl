import { expect } from "chai";
import { ethers } from "hardhat";

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const contract = await ethers.getContractFactory("SimpleStorage");
    const simpleStorage = await contract.deploy("Hello, world!");
    await simpleStorage.deployed();
  });
});
