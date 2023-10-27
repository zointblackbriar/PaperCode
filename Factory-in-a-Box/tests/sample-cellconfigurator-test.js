

const { expect } = require("chai");
const { web3 } = require("hardhat");

// const CellConfigurator = artifacts.require("CellConfigurator"); 
describe("CellConfigurator", () => {
    let accounts; 
    let cellConfigurator;
    beforeEach(async() => {
        accounts = web3.eth.getAccounts()
        const CellConfigurator = await ethers.getContractFactory("CellConfigurator");
        cellConfigurator = await CellConfigurator.deploy(12); 
        await cellConfigurator.deployed();
    }); 

    it("sample test for getCompanyName", async() => {
         
        await cellConfigurator.setCompanyName("Production Incorporate");
        expect(await cellConfigurator.getCompanyName()).to.equal("Production Incorporate");

    }); 

    it("getting ID of the company", async() => {
        // }
        await cellConfigurator.setCompanyId("21"); 
        console.log(String(cellConfigurator.companyId()));
        expect(await cellConfigurator.companyId()).to.equal("21");

    });

}); 