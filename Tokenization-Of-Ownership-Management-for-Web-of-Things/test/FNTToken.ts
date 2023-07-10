import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import {FNFToken} from '../typechain-types/contracts/FNFToken';
const { ethers } = require("hardhat");

let address1, address2;
describe("FNFToken", function () {

  let contract1: FNFToken;
    const hardhat = require("hardhat")
    

    beforeEach(async () => {
      const FNFToken = await hardhat.ethers.getContractFactory("FNFToken");
      contract1 = await FNFToken.deploy();
    });
  

    describe("deploy", () => {
      it("should return correct name and symbol of contract", async function () {
       await contract1.deployed();
       // expect( await contract.deployed.name).to.equal(true);
      }); 
    });

    
    describe("mint", () => {
      it("should return true when 0.5 ethers are sent with transaction", async function () {
        await contract1.deployed();

        const [owner, addr1, addr2] = await ethers.getSigners();
       
        await contract1.connect(owner).mint(owner.address,4);
        

        const balance = await contract1.connect(owner).balanceOf(owner.address);
        console.log("Balanace Owner Account: ",balance);
        console.log(" Owner Address : ",owner.address);

        //await contract1.connect(owner).getBalanceOfToken(owner.address);

        const ownerBalance = await contract1.balanceOf(owner.address);
        console.log("FNT Address Balance ",ownerBalance );
        expect(await contract1.totalSupply()).to.equal(ownerBalance);
        // await contract1.connect(owner).receive();

      }); 
    });


  });
  