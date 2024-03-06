const {expect} = require("chai");
const {ethers} = require("hardhat");
const { utils } = require ("ethers");

// Import contract factory generated from `hardhat compile` with typechain
import { IERC165__factory, IERC2981__factory } from '@custom-types/contracts'


describe("MediatorPatternContract Testing", async function() {
    let MediatorPattern;
    let mediatorPattern;
    let owner;
    beforeEach(async function() {
        [owner] = await ethers.getSigners();
        MediatorPattern = await ethers.getContractFactory("Mediator");
        mediatorPattern = await MediatorPattern.deploy();
        await mediatorPattern.deployed();
    });

    it("should returns the interface id", async function() {
        // TODO: interface id comparison
    });

});
