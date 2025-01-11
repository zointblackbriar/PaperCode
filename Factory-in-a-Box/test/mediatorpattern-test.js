const {expect} = require("chai");
const {ethers} = require("hardhat");
const { utils } = require ("ethers");


describe("MediatorPatternContract Testing", async function() {
    // let MediatorPattern;
    // let mediatorPattern;
    let ConcreteMediator;
    let concreteMediator;
    let ProductionControllerRole;
    let productionControllerRole;
    let owner;

    beforeEach(async function() {
        [owner] = await ethers.getSigners();
        // MediatorPattern = await ethers.getContractFactory("Mediator");
        // mediatorPattern = await MediatorPattern.deploy();
        // await mediatorPattern.deployed();

        ConcreteMediator = await ethers.getContractFactory("ConcreteMediator");
        concreteMediator = await ConcreteMediator.deploy();
        await concreteMediator.deployed();
        
        ProductionControllerRole = await ethers.getContractFactory("ProductionControllerRole");
        productionControllerRole = await ProductionControllerRole.deploy();
        await productionControllerRole.deployed();

    });

    it("should bind a role correctly", async function() {
        await concreteMediator.bindRole(productionControllerRole.address);
        const retrievedRole = await concreteMediator.getRole(productionControllerRole.address);
        expect(retrievedRole).not.to.equal(ethers.constants.AddressZero)
    });

    it("should unbind a role correctly", async function() {
        await concreteMediator.unbindRole(productionControllerRole.address);
        let assignedRole = await concreteMediator.assignedRoles(productionControllerRole.address);
        const retrievedRole = await concreteMediator.getRole(productionControllerRole.address);
        expect(retrievedRole.value).to.equal(0);
    });


});
