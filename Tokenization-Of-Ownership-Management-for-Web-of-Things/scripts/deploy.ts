import { ethers } from "hardhat";
import { IComponent__factory } from "../typechain-types";
import hre from 'hardhat'



async function main() {
  ethers.utils.Logger.setLogLevel(ethers.utils.Logger.levels.ERROR)
 
  const accounts = await ethers.getSigners()
  for (const account of accounts) { //loop for all accounts
    console.log("account: ", account.address);
  }

  const [owner, address2] = await ethers.getSigners();

  // const deployer = accounts[0]

  // let linkToken
  // let mockOracle
  // let linkTokenAddress
  // let oracleAddress
  const lockedAmount = ethers.utils.parseEther("0.001");


  //  const GenericLargeResponse = await ethers.getContractFactory("GenericLargeResponse");
  //  const gc = await GenericLargeResponse.deploy();
  //  console.log("Generic  deployed to:", gc.address);

   const MockOracleClient = await ethers.getContractFactory("MockOracleClient");
   const mockOracleClient = await MockOracleClient.deploy();
   console.log("MockOracle Client  deployed to:", mockOracleClient.address);

  // const EmployeeCore = await ethers.getContractFactory("EmployeeCore");
  // const employee = await EmployeeCore.deploy("Tim");

  // await employee.deployed();
  // console.log("Employee  deployed to:", employee.address);

  const Receiver = await ethers.getContractFactory("Receiver");
  const receiver = await Receiver.deploy();
  await receiver.deployed();
  console.log("Receiver  deployed to:", receiver.address);

  const Administrator = await ethers.getContractFactory("Administrator");
  const admin = await Administrator.deploy();

   await admin.deployed();
   console.log("Administarator  deployed to:", admin.address);


  const resourceContract = await ethers.getContractFactory("Resource");
   const resource = await resourceContract.deploy("Resource Deploy.ts", {value: lockedAmount.toNumber()});
 
  await resource.deployed();
  const resultResource = await resource.connect(owner).getName();
  console.log("resultResource: ", resultResource); //Resource name passed
  console.log("Resource contract deployed to:", resource.address);
 
  const mediatorPattern = await ethers.getContractFactory("AccessControlMediator");
  const mediator = await mediatorPattern.deploy();

 await mediator.deployed();
 console.log("AccessControlMediator contract deployed to:", mediator.address);


  const webOfThingsContract = await ethers.getContractFactory("WebofThingsDevice");
  const WoT = await webOfThingsContract.deploy(owner.address, "samplewot1", "wotdescription", "specwot");
  await WoT.deployed()
  console.log("WebofThingsDevice contract deployed to:", WoT.address);



  // const GenericLargeResponse = await ethers.getContractFactory("GenericLargeResponse");
  // const genericLargeResponse = await GenericLargeResponse.deploy();

  // await genericLargeResponse.deployed();
  // console.log("genericLargeResponse  deployed to:", genericLargeResponse.address);

  // const AccessControlMediator = await ethers.getContractFactory("AccessControlMediator");
  // const accessControlMediatoradmin = await AccessControlMediator.deploy();

  // await accessControlMediatoradmin.deployed();
  // console.log("AccessControl  deployed to:", accessControlMediatoradmin.address);

  // const Fractional = await ethers.getContractFactory("Fractional");
  // const fractional = await Fractional.deploy("Fractional NFT", "A");

  // await fractional.deployed();
  // console.log("fractional  deployed to:", fractional.address);

  
  

  // const DummyRole = await ethers.getContractFactory("DummyRole");
  // const dummyRole = await DummyRole.deploy(employee.address);

  // await dummyRole.deployed();
  // console.log("dummyRole  deployed to:", dummyRole.address);


  // const ComponentCore = await ethers.getContractFactory("ComponentCore");
  // const componentcore = await ComponentCore.deploy("Amanda",22);

  // await componentcore.deployed();

  // console.log("Component Core deployed to:", componentcore.address);


  // const Issuer = await ethers.getContractFactory("Issuer");
  // const issuer = await Issuer.deploy("Fractional NFT", "A");

  // await issuer.deployed();

  // console.log("Issuer deployed to:", issuer.address);


  // const Verify = await ethers.getContractFactory("Verifier");
  // const verify = await Verify.deploy();

  // await verify.deployed();

  // console.log("Verify deployed to:", verify.address);




  // const Manager = await ethers.getContractFactory("Manager");
  // const manager = await Manager.deploy(componentcore.getConractAddressComponetCore());

  // await manager.deployed();

  // console.log("Manager deployed to:", manager.address);

  // const Main = await ethers.getContractFactory("Main");
  // const main = await Main.deploy();

  // await main.deployed();

  // console.log("Main deployed to:", main.address);

  // const TestContract = await ethers.getContractFactory("TestContract");
  // const testcontract = await TestContract.deploy();

  // await testcontract.deployed();

  // console.log("Test Contract deployed to:", testcontract.address);


  // const FractionalNFT = await ethers.getContractFactory("FractionalNFT");
  // const fractionalNFT = await FractionalNFT.deploy();

  // await fractionalNFT.deployed();

  // console.log("FractionalNFT Contract deployed to:", fractionalNFT.address);

  // const FNFToken = await ethers.getContractFactory("FNFToken");
  // const fnftoken = await FNFToken.deploy();

  // await fnftoken.deployed();

  // console.log("FNFToken Contract deployed to:", fnftoken.address);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
