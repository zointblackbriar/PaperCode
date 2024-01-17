const { expect} = require('chai'); 
const {ethers} = require('hardhat');

describe('UpdatedCellAgent', function() {
    let updatedMaintenanceAgent;
    let updatedMaintenanceAgentV2;
    beforeEach(async function()  {
        const UpdatedAgent = await ethers.getContractFactory("UpdatedRobotArm");
        const UpdatedAgentV2 = await ethers.getContractFactory("UpdatedRobotArmV2");
        updatedMaintenanceAgent = await UpdatedAgent.deploy();
        updatedMaintenanceAgentV2 = await UpdatedAgentV2.deploy();
        await updatedMaintenanceAgent.deployed();
        await updatedMaintenanceAgentV2.deployed();
    });

    it('should deploy the updated maintenance agent', async function() {

        // Cell the changeStateVariable function
        expect(await updatedMaintenanceAgent.addFunctionalityToRobotArm()).to.be.equal("Updated RobotArm"); 

    });
});