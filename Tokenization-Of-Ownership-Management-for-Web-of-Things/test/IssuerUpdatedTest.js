const {expect} = requre('chai'); 
const {ethers} = require('hardhat');
import { Issuer } from '../typechain-types/contracts/AdministrativeRoles/Issuer';

describe ('Issuer Contract', function() {
    let issuer; 
    let owner; 
    let receiver; 
    let addr1; 

    before(async function() {
        const Issuer = await ethers.getContractFactory('Issuer'); 
        issuer = await Issuer.deploy('SecurityToken', 'SecurityToken'); 
        await issuer.deployed();

        [owner, receiver, addr1] = await ethers.getSigners();
        console.log("owner address: " + owner.address);
        console.log("receiver address: " + receiver.address); 
        console.log("random access on the blockchain network", addr1.address);
    });

    it('Should return the correct owner', async function() {
        const contractOwner = await Issuer.owner(); 
        expect(contractOwner).to.equal(owner.address);
    });
});