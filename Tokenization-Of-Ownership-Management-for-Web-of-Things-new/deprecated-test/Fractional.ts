// import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
// import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
// import { expect } from "chai";
// import { Fractional } from '../typechain-types/contracts/Fractional';
// //import { GenericLargeResponse} from '../typechain-types/contracts/GenericLargeResponse';
// const LINK_TOKEN_ABI = require("@chainlink/contracts/abi/v0.4/LinkToken.json")


// //import { ERC20 } from '../typechain-types/contracts/ERC20';

// const { ethers } = require("hardhat");

// let address1, address2;
// describe("Fractional", function () {

//   let contract1: Fractional;
//   // let contract2: GenericLargeResponse;

//   const hardhat = require("hardhat")

//   // let contract2: ERC20;

//   beforeEach(async () => {
//     const Fractional = await hardhat.ethers.getContractFactory("Fractional");
//     contract1 = await Fractional.deploy("NFT", "AA");

//     // const GenericLargeResponse = await hardhat.ethers.getContractFactory("GenericLargeResponse");
//     // contract2 = await GenericLargeResponse.deploy();

//     //const ERCNN20 = await hardhat.ethers.getContractFactory("ERC20");
//     //contract2 = await ERCNN20.deploy();
//   });


//   describe("deploy FractionalNFT Contract", () => {
//     it("should return correct name and symbol of contract", async function () {
//       await contract1.deployed();
//       // expect( await contract.deployed.name).to.equal(true);
//     });
//   });


//   describe("deploy FNFT Token Contract", () => {
//     it("should return correct name and symbol of contract", async function () {
//       //await contract2.deployed();
//       // expect( await contract.deployed.name).to.equal(true);
//     });
//   });

//   describe("mint", () => {
//     it("should mint the fractional NFT", async function () {
//       await contract1.deployed();
//       //await contract2.deployed();

//       const [owner, addr1, addr2] = await ethers.getSigners();
//       console.log("Owner Address", owner.address);
//       await contract1.connect(owner).createNFT("QmZNbMHRAAxKTuqfLTJ6f6eRC7TtU6fBJTFHnznwHQmzJq", "10");
//       await contract1.connect(addr1).createNFT("QmZNbMHRAAxKTuqfLTJ6f6eRC7TtU6fBJTFHnznwHQmzJq", "10");


//       const balance = await contract1.connect(owner).balanceOf(owner.address);
//       console.log("Balanace Owner Account: ", balance);
//       // const a =  await contract1.connect(owner).isNFTOwner(0);
//       // console.log("NFT Owner 0", await contract1.connect(owner).isNFTOwner(0));

//       // console.log("NFT Owner 1", await contract1.connect(owner).isNFTOwner(1));


//       await contract1.connect(owner).lockNFT("0", "QmZNbMHRAAxKTuqfLTJ6f6eRC7TtU6fBJTFHnznwHQmzJq", 10);
//       await contract1.connect(addr1).lockNFT("1", "QmZNbMHRAAxKTuqfLTJ6f6eRC7TtU6fBJTFHnznwHQmzJq", 10);

//       const balance1 = await contract1.connect(owner).balanceOf(owner.address);
//       console.log("Balanace Owner Account: ", balance1);


//       //   const cost = ethers.utils.parseEther("0.1");
//       //   console.log(addr1.address);
//       //await contract1.connect(addr1).buyFractionalShares(0, 1,employee_role);
//       console.log("Address 1 ", addr1.address);

//       const tx = await contract1.connect(owner).fulfill();
//       const tx_result = await tx.wait();

//       const result = tx_result.events[0].args;
//       console.log(result);
//    //   const tx2 = await contract1.connect(owner).bar(result);
//     //  const tx2_result = await tx.wait();



//       //  console.log(await contract1.connect(owner).isNFTOwner(0));
//       //  console.log(await contract1.connect(owner).isNFTOwner(1));




//       //   console.log("Balanace Owner Account: ", await contract1.connect(addr1).balanceOf(owner.address));


//       //  await contract1.connect(addr1).mint(addr1.address, 'QmRZRoFryzYUN9JY5YKYx75uyjfptGqWWmasFFRwz1eQJM/0',4);

//       //  await contract.connect(addr1).transferToken(addr1.address,addr2.address, 2);

//     });
//   });

//   //   describe("tokenURI", () => {
//   //     it("should return  the correct token uri", async function () {
//   //       await contract1.deployed();

//   //       const [owner, addr1, addr2] = await ethers.getSigners();
//   //       const cost = ethers.utils.parseEther("0.1");
//   //       console.log(addr1.address);
//   //       await contract1.connect(owner).mint(owner.address, 'QmRZRoFryzYUN9JY5YKYx75uyjfptGqWWmasFFRwz1eQJM/0', 4);
//   //       //   const uri= await contract1.connect(owner).tokenURI(0);
//   //       //   console.log("Token Uri ",uri);

//   //       //  await contract.connect(addr1).transferToken(addr1.address,addr2.address, 2);

//   //     });
//   //   });
//   //   describe("transferFNFToken", () => {
//   //     it("should transfer tokens correctly", async function () {
//   //       await contract1.deployed();
//   //       await contract2.deployed();

//   //       const [owner, addr1, addr2] = await ethers.getSigners();
//   //       console.log("Owner Address", owner.address);

//   //       // await contract2.connect(owner).mint(owner.address, 2);
//   //       // const balance1 = await contract2.connect(owner).balanceOf(owner.address);
//   //       // console.log("Balanace Owner Account: ",balance1);

//   //       // await expect(contract2.mint(owner.address, 7)).to.emit(contract2, 'Mint').withArgs(owner.address,7);

//   //       await expect(contract1.mint(owner.address, 'QmRZRoFryzYUN9JY5YKYx75uyjfptGqWWmasFFRwz1eQJM/0', 4)).to.emit(contract1, 'MintNFT').withArgs(owner.address, 4);
//   //       await contract1.connect(owner).mint(owner.address, 'QmRZRoFryzYUN9JY5YKYx75uyjfptGqWWmasFFRwz1eQJM/0', 4);
//   //       await contract1.connect(owner).transferFNFToken(owner.address, 0, 1);

//   //       const balance = await contract1.connect(owner).balanceOf(owner.address);
//   //       console.log("Balanace Owner Account: ", balance);
//   //     });
//   //   });

// });
