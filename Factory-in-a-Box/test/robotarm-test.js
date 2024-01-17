
const { expect } = require("chai");
const { ethers } = require("hardhat");

// const CellConfigurator = artifacts.require("CellConfigurator"); 
describe("RobotArm", () => {
    let robotArm;
    beforeEach(async() => {
        const RobotArm = await ethers.getContractFactory("RobotArm");
        robotArm = await RobotArm.deploy(); 
        expect(await robotArm.deployed()).to.emit("RobotArm Role has been activated");
    }); 

    it("should check and get the status of a part", async function() {
        // await robotArm.setCobotID("sampleID", "sampleName");
        // await robotArm.getCobotName("sampleID", "sampleName");
        // expect(await cobot.getCobotName("sampleID")).to.be.equal("sampleName");
        const partId = 1; 
        const newStatus = 1; 
        const newDescription = "Needs maintenance";

        await robotArm.checkPartRobotArm(partId, newStatus, newDescription);
        const[status, description] = await robotArm.getPartStatus(partId);
        expect(status).to.be.equal(newStatus);
        expect(description).to.be.equal(newDescription);
    });
});
