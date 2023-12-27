const { expect} = require('chai'); 
const {ethers} = require('hardhat');

describe('UpdatedCellAgent', function() {
    let updatedMaintenanceAgent;
    let updatedMaintenanceAgentV2;
    beforeEach(async function()  {
        const UpdatedAgent = await ethers.getContractFactory("UpdatedMaintenanceAgent");
        const UpdatedAgentV2 = await ethers.getContractFactory("UpdatedMaintenanceAgentV2");
        updatedMaintenanceAgent = await UpdatedAgent.deploy();
        updatedMaintenanceAgentV2 = await UpdatedAgentV2.deploy();
        await updatedMaintenanceAgent.deployed();
        await updatedMaintenanceAgentV2.deployed();
    });

    it('should deploy the updated maintenance agent', async function() {

        // Cell the changeStateVariable function
        await updatedMaintenanceAgent.changeStateVariable(); 

        // Verify that the state variable has been changed
        await updatedMaintenanceAgent.setStateVariable();
        await updatedMaintenanceAgent.sampleVariable();
        await updatedMaintenanceAgent.changeStateVariable();
        expect(await updatedMaintenanceAgent.sampleVariable()).to.equal(4);
    });
});