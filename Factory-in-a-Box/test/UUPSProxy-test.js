const { expect} = require('chai'); 
const {ethers} = require('hardhat');

describe('UpdatedCellAgent', function() {
    let updatedCellAgent;
    beforeEach(async function()  {
        const UpdatedCellAgent = await ethers.getContractFactory("UpdatedCellAgent");
        updatedCellAgent = await UpdatedCellAgent.deploy();
        await updatedCellAgent.deployed();
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