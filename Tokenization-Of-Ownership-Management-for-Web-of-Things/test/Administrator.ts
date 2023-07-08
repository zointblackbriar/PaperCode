import { expect } from "chai";
import { ethers } from 'ethers';

import { Issuer } from '../typechain-types/contracts/AdministrativeRoles/Issuer';
import { Verifier } from '../typechain-types/contracts/AdministrativeRoles/Verifier';
import { Administrator } from '../typechain-types/contracts/MediatorPattern/MediatorPattern.sol';
import { Resource } from '../typechain-types/contracts/Resource';
import { Supplier } from '../typechain-types/contracts/MediatorPattern/NonAdminRoles/mSupplier.sol';
import { Receiver } from '../typechain-types/contracts/MediatorPattern/NonAdminRoles/mReceiver.sol';

import { expectEvent } from '@openzeppelin/test-helpers';
const { hardhat, ethers } = require("hardhat");
const fetch = require("node-fetch");

describe("Administrator", function () {

    let contract_admin: Administrator;
    let contract_issuer: Issuer;
    let contract_verifier: Verifier;
    let contract_resource: Resource;
    let contract_supplier: Supplier;
    let contract_receiver: Receiver;


    const hardhat = require("hardhat")


    beforeEach(async () => {
        const Administrator = await hardhat.ethers.getContractFactory("Administrator");
        contract_admin = await Administrator.deploy();

        const Issuer = await hardhat.ethers.getContractFactory("Issuer");
        contract_issuer = await Issuer.deploy("NFT ", "NFT");

        const Verifier = await hardhat.ethers.getContractFactory("Verifier");
        contract_verifier = await Verifier.deploy();


        const Resource = await hardhat.ethers.getContractFactory("Resource");
        contract_resource = await Resource.deploy("Resource");

        const Supplier = await hardhat.ethers.getContractFactory("Supplier");
        contract_supplier = await Supplier.deploy();

        const Receiver = await hardhat.ethers.getContractFactory("Receiver");
        contract_receiver = await Receiver.deploy();
    });

    describe("createAdministrativeRoles", () => {
        it("should successfully create issuer ", async function () {
            //contract_admin.createAdministrativeRoles();
            await expect(contract_admin.createAdministrativeRoles()).to.emit(contract_admin, "IssuerCreated");
            //await expect(contract_admin.createAdministrativeRoles()).to.emit(contract_admin, "VerifierCreated");


        })
        it("should successfully create verifier", async function () {
            await expect(contract_admin.createAdministrativeRoles()).to.emit(contract_admin, "VerifierCreated");

        })
    });
    describe("create Employee and assign role", () => {
        it("should successfully create Employee", async function () {
            await expect(contract_admin.createEmployee("Sara", 21)).to.emit(contract_admin, "EmployeeCreated");

        })

        it("should successfully assign employee object of supplier role", async function () {
            const tx = await contract_admin.createEmployee("Sara", 30);
            const tx_result = await tx.wait();
            const employee = tx_result.events[0].args.r1;
            await expect(contract_admin.createEmployee("Sara", 30)).to.emit(contract_admin, "EmployeeCreated");
            console.log("Employee Created: ", tx_result.events[0].args.name, tx_result.events[0].args.age.toNumber());

            const tx2 = await contract_admin.addRole(1, employee);
            const tx2_result = await tx2.wait();
            const employee_role = tx2_result.events[1].args.ac;

            // const [owner, addr1, addr2] = await ethers.getSigners();
            console.log("Role object address : ", employee_role);


        })
    });

    describe("should successfully allow supplier to create appointment", () => {

        it("should successfully create employee", async function () {
            await contract_admin.deployed();
            await contract_supplier.deployed();
            await contract_verifier.deployed()
        }
        );

        it("should successfully allow supplier to create appointment", async function () {
            //Create Admin roles  
            await contract_admin.deployed();
            await contract_supplier.deployed();
            await contract_verifier.deployed();

            console.log("Deployed Issuer", contract_issuer.address);
            await contract2.deployed();

            const [admin, supplier, manager, issuer] = await ethers.getSigners();
            // console.log("Owner Address", admin.address);
            const tx1 = await contract_admin.connect(admin).createAdministrativeRoles();
            const tx1_result = await tx1.wait();
            const _issuer = tx1_result.events[0].args.issuer;
            const _verifier = tx1_result.events[2].args.verifier;

            await expect(contract_admin.createAdministrativeRoles()).to.emit(contract_admin, "IssuerCreated");
            await expect(contract_admin.createAdministrativeRoles()).to.emit(contract_admin, "VerifierCreated");

            console.log("Issuer Created: ", _issuer);
            console.log("Verifier Created: ", _verifier);



            // await contract_admin.connect(admin).createNonAdministrativeRoles();
            const tx = await contract_admin.connect(admin).createEmployee("Ahmed", 21);
            const tx_result = await tx.wait();
            const employee = tx_result.events[0].args.r1;
            await expect(contract_admin.createEmployee("Ahmed", 21)).to.emit(contract_admin, "EmployeeCreated");
            console.log("Employee Created: ", tx_result.events[0].args.name, tx_result.events[0].args.age.toNumber());


            const tx2 = await contract_admin.addRole(1, employee);
            const tx2_result = await tx2.wait();
            const employee_role = tx2_result.events[1].args.ac;

            // const [owner, addr1, addr2] = await ethers.getSigners();
            console.log("Role object address : ", employee_role);

            //   Create Issuer Signer 
            const issuerSigner = await ethers.getSigner(_issuer.address);
            const verifierSigner = await ethers.getSigner(_verifier.address);
            const employeeRoleSigner = await ethers.getSigner(employee_role.address);


            const issuer_abi = ["function _create(address receiver, string memory _tokenURI)  public returns (uint256)",
                "function _transferNFT(address _sender,address _receiver,uint256 _tokenId,string memory _tokenURI) public",
                "function createNFT(string memory _tokenURI, uint256 _price)",
                "function lockNFT( uint256 _tokenID,string memory _tokenURI,uint256 _sharesAmount) public",
                "function buyFractionaltraShares(uint256 _tokenID,uint256 _totalShares,address account) public payable",
                "function fetchNFTs() public view returns (NFT[] memory)",
                "function isNFTOwner(uint256 tokenId, address account)public view returns (bool)",
                "function getContractAddress() public view returns (address)",
                "function getTransferResult() public view returns (bool)",
                "function getCreateTokenResult() public view returns (bool)"];

            const contract1 = new ethers.Contract(_issuer, issuer_abi, issuerSigner);
            const tx3 = await contract1.createNFT("QmZNbMHRAAxKTuqfLTJ6f6eRC7TtU6fBJTFHnznwHQmzJq/0", 2);
            const tx3_result = await tx3.wait();
            //console.log(tx3_result.events[1].message);
            // await expect(contract1.createNFT("QmZNbMHRAAxKTuqfLTJ6f6eRC7TtU6fBJTFHnznwHQmzJq/0", 2)).to.emit(contract1, "NFTMinted");

            expect(await contract1.getCreateTokenResult()).to.equal(true);

            await contract1.lockNFT(0, "QmZNbMHRAAxKTuqfLTJ6f6eRC7TtU6fBJTFHnznwHQmzJq", 10);
            await contract1.buyFractionaltraShares(0, 1, employee_role);
            expect(await contract1.getTransferResult()).to.equal(true);


            //await expect(contract1.buyFractionaltraShares(0, 1, employee_role)).to.emit(contract1, "NFTMinted");



            // console.log("The new issuer address is : ", await contract1.getContractAddress());
            const abi = [
                "function manageSupplies() public pure returns (string memory)",
                "function getContractAddress() public view returns (address)",
                "function getresult () public view returns (bool)",
                "function createAppointment( uint256 tokenUri,string memory resource_name,address verifier,address issuer,address account) public",
            ]


            const contract = new ethers.Contract(employee_role, abi, employeeRoleSigner);
            const transation = await contract.createAppointment(0, "appointment", _verifier, _issuer, employee_role);
            const trans_result = await transation.wait();

            const transation1 = await contract.getresult();
            //  const trans_result1 = await transation1.wait();
            // console.log(transation1);

            expect(await contract.getresult()).to.equal(true);


        });
    });

    describe("should successfully allow receiver to update receipt", () => {
        it("should successfully allow receiver to update receipt", async function () {
            //Create Admin roles  
            await contract_admin.deployed();
            await contract_receiver.deployed();
            await contract_verifier.deployed();

            console.log("Deployed Issuer", contract_issuer.address);

            const [admin, supplier, manager, issuer] = await ethers.getSigners();
            // console.log("Owner Address", admin.address);
            const tx1 = await contract_admin.connect(admin).createAdministrativeRoles();
            const tx1_result = await tx1.wait();
            const _issuer = tx1_result.events[0].args.issuer;
            const _verifier = tx1_result.events[2].args.verifier;

            await expect(contract_admin.createAdministrativeRoles()).to.emit(contract_admin, "IssuerCreated");
            await expect(contract_admin.createAdministrativeRoles()).to.emit(contract_admin, "VerifierCreated");

            console.log("Issuer Created: ", _issuer);
            console.log("Verifier Created: ", _verifier);



            // await contract_admin.connect(admin).createNonAdministrativeRoles();
            const tx = await contract_admin.connect(admin).createEmployee("Ahmed", 21);
            const tx_result = await tx.wait();
            const employee = tx_result.events[0].args.r1;
            await expect(contract_admin.createEmployee("Justine", 30)).to.emit(contract_admin, "EmployeeCreated");
            console.log("Employee Created: ", tx_result.events[0].args.name, tx_result.events[0].args.age.toNumber());


            const tx2 = await contract_admin.addRole(0, employee);
            const tx2_result = await tx2.wait();
            const employee_role = tx2_result.events[1].args.ac;
            const abi = [
                "function updateReciept(uint256 asset_id, uint256 resource_id,uint256 tokenUri,address issuer,address verifier,address account) public",
                "function getContractAddress() public view returns (address)",
                "function getresult () public view returns (bool)",
                "function updateInventoryRecord(uint256 id) public",
                "function generateReciept(string memory asset_name, uint256 id, uint256 tokenUri,  address issuer,  address account) public",
            ]

            
            // const [owner, addr1, addr2] = await ethers.getSigners();
            console.log("Role object address : ", employee_role);

            //   Create Issuer Signer 
            const issuerSigner = await ethers.getSigner(_issuer.address);
            const verifierSigner = await ethers.getSigner(_verifier.address);
            const employeeRoleSigner = await ethers.getSigner(employee_role.address);
            const issuer_abi = ["function _create(address receiver, string memory _tokenURI)  public returns (uint256)",
                "function _transferNFT(address _sender,address _receiver,uint256 _tokenId,string memory _tokenURI) public",
                "function createNFT(string memory _tokenURI, uint256 _price)",
                "function lockNFT( uint256 _tokenID,string memory _tokenURI,uint256 _sharesAmount) public",
                "function buyFractionaltraShares(uint256 _tokenID,uint256 _totalShares,address account) public payable",
                "function fetchNFTs() public view returns (NFT[] memory)",
                "function isNFTOwner(uint256 tokenId, address account)public view returns (bool)",
                "function getContractAddress() public view returns (address)",
                "function getTransferResult() public view returns (bool)",
                "function getCreateTokenResult() public view returns (bool)"];


            const contract1 = new ethers.Contract(_issuer, issuer_abi, issuerSigner);
            const tx3 = await contract1.createNFT("QmZNbMHRAAxKTuqfLTJ6f6eRC7TtU6fBJTFHnznwHQmzJq/0", 2);
            const tx4 = await contract1.createNFT("QmZNbMHRAAxKTuqfLTJ6f6eRC7TtU6fBJTFHnznwHQmzJq/1", 2);
            const tx5 = await contract1.createNFT("QmZNbMHRAAxKTuqfLTJ6f6eRC7TtU6fBJTFHnznwHQmzJq/2", 2);

            const tx3_result = await tx3.wait();


            expect(await contract1.getCreateTokenResult()).to.equal(true);

            await contract1.lockNFT(0, "QmZNbMHRAAxKTuqfLTJ6f6eRC7TtU6fBJTFHnznwHQmzJq", 10);
            await contract1.lockNFT(1, "QmZNbMHRAAxKTuqfLTJ6f6eRC7TtU6fBJTFHnznwHQmzJq", 10);
            await contract1.lockNFT(2, "QmZNbMHRAAxKTuqfLTJ6f6eRC7TtU6fBJTFHnznwHQmzJq", 10);

            await contract1.buyFractionaltraShares(2, 2, employee_role);
            expect(await contract1.getTransferResult()).to.equal(true);
            const contract = new ethers.Contract(employee_role, abi, employeeRoleSigner);
            const transation = await contract.updateReciept(1,1,2,_issuer,_verifier,employee_role);
           // const trans_result = await transation.wait();

           // const transation1 = await contract.getresult();
            //  const trans_result1 = await transation1.wait();
            // console.log(transation1);

            //expect(await contract.getresult()).to.equal(true);

        });
    });
});
