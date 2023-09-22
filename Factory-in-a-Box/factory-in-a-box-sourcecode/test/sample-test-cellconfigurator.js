

const { assert } = require("chai");
const { web3 } = require("hardhat");

const CellConfigurator = artifacts.require("CellConfigurator"); 
describe("CellConfigurator", () => {
    let accounts; 
    beforeEach(async() => {
        accounts = web3.eth.getAccounts()
        configuratorObject = await CellConfigurator.new(12);
    }); 

    it("sample test for getCompanyName", async() => {
         
        await configuratorObject.setCompanyName("Production Incorporate");
        assert.expect("Production Incorporate", configuratorObject.companyName());

    }); 

    it("getting ID of the company", async() => {
        await configuratorObject.setCompanyId("21"); 
        console.log(String(configuratorObject.companyId()));
        assert.equal("21", String(configuratorObject.companyId()));

    })
}); 