const {expect} = require("chai");
const {ethers} = require("hardhat");
const { utils } = require ("ethers");

// Import contract factory generated from `hardhat compile` with typechain
// import { IERC165__factory, IERC2981__factory } from '@custom-types/contracts'


describe("MediatorPatternContract Testing", async function() {
    let MediatorPattern;
    let mediatorPattern;
    let owner;
    let Role;
    let role;

    beforeEach(async function() {
        [owner] = await ethers.getSigners();
        MediatorPattern = await ethers.getContractFactory("Mediator");
        mediatorPattern = await MediatorPattern.deploy();
        await mediatorPattern.deployed();

        Role = await ethers.getContractFactory("Role");
        role = await Role.deploy();
        await role.deployed();
    });

    it("should bind a role correctly", async function() {
        // TODO: interface id comparison
        const roleSpec = "admin role";
        const Role = await Role.deploy();
        await Role.deploy();
        await concreteMediator.bindRole(roleSpec, Role.address);
    });

    it("should unbind a role correctly", async function() {
        const roleSpec = "admin";
        const Role = await Role.deploy();
        await concreteMediator.bindRole(roleSpec, Role.address);
        await concreteMediator.unbindRole(roleSpec);
        const retrievedRole = await concreteMediator.getRole(roleSpec);
        expect(retrievedRole).to.equal(ethers.constants.AddressZero);
    });

    it("should set mediator correctly", async function() {
        const mediatorAddress = await Role.deploy();
        await mediatorAddress.deployed();
        await concreteMediator.setMediator(mediatorAddress.address);
        const isMediator = await concreteMediator.isMediator();
        expect(isMediator).to.equal(true);
    });
    
    it("should generate role correctly", async function() {
        const generatedRole = await concreteMediator.roleGenerate(roleAddress.address, concreteMediator.address);
        const isMediator = await generatedRole.isMediator();

        expect(isMedaitor).to.equal(true);
    });

});
