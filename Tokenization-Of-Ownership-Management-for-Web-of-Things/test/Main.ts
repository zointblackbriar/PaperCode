// import { expect } from "chai";
// import { ethers } from 'ethers';
// import { Main } from '../typechain-types/contracts/Main';
// import { Supplier } from '../typechain-types/contracts/Supplier';
// import { Issuer } from '../typechain-types/contracts/Issuer';
// import { Verifier } from '../typechain-types/contracts/Verifier';


// const hardhat = require("hardhat");

// const { ethers } = require("hardhat");
// const fetch = require("node-fetch");


// describe("Main", function () {

//   let contract: Main;
//   let contract_issuer: Issuer;
//   let contract_verifier: Verifier;

//   const hardhat = require("hardhat")


//   beforeEach(async () => {
//     const Main = await hardhat.ethers.getContractFactory("Main");
//     contract = await Main.deploy();

//     const Issuer = await hardhat.ethers.getContractFactory("Issuer");
//     contract_issuer = await Issuer.deploy();

//     const Verifier = await hardhat.ethers.getContractFactory("Verifier");
//     contract_verifier = await Verifier.deploy();
    
//   });
//   describe("deploy", () => {
//     it("should return correct name and symbol of contract", async function () {
//       await contract.deployed();
//       await contract_issuer.deployed();
//       await contract_verifier.deployed();

//       //const [owner] = await ethers.getSigners();

//       // await contract.deployed();
//       // expect( await contract.deployed.name).to.equal(true);
//     });
//   });
//   describe("Main", () => {
//     it("Debug Main Function", async function () {
//       await contract.deployed();
//       await contract.main();
//     });
//   });

//   async function testCreateAdminRoles() {
//     console.log("abc");
//     await contract.deployed();
//     const [owner] = await ethers.getSigners();
//     const result = await expect(contract.createAdministrativeRoles())
//       .to.emit(contract, "CreateAdminitrativeRoles")
//     console.log(result);
//   }
//   async function testCreateIssuer() {
//     await contract.deployed();
//     const [owner] = await ethers.getSigners();
//     const result = await expect(contract.createAdministrativeRoles())
//       .to.emit(contract, "CreateIssuer")
//   }
//   async function testCreateVerifier() {
//     await contract.deployed();
//     const [owner] = await ethers.getSigners();
//     const result = await expect(contract.createAdministrativeRoles())
//       .to.emit(contract, "CreateVerifier")
//   }
//   async function testCreateNonAdminRoles() {

//   }
//   async function testCreateManagerRole() {
//     await contract.deployed();
//     const [owner] = await ethers.getSigners();
//     const result = await expect(contract.createNonAdministrativeRoles())
//       .to.emit(contract, "CreateManager").withArgs('Richard', 34)

//     const transferTx = await contract.createNonAdministrativeRoles();
//     const result2 = await transferTx.wait();
//     if (expect(result2.events[0].args.Name).to.equal('Richard') && expect(result2.events[0].args.Age).to.equal(34))
//       console.log("Manager role created");
//     console.log("Name: ", result2.events[0].args.Name);
//     console.log("Age: ", Number(result2.events[0].args.Age));
//   }
//   async function testCreatePickerRole() {
//     await contract.deployed();
//     const [owner] = await ethers.getSigners();
//     const result = await expect(contract.createNonAdministrativeRoles())
//       .to.emit(contract, "CreatePicker").withArgs('Derik', 24)
//       .to.emit(contract, "CreatePicker").withArgs('Samuel', 25)
//     const transferTx = await contract.createNonAdministrativeRoles();
//     const result1 = await transferTx.wait();
//     if (expect(result1.events[1].args.Name).to.equal('Derik') && expect(result1.events[1].args.Age).to.equal(24))
//       console.log("Picker role assigned to employee");
//     console.log("Name: ", result1.events[1].args.Name);
//     console.log("Age: ", Number(result1.events[1].args.Age));

//     if (expect(result1.events[2].args.Name).to.equal('Samuel') && expect(result1.events[2].args.Age).to.equal(25))
//       console.log("Picker role assigned to employee");
//     console.log("Name: ", result1.events[2].args.Name);
//     console.log("Age: ", Number(result1.events[2].args.Age));
//     // expect(result1.events[0].args.Name).to.equal('Samantha');

