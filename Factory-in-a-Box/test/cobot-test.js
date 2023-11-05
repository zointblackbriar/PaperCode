
const { expect } = require("chai");
const { ethers } = require("hardhat");

// const CellConfigurator = artifacts.require("CellConfigurator"); 
describe("Cobot", () => {
    let cobot;
    beforeEach(async() => {
        const Cobot = await ethers.getContractFactory("Cobot");
        cobot = await Cobot.deploy(); 
        expect(await cobot.deployed()).to.emit("Cobot Role has been activated");
    }); 

    it("should assign cobot id and name correctly", async function() {
        await cobot.setCobotID("sampleID", "sampleName");
        await cobot.getCobotName("sampleID", "sampleName");
        // expect(await cobot.getCobotName("sampleID")).to.be.equal("sampleName");
    });
});
