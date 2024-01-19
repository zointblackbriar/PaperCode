const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CellConfigurator", () => {
    let productionController;
    let productionConfigurator;
    let maintenanceAgent;
    beforeEach(async() => {
        const ProductionConfigurator = await ethers.getContractFactory("ProductionConfigurator");
        productionConfigurator = await ProductionConfigurator.deploy(); 
        await productionConfigurator.deployed();

        const ProductionController = await ethers.getContractFactory("ProductionController");
        productionController = await ProductionController.deploy(); 
        await productionController.deployed();

        const MaintenanceAgent = await ethers.getContractFactory("MaintenanceAgent");
        maintenanceAgent = await MaintenanceAgent.deploy(); 
        await maintenanceAgent.deployed();


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
        await productionConfigurator.setCompanyName("Production Incorporate");
        expect(await productionConfigurator.getCompanyName()).to.equal("Production Incorporate");
    }); 

    // it("getting ID of the company", async() => {
    //     await productionConfigurator.setCompanyId("21"); 
    //     console.log(String(productionConfigurator.companyId()));
    //     expect(await productionConfigurator.companyId()).to.equal("21");
    // });

    it("should return Constants.ClassType.productionConfigurator", async() => {
        const contractType1 = await productionConfigurator.roleAssignment();
        const contractType2 = await productionController.roleAssignment();
        const contractType3 = await maintenanceAgent.roleAssignment();
        expect(await productionConfigurator.roleAssignment()).to.equal(0);
        expect(await productionController.roleAssignment()).to.equal(1);
        expect(await maintenanceAgent.roleAssignment()).to.equal(2);
    });

    it("should emit a Logging event when the constructor is called", async function() {
        const tx = await productionController.deployTransaction;
        const receipt = await tx.wait(); 
        const loggingEvent = receipt.events.find((event) => event.event == "Logging");
        console.log("loggingEvent is: " + loggingEvent);

        expect(loggingEvent).to.not.be.undefined;
        expect(loggingEvent.args.description).to.equal("productionConfigurator constructor has been called");
    });

}); 