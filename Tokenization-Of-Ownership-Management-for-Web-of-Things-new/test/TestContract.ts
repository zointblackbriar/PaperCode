// import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
// import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
// import { expect } from "chai";
// import {TestContract} from '../typechain-types/contracts/TestContract';
// const { ethers } = require("hardhat");

// let address1, address2;
// describe("TestContract", function () {

//   let contract1: TestContract;
//     const hardhat = require("hardhat")
    

//     beforeEach(async () => {
//       const TestContract = await hardhat.ethers.getContractFactory("TestContract");
//       contract1 = await TestContract.deploy();
//     });
  

//     describe("deploy", () => {
//       it("should return correct name and symbol of contract", async function () {
//        await contract1.deployed();
//        // expect( await contract.deployed.name).to.equal(true);
//       }); 
//     });

    
//     describe("mint", () => {
//       it("should return true when 0.5 ethers are sent with transaction", async function () {
//         await contract1.deployed();

//         const [owner, addr1, addr2] = await ethers.getSigners();
       
//         await contract1.connect(owner).safeMint(owner.address,4);
        

//         const balance = await contract1.connect(owner).balanceOf(owner.address);
//         console.log("Balanace Owner Account: ",balance);
//         console.log(" Owner Address : ",owner.address);

//         //await contract1.connect(owner).getBalanceOfToken(owner.address);

//         const ownerBalance = await contract1.balanceOf(owner.address);
//         console.log("FNT Address BAlance ",ownerBalance );



//        const a = await contract1.connect(owner).getContractAddress();
//         const balance1 = await contract1.balanceOf(a);
//         console.log(balance1);
//         //expect(await contract1.totalSupply()).to.equal(ownerBalance);


//       //  console.log("FNT Address BAlance ",balance1, a );

//      //   await contract1.connect(owner).receive();



//       }); 
//     });


//   });
  