//   }
//   async function testCreateSupplierRole() {
//     await contract.deployed();
//     const [owner] = await ethers.getSigners();
//     const name1 = 'Mathew';
//     const age1 = 40;
//     const name2 = 'Sara';
//     const age2 = 23;

//     const result = await expect(contract.createNonAdministrativeRoles())
//       .to.emit(contract, "CreateSupplier").withArgs(name1, age1)
//       .to.emit(contract, "CreateSupplier").withArgs(name2, age2)
//     const transferTx = await contract.createNonAdministrativeRoles();
//     const result1 = await transferTx.wait();
//     if (expect(result1.events[3].args.Name).to.equal(name1) && expect(result1.events[3].args.Age).to.equal(age1))
//       console.log("Supplier role assigned to employee");
//     console.log("Name: ", result1.events[3].args.Name);
//     console.log("Age: ", Number(result1.events[3].args.Age));

//     if (expect(result1.events[4].args.Name).to.equal(name2) && expect(result1.events[4].args.Age).to.equal(age2))
//       console.log("Supplier role assigned to employee");
//     console.log("Name: ", result1.events[4].args.Name);
//     console.log("Age: ", Number(result1.events[4].args.Age));

//   }
//   async function testCreateReceiverRole() {
//     const name1 = 'Muhammad';
//     const age1 = 22;
//     const name2 = 'Ahmed';
//     const age2 = 31;
//     await contract.deployed();
//     const [owner] = await ethers.getSigners();
//     const result = await expect(contract.createNonAdministrativeRoles())
//       .to.emit(contract, "CreateReceiver").withArgs(name1, age1)
//       .to.emit(contract, "CreateReceiver").withArgs(name2, age2)
//     const transferTx = await contract.createNonAdministrativeRoles();
//     const result1 = await transferTx.wait();
//     if (expect(result1.events[9].args.Name).to.equal(name1) && expect(result1.events[9].args.Age).to.equal(age1))
//       console.log("Receiver Staff role assigned to employee");
//     console.log("Name: ", result1.events[9].args.Name);
//     console.log("Age: ", Number(result1.events[9].args.Age));

//     if (expect(result1.events[10].args.Name).to.equal(name2) && expect(result1.events[10].args.Age).to.equal(age2))
//       console.log("Receiver Staff role assigned to employee");
//     console.log("Name: ", result1.events[10].args.Name);
//     console.log("Age: ", Number(result1.events[10].args.Age));

//   }
//   async function testCreateInspectionStaffRole() {

//     const name1 = 'Tony';
//     const age1 = 21;
//     const name2 = 'Samantha';
//     const age2 = 29;
//     await contract.deployed();
//     const [owner] = await ethers.getSigners();
//     const result = await expect(contract.createNonAdministrativeRoles())
//       .to.emit(contract, "CreateAuditor").withArgs(name1, age1)
//       .to.emit(contract, "CreateAuditor").withArgs(name2, age2)
//     const transferTx = await contract.createNonAdministrativeRoles();
//     const result1 = await transferTx.wait();
//     if (expect(result1.events[5].args.Name).to.equal(name1) && expect(result1.events[5].args.Age).to.equal(age1))
//       console.log("Inspection Staff role assigned to employee");
//     console.log("Name: ", result1.events[5].args.Name);
//     console.log("Age: ", Number(result1.events[5].args.Age));

//     if (expect(result1.events[6].args.Name).to.equal(name2) && expect(result1.events[6].args.Age).to.equal(age2))
//       console.log("Inspection Staff role assigned to employee");
//     console.log("Name: ", result1.events[6].args.Name);
//     console.log("Age: ", Number(result1.events[6].args.Age));
//   }
//   async function testCreatePutawayStaffRole() {
//     const name1 = 'John';
//     const age1 = 24;
//     const name2 = 'Ali';
//     const age2 = 29;
//     await contract.deployed();
//     const [owner] = await ethers.getSigners();
//     const result = await expect(contract.createNonAdministrativeRoles())
//       .to.emit(contract, "CreatePutaway").withArgs(name1, age1)
//       .to.emit(contract, "CreatePutaway").withArgs(name2, age2)
//     const transferTx = await contract.createNonAdministrativeRoles();
//     const result1 = await transferTx.wait();
//     if (expect(result1.events[7].args.Name).to.equal(name1) && expect(result1.events[7].args.Age).to.equal(age1))
//       console.log("Put-away Staff role assigned to employee");
//     console.log("Name: ", result1.events[7].args.Name);
//     console.log("Age: ", Number(result1.events[7].args.Age));

