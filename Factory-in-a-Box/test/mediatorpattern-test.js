const {expect} = require("chai");
const {ethers} = require("hardhat");
const { utils } = require ("ethers");


describe("MediatorPatternContract Testing", async function() {
    // let MediatorPattern;
    // let mediatorPattern;
    let ConcreteMediator;
    let concreteMediator;
    let owner;
    let Role;
    let role;

    beforeEach(async function() {
        [owner] = await ethers.getSigners();
        // MediatorPattern = await ethers.getContractFactory("Mediator");
        // mediatorPattern = await MediatorPattern.deploy();
        // await mediatorPattern.deployed();

        ConcreteMediator = await ethers.getContractFactory("ConcreteMediator");
        concreteMediator = await ConcreteMediator.deploy();
        await concreteMediator.deployed();

        // Role = await ethers.getContractFactory("Role");
        // // role = await Role.deploy();
        // await role.deployed();
    });

    it.skip("should bind a role correctly", async function() {
        // TODO: interface id comparison
        // const roleSpec = "admin role";
        // const Role = await Role.deploy();
        // await Role.deploy();
        await concreteMediator.bindRole(roleSpec, Role.address);
    });

    it.skip("should unbind a role correctly", async function() {
        const roleSpec = "admin";
        const Role = await Role.deploy();
        await concreteMediator.bindRole(roleSpec, Role.address);
        await concreteMediator.unbindRole(roleSpec);
        const retrievedRole = await concreteMediator.getRole(roleSpec);
        expect(retrievedRole).to.equal(ethers.constants.AddressZero);
    });

    it.skip("should set mediator correctly", async function() {
        const mediatorAddress = await Role.deploy();
        await mediatorAddress.deployed();
        await concreteMediator.setMediator(mediatorAddress.address);
        const isMediator = await concreteMediator.isMediator();
        expect(isMediator).to.equal(true);
    });
    
    it.skip("should generate role correctly", async function() {
        const generatedRole = await concreteMediator.roleGenerate(roleAddress.address, concreteMediator.address);
        const isMediator = await generatedRole.isMediator();

        expect(isMediator).to.equal(true);
    });

});
