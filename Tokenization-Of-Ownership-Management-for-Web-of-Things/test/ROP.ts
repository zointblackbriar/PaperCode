
// import { expect } from "chai";
// import { ethers } from 'ethers';
// import { Transporter__factory } from "../typechain-types";
// import { administrativeRoles } from "../typechain-types/contracts";
// import { Admin } from '../typechain-types/contracts/RoleObjectPattern/ROP.sol';
// import { EmployeeCore } from '../typechain-types/contracts/RoleObjectPattern/ROP.sol';
// import { EmployeeRole } from '../typechain-types/contracts/RoleObjectPattern/ROP.sol';
// import { Transporter } from '../typechain-types/contracts/RoleObjectPattern/ROP.sol';



// describe("Admin", function () {

//   let contract_admin: Admin;
//   let contract_empcore: EmployeeCore;
//   let contract_transporter: Transporter;


//   const hardhat = require("hardhat")
//   const fetch = require("node-fetch")
//   const { ethers } = require("hardhat");


//   beforeEach(async () => {
//     //const Verifier = await hardhat.ethers.getContractFactory("Verifier");
//     // contract = await Verifier.deploy();

//     const Admin = await hardhat.ethers.getContractFactory("Admin");
//     contract_admin = await Admin.deploy();


//     const Transporter = await hardhat.ethers.getContractFactory("Transporter");
//     contract_transporter = await Transporter.deploy();

//   });

//   describe("createEmployee", () => {
//     it("Admin assigns roles", async function () {
//       await contract_admin.deployed();
//       await contract_admin.createEmployee("Saa");
//       const employee = await contract_admin.getEmployeeObject();
//       console.log("Employee", employee);
//       await contract_admin.adminaddRole("Transporter", employee);
      
//       var tranporter = await contract_admin.getEmmployeeRoleObject();
//       //  const ct1= await ethers.getContractFactory("EmployeeCore");
//       //  const a1 = await ct1.attach(employee);
//       //  console.log("jhjhjhjh",await a1.getName());
//       console.log("Transporter", tranporter);
//       // const [owner, addr1, addr2] = await ethers.getSigners();

//       const ct = await ethers.getContractFactory("Transporter");
//       //ct.deploy();
//       const a = await ct.attach(tranporter);
//       //console.log(collection);
//       // await contract_admin.funcall(tranporter);
//       //  console.log(await a.abc());
//       //  const temp = await a.vvv();
//       console.log("Name is",await a.getName());
      
//      //console.log("Role is",await a.hasRole());
//      // console.log("Role is ", myRole);
//       console.log(await a.myjob());
//       // console.log(myrole);
//       //console.log("the address");

//     });



//   });
// });
