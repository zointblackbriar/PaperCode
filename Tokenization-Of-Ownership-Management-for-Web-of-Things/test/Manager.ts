// import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
// import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
// import { expect } from "chai";
// import { ethers } from 'ethers';
// import { Manager } from '../typechain-types/contracts/NonAdministrativeRoles/Manager';
// import { ComponentCore } from '../typechain-types/contracts/Component.sol';


// describe("Manager", function () {

//     let contract1: ComponentCore;
//     let contract: Manager;

//     const hardhat = require("hardhat")
//     beforeEach(async () => {
//         const ComponentCore = await hardhat.ethers.getContractFactory("ComponentCore");
//         contract1 = await ComponentCore.deploy("abc", 11);
//     });


//     beforeEach(async () => {
//         const Manager = await hardhat.ethers.getContractFactory("Manager");
//         contract = await Manager.deploy(contract1.getConractAddressComponetCore());
//     });
//     describe("Manager Job", () => {
//         it("should return Manage Warehouse", async function () {
//             await contract.deployed();
//             const job = await contract.job();
//             expect(job).to.equal("Manage Warehouse");

//         });
//     })

// });
