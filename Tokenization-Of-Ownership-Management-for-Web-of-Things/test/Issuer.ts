// import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
// import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
// import { expect } from "chai";
// import { Issuer } from '../typechain-types/contracts/AdministrativeRoles/Issuer';
// import { ComponentCore } from '../typechain-types/contracts/Component.sol';
// const { ethers } = require("hardhat");

// let address1, address2;
// describe("Issuer", function () {

//   let contract1: ComponentCore;
//   let contract: Issuer;
//   const hardhat = require("hardhat")


//   beforeEach(async () => {
//     const ComponentCore = await hardhat.ethers.getContractFactory("ComponentCore");
//     contract1 = await ComponentCore.deploy("abc", 11);
//   });

//   beforeEach(async () => {
//     const Issuer = await hardhat.ethers.getContractFactory("Issuer");
//     contract = await Issuer.deploy(contract1.getConractAddressComponetCore());
//   });
//   describe("deploy", () => {
//     it("should return correct name and symbol of contract", async function () {
//       await contract.deployed();
//       // expect( await contract.deployed.name).to.equal(true);
//     });
//   });


//   describe("mint", () => {
//     it("should return true when 0.5 ethers are sent with transaction", async function () {
//       await contract.deployed();

//       const [owner, addr1, addr2] = await ethers.getSigners();


//       const cost = ethers.utils.parseEther("0.1");
//       console.log(addr1.address);
//       await contract.connect(addr1).safeMint(addr1.address, 2, {
//         value: cost
//       });

//       //  await contract.connect(addr1).transferToken(addr1.address,addr2.address, 2);

//     });
//   });

//   describe("transferToken", () => {
//     it("should transfer token", async function () {
//       await contract.deployed();

//       const [owner, manager, supplier] = await ethers.getSigners();

//       console.log("Test :: Token Owner: ", manager.address);

//       const cost = ethers.utils.parseEther("0.1");
//       console.log(manager.address);
//       await contract.connect(owner).safeMint(owner.address, 2, {
//         value: cost
//       });

//       await contract.connect(owner).transferToken(owner.address, manager.address, 2);
//       console.log("Test :: Token Transferred to: ", manager.address);


//     });

//   });

//   describe("getMetadata", () => {
//     it("Fetches the Metadata", async function () {
//       await contract.deployed();

//       const [owner, addr1, addr2] = await ethers.getSigners();

//       console.log("Test :: Token Owner: ", addr1.address);
//       console.log("Test :: Token Transferred to: ", addr2.address);

//       const cost = ethers.utils.parseEther("0.1");
//       console.log(addr1.address);
//       await contract.connect(addr1).safeMint(owner.address, 2, {
//         value: cost
//       });

//       await contract.connect(addr1).transferToken(addr1.address, addr2.address, 2);

//       const URI = await contract.connect(addr2).getMetadata();
//       // console.log("Token URI" , URI);

//     });

//   });
//   describe("transferToken", () => {
//     it("should transfer token", async function () {
//       await contract.deployed();

//       const [owner, manager, supplier] = await ethers.getSigners();

//       console.log("Test :: Token Owner: ", manager.address);

//       const cost = ethers.utils.parseEther("0.1");
//       console.log(manager.address);
//       await contract.connect(owner).safeMint(owner.address, 2, {
//         value: cost
//       });

//       await contract.connect(owner).transferToken(owner.address, manager.address, 2);
//       console.log("Test :: Token Transferred to: ", manager.address);


//     });

//   });
// });
