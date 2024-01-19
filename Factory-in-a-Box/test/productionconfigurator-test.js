const {expect} = require("chai")
const {ethers} = require("hardhat")

describe("FactoryBoxProductionConfigurator", async function () {
    let ProductionConfigurator;
    let productionConfigurator;

    beforeEach(async function() {
        [owner] = await ethers.getSigners();
        ProductionConfigurator = await ethers.getContractFactory("ProductionConfigurator");
        productionConfigurator = await ProductionConfigurator.deploy();
        await productionConfigurator.deployed();
    });

    it("Should configure a production process", async function() {
        const processDescription = "New production process";
        const resourceAllocation = 50; // random number for resource allocation
        await productionConfigurator.connect(owner).configureProduction(processDescription, resourceAllocation);
        const [configDescription, configAllocation, timestamp] = await productionConfigurator.getConfigurationDetails(1); // Configuration ID
        expect(configDescription).to.equal(processDescription);
        expect(configAllocation).to.equal(resourceAllocation);
        expect(timestamp).to.not.equal(0);
    });

});