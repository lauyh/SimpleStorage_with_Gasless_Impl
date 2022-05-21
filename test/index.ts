import { expect } from "chai";
import { ethers } from "hardhat";

const POLYGON_MUMBAI_TRUSTFORWARDER = "0x9399BB24DBB5C4b782C70c2969F58716Ebbd6a3b"

describe("Simple storage", function () {
  it("Should return value after adding the value", async function () {
    const contract = await ethers.getContractFactory("SimpleStorage");
    const simpleStorage = await contract.deploy(POLYGON_MUMBAI_TRUSTFORWARDER);
    await simpleStorage.deployed();
    await simpleStorage.setStorage("This is a test");
    const tmp = await simpleStorage.getStorage()
    expect(tmp).to.equal("This is a test");
  });
});
