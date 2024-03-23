const {expect} = require('chai'); 
const {ethers} = require('hardhat');

describe(' Chain of Responsibility Contracts', function() {
    let basicRole, BasicRole, superRole, SuperRole;

    beforeEach(async function() {
        [owner] = await ethers.getSigners();
        BasicRole = await ethers.getContractFactory("BasicRole");
        basicRole = await BasicRole.deploy();
        await basicRole.deployed();
        SuperRole = await ethers.getContractFactory("SuperRole");
        superRole = await SuperRole.deploy();
        await superRole.deployed();

    });

    it("should handle requests correctly", async function() {
        roleText1 = "Robotarm role"
        roleText2 = "Production Controller Super Role"
        const encoder = new TextEncoder();
        const encodedArray = encoder.encode(roleText1);
        const encodedArray2 = encoder.encode(roleText1);
        const bytes1 = new Uint32Array(encodedArray);
        const bytes2 = new Uint32Array(encodedArray2);
        console.log(bytes1)
        console.log(bytes2)

        await basicRole.handle(bytes1);
        await superRole.handle(bytes2);
    });
});

