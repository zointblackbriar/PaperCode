
import { expect } from "chai";
import { ethers } from 'ethers';
import { Transporter__factory } from "../typechain-types";
import { administrativeRoles } from "../typechain-types/contracts";
import { Admin } from '../typechain-types/contracts/RoleObjectPattern/ROP.sol';
import { AdministratorMed } from '../typechain-types/contracts/MediatorPattern/MediatorPattern.sol';
import { AccessControlMediator } from '../typechain-types/contracts/MediatorPattern/MediatorPattern.sol';



describe("Mediator Pattern", function () {

    let contract_admin: AdministratorMed;
    let contract_mediator: AccessControlMediator;
    //let contract_transporter: Transporter;


    const hardhat = require("hardhat")
    const fetch = require("node-fetch")
    const { ethers } = require("hardhat");


    beforeEach(async () => {
        //const Verifier = await hardhat.ethers.getContractFactory("Verifier");
        // contract = await Verifier.deploy();

        const AdministratorMed = await hardhat.ethers.getContractFactory("AdministratorMed");
        contract_admin = await AdministratorMed.deploy();


      const AccessControl = await hardhat.ethers.getContractFactory("AccessControlMediator");
      contract_mediator = await AccessControl.deploy();

    });

    describe("createEmployee", () => {
        it("Admin assigns roles", async function () {
            await contract_admin.deployed();

           /************For role 1***************** */

           /*get Employee*/

     const result = await expect(contract_admin.createEmployee())
       .to.emit(contract_admin, "EmployeeCreated")

       const transferTx = await contract_admin.createEmployee();
       const result2 = await transferTx.wait();
       console.log( result2.events[0].args.message);
       const emp = result2.events[0].args.r1;
       console.log("Employee Address", emp);

       /////Add Role/////////////////////////////
       const role_tx = await expect(contract_mediator.accountAddRole(emp,0)).to.emit(contract_mediator, "RoleCreated")

       const tx = await contract_mediator.accountAddRole(emp,0);
       const tx_result = await tx.wait();
       //console.log( tx_result.events[0].args.message);
       const empployee_role = tx_result.events[0].args.r1;
       console.log("Employee Role Address", empployee_role);

  ///////////////Invoke role function /////////////////////
      await  contract_mediator.invokeRole(emp,empployee_role, "receiveInventory");

      console.log(await contract_mediator.accountHasRole(emp,empployee_role));

      await contract_mediator.accountRemoveRole(emp,empployee_role)
         
      console.log(await contract_mediator.accountHasRole(emp,empployee_role));


    //    const result1 = await expect(contract_admin.myhasRole(emp))
    //    .to.emit(contract_admin, "HasRoleResult")     
       
    //    const tx = await contract_admin.myhasRole(receiver.address,emp);
    //    const resulttx = await tx.wait();
    //    console.log( "Has Role Result",resulttx.events[0].args.result);

    //        /************For role 2***************** */


    //        const result11 = await expect(contract_admin.createEmployeeRole())
    //        .to.emit(contract_admin, "EmployeeRoleCreated")
    
    //        const transferTx11 = await contract_admin.createEmployeeRole();
    //        const tx_result = await transferTx11.wait();
    //        console.log( tx_result.events[0].args.message);
    //        const employeeRole = tx_result.events[0].args.r1;
    //        console.log("Emp Role Address", employeeRole);
    
    //       // const [owner11, receiver11, addr211] = await ethers.getSigners();
    //        const temp11 = await contract_admin.addRole(employeeRole, supplier.address);
    
    //        const result111 = await expect(contract_admin.myhasRole(supplier.address,empRole))
    //        .to.emit(contract_admin, "HasRoleResult")     
           
    //        const tx11 = await contract_admin.myhasRole(supplier.address,empRole);
    //        const resulttx11 = await tx11.wait();
    //        console.log( "Has Role Result",resulttx11.events[0].args.result);


    //        const tx113= await contract_admin.myhasRole(supplier.address,employeeRole);
    //        const resulttx113 = await tx113.wait();
    //        console.log( "Has Role Result",resulttx113.events[0].args.result);

    //        const abi = [
    //         "function name() public view returns (string)",
    //         "function symbol() public view returns (string)",
    //         "function decimals() public view returns (uint8)",
    //         "function totalSupply() public view returns (uint256)",
    //         "function approve(address _spender, uint256 _value) public returns (bool success)"];
    //         const provider = new ethers.providers.Web3Provider(window.ethereum);
    //         const contract = new ethers.Contract(employeeRole, abi, provider);

    //         const USDTContract = new ethers.Contract(employeeRole, abi, signer);

    //         const name = await USDTContract.name();
      


           /***********************REMOVE ROLE*********************** */

           

            //       console.log("Manager role created");
            //     console.log("Name: ", result2.events[0].args.Name);
            //     console.log("Age: ", Number(result2.events[0].args.Age));
            //   }
           // console.log("Employee", re);
            //await contract_admin.adminaddRole("Transporter", employee);

            //  var tranporter = await contract_admin.getEmmployeeRoleObject();
            //  const ct1= await ethers.getContractFactory("EmployeeCore");
            //  const a1 = await ct1.attach(employee);
            //  console.log("jhjhjhjh",await a1.getName());
            //    console.log("Transporter", tranporter);
            // const [owner, addr1, addr2] = await ethers.getSigners();

            //   const ct = await ethers.getContractFactory("Transporter");
            //ct.deploy();
            // const a = await ct.attach(tranporter);
            //console.log(collection);
            // await contract_admin.funcall(tranporter);
            //  console.log(await a.abc());
            //  const temp = await a.vvv();
            //  console.log("Name is",await a.getName());

            //console.log("Role is",await a.hasRole());
            // console.log("Role is ", myRole);
            //   console.log(await a.myjob());
            // console.log(myrole);
            //console.log("the address");

        });



    });
});
