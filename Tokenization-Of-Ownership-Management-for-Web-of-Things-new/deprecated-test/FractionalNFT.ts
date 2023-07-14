// import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
// import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
// import { expect } from "chai";
// import { FractionalNFT } from '../typechain-types/contracts/FractionalNFT';
// import { FNFToken } from '../typechain-types/contracts/FNFToken';

// const { ethers } = require("hardhat");

// let address1, address2;
// describe("FractionalNFT", function () {

//   let contract1: FractionalNFT;
//   const hardhat = require("hardhat")

//   let contract2: FNFToken;

//   beforeEach(async () => {
//     const FractionalNFT = await hardhat.ethers.getContractFactory("FractionalNFT");
//     contract1 = await FractionalNFT.deploy();

//     const FNFToken = await hardhat.ethers.getContractFactory("FNFToken");
//     contract2 = await FNFToken.deploy();
//   });


//   describe("deploy FractionalNFT Contract", () => {
//     it("should return correct name and symbol of contract", async function () {
//       await contract1.deployed();
//       // expect( await contract.deployed.name).to.equal(true);
//     });
//   });


//   describe("deploy FNFT Token Contract", () => {
//     it("should return correct name and symbol of contract", async function () {
//       await contract2.deployed();
//       // expect( await contract.deployed.name).to.equal(true);
//     });
//   });

//   describe("mint", () => {
//     it("should mint the fractional NFT", async function () {
//       await contract1.deployed();

//       const [owner, addr1, addr2] = await ethers.getSigners();
//       console.log(owner.address);
//       await contract1.connect(owner).mint(owner.address, 'QmRZRoFryzYUN9JY5YKYx75uyjfptGqWWmasFFRwz1eQJM/0', 4);

//       const balance = await contract1.connect(owner).balanceOf(owner.address);
//       console.log("Balanace Owner Account: ", balance);

//       //  await contract1.connect(addr1).mint(addr1.address, 'QmRZRoFryzYUN9JY5YKYx75uyjfptGqWWmasFFRwz1eQJM/0',4);

//       //  await contract.connect(addr1).transferToken(addr1.address,addr2.address, 2);

//     });
//   });

//   describe("tokenURI", () => {
//     it("should return  the correct token uri", async function () {
//       await contract1.deployed();

//       const [owner, addr1, addr2] = await ethers.getSigners();
//       const cost = ethers.utils.parseEther("0.1");
//       console.log(addr1.address);
//       await contract1.connect(owner).mint(owner.address, 'QmRZRoFryzYUN9JY5YKYx75uyjfptGqWWmasFFRwz1eQJM/0', 4);
//       //   const uri= await contract1.connect(owner).tokenURI(0);
//       //   console.log("Token Uri ",uri);

//       //  await contract.connect(addr1).transferToken(addr1.address,addr2.address, 2);

//     });
//   });
//   describe("transferFNFToken", () => {
//     it("should transfer tokens correctly", async function () {
//       await contract1.deployed();
//       await contract2.deployed();

//       const [owner, addr1, addr2] = await ethers.getSigners();
//       console.log("Owner Address", owner.address);

//       // await contract2.connect(owner).mint(owner.address, 2);
//       // const balance1 = await contract2.connect(owner).balanceOf(owner.address);
//       // console.log("Balanace Owner Account: ",balance1);

//       // await expect(contract2.mint(owner.address, 7)).to.emit(contract2, 'Mint').withArgs(owner.address,7);

//       await expect(contract1.mint(owner.address, 'QmRZRoFryzYUN9JY5YKYx75uyjfptGqWWmasFFRwz1eQJM/0', 4)).to.emit(contract1, 'MintNFT').withArgs(owner.address, 4);
//       await contract1.connect(owner).mint(owner.address, 'QmRZRoFryzYUN9JY5YKYx75uyjfptGqWWmasFFRwz1eQJM/0', 4);
//       await contract1.connect(owner).transferFNFToken(owner.address, 0, 1);

//       const balance = await contract1.connect(owner).balanceOf(owner.address);
//       console.log("Balanace Owner Account: ", balance);
//     });
//   });

// });
