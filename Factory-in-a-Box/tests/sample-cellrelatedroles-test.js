

const { expect } = require("chai");
const { ethers } = require("hardhat");

// const CellConfigurator = artifacts.require("CellConfigurator"); 
describe("CellConfigurator", () => {
    let cellConfigurator;
    let cellConfiguratorController;
    let cellConfiguratorAgent;
    beforeEach(async() => {
        const CellConfigurator = await ethers.getContractFactory("CellConfigurator");
        cellConfigurator = await CellConfigurator.deploy(12); 
        await cellConfigurator.deployed();

        const CellConfiguratorController = await ethers.getContractFactory("CellConfiguratorController");
        cellConfiguratorController = await CellConfiguratorController.deploy(); 
        await cellConfiguratorController.deployed();

        const CellMaintenanceAgent = await ethers.getContractFactory("CellMaintenanceAgent");
        cellMaintenanceAgent = await CellMaintenanceAgent.deploy(); 
        await cellMaintenanceAgent.deployed();


    }); 

    it("should initialize the owner", async function() {
        const [owner, account1, account2] = await ethers.getSigners();
        console.log("accounts: " + owner.address);
        console.log("accounts: " + account1.address);
        console.log("accounts: " + account2.address);
        console.log("getSigner result: " + await ethers.provider.getSigner(0).getAddress()); // it takes the result of owner address
        expect(owner.address).to.equal(await ethers.provider.getSigner(0).getAddress());
    });

    it("sample test for getCompanyName", async() => {
        await cellConfigurator.setCompanyName("Production Incorporate");
        expect(await cellConfigurator.getCompanyName()).to.equal("Production Incorporate");
    }); 

    it("getting ID of the company", async() => {
        await cellConfigurator.setCompanyId("21"); 
        console.log(String(cellConfigurator.companyId()));
        expect(await cellConfigurator.companyId()).to.equal("21");
    });

    it("should return Constants.ClassType.CellConfigurator", async() => {
        const contractType1 = await cellConfigurator.getType();
        const contractType2 = await cellConfiguratorController.getType();
        const contractType3 = await cellMaintenanceAgent.getType();
        expect(await cellConfigurator.getType()).to.equal(0);
        expect(await cellConfiguratorController.getType()).to.equal(1);
        expect(await cellMaintenanceAgent.getType()).to.equal(2);
    });

    it("should emit a Logging event when the constructor is called", async function() {
        const tx = await cellConfiguratorController.deployTransaction;
        const receipt = await tx.wait(); 
        const loggingEvent = receipt.events.find((event) => event.event == "Logging");
        console.log("loggingEvent is: " + loggingEvent);

        expect(loggingEvent).to.not.be.undefined;
        expect(loggingEvent.args.description).to.equal("CellConfiguratorController constructor has been called");

    })

}); 