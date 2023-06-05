
// import { expect } from "chai";
// import { ethers } from 'ethers';
// import { Transporter__factory } from "../typechain-types";
// import { administrativeRoles } from "../typechain-types/contracts";
// import { Admin } from '../typechain-types/contracts/RoleObjectPattern/ROP.sol';
// import { Administrator } from '../typechain-types/contracts/RoleObjectPattern/Employee.sol';



// describe("Admin", function () {

//     let contract_admin: Administrator;
//     //let contract_empcore: Administrator;
//     //let contract_transporter: Transporter;


//     const hardhat = require("hardhat")
//     const fetch = require("node-fetch")
//     const { ethers } = require("hardhat");


//     beforeEach(async () => {
//         //const Verifier = await hardhat.ethers.getContractFactory("Verifier");
//         // contract = await Verifier.deploy();

//         const Administrator = await hardhat.ethers.getContractFactory("Administrator");
//         contract_admin = await Administrator.deploy();


//         //  const Transporter = await hardhat.ethers.getContractFactory("Transporter");
//         //  contract_transporter = await Transporter.deploy();

//     });

//     describe("createEmployee", () => {
//         it("Admin assigns roles", async function () {
//             await contract_admin.deployed();
//             //  await contract_admin.createEmployee("Saa");
//             //const employee = await contract_admin.createEmployeeRole();
//            // const result2 = await employee.wait();


//            /************For role 1***************** */

//      const result = await expect(contract_admin.createEmployeeRole())
//        .to.emit(contract_admin, "EmployeeRoleCreated")

//        const transferTx = await contract_admin.createEmployeeRole();
//        const result2 = await transferTx.wait();
//        console.log( result2.events[0].args.message);
//        const empRole = result2.events[0].args.r1;
//        console.log("Emp Role Address", empRole);

//        const [owner, receiver, supplier] = await ethers.getSigners();
//        const temp = await contract_admin.addRole(empRole, receiver.address);

//        const result1 = await expect(contract_admin.myhasRole(receiver.address,empRole))
//        .to.emit(contract_admin, "HasRoleResult")     
       
//        const tx = await contract_admin.myhasRole(receiver.address,empRole);
//        const resulttx = await tx.wait();
//        console.log( "Has Role Result",resulttx.events[0].args.result);

//            /************For role 2***************** */


//            const result11 = await expect(contract_admin.createEmployeeRole())
//            .to.emit(contract_admin, "EmployeeRoleCreated")
    
//            const transferTx11 = await contract_admin.createEmployeeRole();
//            const tx_result = await transferTx11.wait();
//            console.log( tx_result.events[0].args.message);
//            const employeeRole = tx_result.events[0].args.r1;
//            console.log("Emp Role Address", employeeRole);
    
//           // const [owner11, receiver11, addr211] = await ethers.getSigners();
//            const temp11 = await contract_admin.addRole(employeeRole, supplier.address);
    
//            const result111 = await expect(contract_admin.myhasRole(supplier.address,empRole))
//            .to.emit(contract_admin, "HasRoleResult")     
           
//            const tx11 = await contract_admin.myhasRole(supplier.address,empRole);
//            const resulttx11 = await tx11.wait();
//            console.log( "Has Role Result",resulttx11.events[0].args.result);


//            const tx113= await contract_admin.myhasRole(supplier.address,employeeRole);
//            const resulttx113 = await tx113.wait();
//            console.log( "Has Role Result",resulttx113.events[0].args.result);


//            /***********************REMOVE ROLE*********************** */

           

//             //       console.log("Manager role created");
//             //     console.log("Name: ", result2.events[0].args.Name);
//             //     console.log("Age: ", Number(result2.events[0].args.Age));
//             //   }
//            // console.log("Employee", re);
//             //await contract_admin.adminaddRole("Transporter", employee);

//             //  var tranporter = await contract_admin.getEmmployeeRoleObject();
//             //  const ct1= await ethers.getContractFactory("EmployeeCore");
//             //  const a1 = await ct1.attach(employee);
//             //  console.log("jhjhjhjh",await a1.getName());
//             //    console.log("Transporter", tranporter);
//             // const [owner, addr1, addr2] = await ethers.getSigners();

//             //   const ct = await ethers.getContractFactory("Transporter");
//             //ct.deploy();
//             // const a = await ct.attach(tranporter);
//             //console.log(collection);
//             // await contract_admin.funcall(tranporter);
//             //  console.log(await a.abc());
//             //  const temp = await a.vvv();
//             //  console.log("Name is",await a.getName());

//             //console.log("Role is",await a.hasRole());
//             // console.log("Role is ", myRole);
//             //   console.log(await a.myjob());
//             // console.log(myrole);
//             //console.log("the address");

//         });



//     });
// });
