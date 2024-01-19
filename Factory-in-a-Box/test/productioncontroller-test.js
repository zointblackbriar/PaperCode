const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ProductionController", function() {
    let ProductionController;
    let boxProduction;

    beforeEach(async function() {
        [owner] = await ethers.getSigners();
        ProductionController = await ethers.getContractFactory("ProductionController");
        boxProduction = await ProductionController.deploy(); 
        await boxProduction.deployed();
    });

    it("Should start a production phase", async function() {
        const description = "New Production Unit"; 
        await boxProduction.connect(owner).startProductionProcess(description);
        const [processDescription, qualityStatus, timestamp] = await boxProduction.getProcessDetails(1);
        expect(processDescription).to.equal(description);
        expect(qualityStatus).to.equal(0); //Quality Status Pending
        expect(timestamp).to.not.equal(0);
    });

    it("Should check the quality of a production phase", async function() {
        const description = "New Production Process";
        await boxProduction.connect(owner).startProductionProcess(description);
        await boxProduction.connect(owner).checkProductionQuality(1, 1); // Assuming QualityStatus.Approved
        const[processDescription, qualityStatus, timestamp] = await boxProduction.getProcessDetails(1);
        expect(processDescription).to.equal(description);
        expect(qualityStatus).to.equal(1); //QualityStatus.Approved
        expect(timestamp).to.not.equal(0);
    });
});