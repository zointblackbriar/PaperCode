// const { expect } = require("chai");
// const { ethers } = require("hardhat");

// describe("Mediator Pattern test", () =>  {
//     let mediator;
//     let object1; 
//     let object2;

//     beforeEach(async function() {
//         const MediatorPattern = await ethers.getContractFactory("MediatorPattern");
//         mediator = await MediatorPattern.deploy(); 
//         await mediator.deployed();
        
//         const Object1 = await ethers.getContractFactory("Object1");
//         object1 = await Object1.deploy(); 
//         await object1.deployed();

//         const Object2 = await ethers.getContractFactory("Object2");
//         object2 = await Object2.deploy(mediator); 
//         await object2.deployed();
//     });

//     it.skip("should register the mediator pattern", async() => {
//         console.log(mediator.address);
//         console.log(object1.address);
//         console.log(object2.address);
//         expect(mediator.address).not.to.null;
//         expect(object1.address).not.to.null;
//         expect(object2.address).not.to.null;

//         await object2.sendMessage(mediator.address, "hello object2");
//         expect(await object1.receiveMessage()).to.be.equal("hello object2");
//     })
// });