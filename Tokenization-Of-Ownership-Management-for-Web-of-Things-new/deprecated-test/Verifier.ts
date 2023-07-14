
// import { expect } from "chai";
// import { ethers } from 'ethers';
// import {Verifier} from '../typechain-types/contracts/AdministrativeRoles/Verifier';

// describe("Verifier", function () {

//   let contract: Verifier;
//   const hardhat = require("hardhat")
//   const fetch = require("node-fetch")
//   const { ethers } = require("hardhat");


//   beforeEach(async () => {
//     const Verifier = await hardhat.ethers.getContractFactory("Verifier");
//     contract = await Verifier.deploy();
//   });

//   describe("verify", () => {
//     it("should return access granted when given parameters are create, appointment and supplier", async function () {
//       await contract.deployed();

//       const result = await expect(contract.verify(0,"appointment","supplier")).to.emit(contract, "AccessResult").withArgs("Access Granted")

     
//     });

//     it("should return access granted when given parameters are update, appointment and supplier", async function () {
//       await contract.deployed();

//       const result = await expect(contract.verify(1,"appointment","supplier")).to.emit(contract, "AccessResult").withArgs("Access Granted")

     
//     });
//     it("should return access granted when given parameters are delete, appointment and supplier", async function () {
//       await contract.deployed();

//       const result = await expect(contract.verify(2,"appointment","supplier")).to.emit(contract, "AccessResult").withArgs("Access Granted")

     
//     });
//     it("should return access denied when given parameters are delete, receipt and supplier", async function () {
//       await contract.deployed();

//       const result = await expect(contract.verify(3,"receipt","supplier")).to.emit(contract, "AccessResult").withArgs("Access Denied")

     
//     });
//     it("should return false when given parameters are Read, Supply Document and Supplier", async function () {
//       await contract.deployed();

//       let tokenId = 0;
//       let tokenMetadataURI = "https://gateway.pinata.cloud/ipfs/QmZNbMHRAAxKTuqfLTJ6f6eRC7TtU6fBJTFHnznwHQmzJq/" + tokenId
//       console.log(tokenMetadataURI);
  
//       const tokenMetadata:any = await fetch(tokenMetadataURI).then((response:any) => response.json());
  
//        console.log(tokenMetadata)
//        await contract.deployed();

//        const [owner, manager, supplier] = await ethers.getSigners();
 
//       // console.log("Test :: Token Owner: ", manager.address);
//        var resource = tokenMetadata["name"]
  
//        var access_type = tokenMetadata["access"]
 
//        const cost = ethers.utils.parseEther("0.1");
//        //console.log(manager.address);
//        const result = await expect(contract.verify(access_type,resource,"supplier"))
//        .to.emit(contract, "AccessResult").withArgs("Access Granted");
 


//      });

//    });
// });