//     if (expect(result1.events[8].args.Name).to.equal(name2) && expect(result1.events[8].args.Age).to.equal(age2))
//       console.log("Put-away Staff role assigned to employee");
//     console.log("Name: ", result1.events[8].args.Name);
//     console.log("Age: ", Number(result1.events[8].args.Age));
//   }
//   async function testTransferAccessTokens() {
//     await contract.deployed();
//     await contract_issuer.deployed();

//           const [owner, issuer, supplier] = await ethers.getSigners();
//           const cost = ethers.utils.parseEther("0.1");
//           await contract_issuer.connect(owner).safeMint(owner.address, 0, {
//             value: cost
//           });
//           await contract_issuer.connect(owner).safeMint(owner.address, 1, {
//             value: cost
//           });
//           await contract_issuer.connect(owner).safeMint(owner.address, 2, {
//             value: cost
//           });
//           await contract_issuer.connect(owner).safeMint(owner.address, 3, {
//             value: cost
//           });
//           await contract_issuer.connect(owner).transferToken(owner.address, supplier.address, 0);
//           await contract_issuer.connect(owner).transferToken(owner.address, supplier.address, 1);
//           await contract_issuer.connect(owner).transferToken(owner.address, supplier.address, 2);
//           await contract_issuer.connect(owner).transferToken(owner.address, supplier.address, 3);

//           console.log(supplier.address);
//           console.log("Token Transferred to: ", supplier.address);
//   }

//   describe("Create administrative roles ", () => {

//     it("should successfully create issuer ", async function () {
//       return testCreateIssuer;
//     });

//     it("should successfully create verifier ", async function () {
//       return testCreateVerifier;
//     });
//   });

//   describe("Create non-administrative roles", () => {
//     it("should successfully create non-administrative role Manager", async function () {

//       return testCreateManagerRole();

//     });
//     it("should successfully create non-administrative role Picker", async function () {

//       return testCreatePickerRole();
//     });

//     it("should successfully create non-administrative roles Supplier", async function () {

//       return testCreateSupplierRole();

//     });

//     it("should successfully create non-administrative roles Inspection Staff", async function () {

//       return testCreateInspectionStaffRole();

//     });
//     it("should successfully create non-administrative roles Putaway Staff", async function () {

//       return testCreatePutawayStaffRole();

//     });

//     it("should successfully create non-administrative roles Receiver", async function () {

//       return testCreateReceiverRole();

//     });
//   });
//   describe("transferToken", () => {
//     it("should successfully transfer access token 'Create-Appointment' and 'Read-Appointment' to supplier", async function () {
//         return testTransferAccessTokens();
//     });
//     // it("should successfully transfer access token 'Update-Appointment' to supplier", async function () {
//     //   await contract.deployed();
//     //   const [owner, supplier] = await ethers.getSigners();
//     //   await contract.connect(owner).main();
//     //   console.log("Token Transferred to: ", supplier.address);
//     // });

//     // it("should successfully transfer access token 'Read-Appointment' to receiver", async function () {
//     //   await contract.deployed();
//     //   const [owner, supplier] = await ethers.getSigners();
//     //   await contract.connect(owner).main();
//     //   console.log("Token Transferred to: ", supplier.address);
//     // });
//     // it("should successfully transfer access token 'Update-Receipt' to receiver", async function () {
//     //   await contract.deployed();
//     //   const [owner, receiver] = await ethers.getSigners();
//     //   await contract.connect(owner).main();
//     //   console.log("Token Transferred to: ", receiver.address);
//     // });
    
//   });
//   describe("main", () => {
//     it("should successfully allow supplier to create appointment", async function () {

//       testCreateAdminRoles();
//       testCreateNonAdminRoles();
//       testTransferAccessTokens();


//       //Get Role

//       // let  role_address= await contract.getaddressNonAdminRoles();
//       // console.log(role_address);
//       // for( let i=0;i<role_address.length; i++){

//       // }

//       //Extract NFT metadata
    
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
//        const result = await expect(contract_verifier.verify(access_type,resource,"supplier"))
//        .to.emit(contract_verifier, "AccessResult").withArgs("Access Granted");
 

//     });
//   });

// });
