const {expect} = require('chai'); 
const {ethers} = require('hardhat');

describe(' Chain of Responsibility Smart Contract', function() {
    let basicRole, BasicRole, superRole, SuperRole, roleAssignmentChainOfResponsibility, RoleAssignmentChainOfResponsibility;

    beforeEach(async function() {
        [owner] = await ethers.getSigners();
        BasicRole = await ethers.getContractFactory("BasicRole");
        basicRole = await BasicRole.deploy();
        await basicRole.deployed();
        SuperRole = await ethers.getContractFactory("SuperRole");
        superRole = await SuperRole.deploy();
        await superRole.deployed();

        RoleAssignmentChainOfResponsibility = await ethers.getContractFactory("RoleAssignmentChainOfResponsibility");
        roleAssignmentChainOfResponsibility = await RoleAssignmentChainOfResponsibility.deploy();
        await roleAssignmentChainOfResponsibility.deployed();

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

    it("should test handlers and emit correct events", async function () {
        // Call the testHandlers function
        await roleAssignmentChainOfResponsibility.testHandlers();
    
        // Check the emitted events
        const logs = await roleAssignmentChainOfResponsibility.queryFilter("Logging");
        expect(logs.length).to.equal(3); // Check the number of emitted events
    
        // Check the content of emitted events
        // expect(logs[0].args.description).to.equal(""); // Check the content of the first event
        // expect(logs[1].args.description).to.equal("Configuration of Production Process"); // Check the content of the second event
        // expect(logs[2].args.description).to.equal("Role subtyping has no handle function. It can be subtyped"); // Check the content of the third event
      });
    
});

