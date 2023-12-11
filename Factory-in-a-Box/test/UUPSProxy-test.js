const { expect} = require('chai'); 
const {ethers} = require('hardhat');

describe('UpdatedCellAgent', function() {
    let updatedCellAgent;
    let updatedCellAgentV2;
    beforeEach(async function()  {
        const UpdatedCellAgent = await ethers.getContractFactory("UpdatedCellAgent");
        const UpdatedCellAgentV2 = await ethers.getContractFactory("UpdatedCellAgentV2");
        updatedCellAgent = await UpdatedCellAgent.deploy();
        updatedCellAgentV2 = await UpdatedCellAgentV2.deploy();
        await updatedCellAgent.deployed();
        await updatedCellAgentV2.deployed();
    });

    it('should deploy the updated cell agent', async function() {

        // Cell the changeStateVariable function
        await updatedCellAgent.changeStateVariable(); 

        // Verify that the state variable has been changed
        await updatedCellAgent.setStateVariable();
        await updatedCellAgent.sampleVariable();
        await updatedCellAgent.changeStateVariable();
        expect(await updatedCellAgent.sampleVariable()).to.equal(4);
    });
});