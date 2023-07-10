import { expect } from "chai";
const { hardhat, ethers } = require("hardhat");

import { WebofThingsDevice } from '../typechain-types/contracts/WebofThingsDevice';
import { APIConsumer } from '../typechain-types/contracts/APIConsumer';
import * as Witnet from "witnet-requests";

describe("WebOfThingsContract", function() {
    let contract_webofthings: WebofThingsDevice;
    let contract_apiconsumer: APIConsumer;
    let contract_admin: Administrator;
    let contract_issuer: Issuer;
    let contract_verifier: Verifier;
    let contract_resource: Resource;
    let contract_supplier: Supplier;
    let contract_receiver: Receiver;


    this.beforeEach(async() => {
        const [owner, addr1, addr2] = await ethers.getSigners();
        console.log("owner address: " + owner.address);
        const contract_WebOfthings = await ethers.getContractFactory("WebofThingsDevice");
        contract_webofthings = await contract_WebOfthings.deploy();
        contract_webofthings.deployed();
        // const contract_ApiConsumer = await ethers.getContractFactory("APIConsumer");
        // contract_apiconsumer = await contract_ApiConsumer.deploy(); 
        // contract_apiconsumer.deployed();
        await contract_webofthings.wotPropertyAssigner(addr1.address, "samplewot1", "wotdescription", "specwot");

        //Important features of the Self-sovereign identity contracts were added
        const Administrator = await ethers.getContractFactory("Administrator");
        contract_admin = await Administrator.deploy();

        const Issuer = await ethers.getContractFactory("Issuer");
        contract_issuer = await Issuer.deploy("NFT ", "NFT");

        const Verifier = await ethers.getContractFactory("Verifier");
        contract_verifier = await Verifier.deploy();


        const Resource = await ethers.getContractFactory("Resource");
        contract_resource = await Resource.deploy("Resource");

        const Supplier = await ethers.getContractFactory("Supplier");
        contract_supplier = await Supplier.deploy();

        const Receiver = await ethers.getContractFactory("Receiver");
        contract_receiver = await Receiver.deploy();

    });

    it("should send a sample message from the WoT", async function() {
        expect(await contract_webofthings.getSampleMessage()).to.equal("Wot Device");
    });

    it("should reach some information through constructor", async function() {
        expect(await contract_webofthings.getWotDescriptionName()).to.equal("wotdescription");
        expect(await contract_webofthings.getWotSpecificationName()).to.equal("specwot");
        expect(await contract_webofthings.getWotName()).to.equal("samplewot1")
    });

    // it("should get external data through an oracle contract", async function() {
    //     expect(await contract_apiconsumer.requestVolumeData()).not.to.null;
    // });

    it("test for the external web oracle in blockchain", async function() {
        const binance = new Witnet.Source("https://api.binance.US/api/v3/trades?symbol=ETHUSD")
                .parseJSONMap()
                .getFloat("price")
                .multiply(10 ** 6)
                .round()  
        console.log("result:" + binance.toString);
        expect(binance.toString()).to.not.null;

        const coinbase = new Witnet.Source("https://api.coinbase.com/v2/exchange-rates?currency=ETH")
            .parseJSONMap()
            .getMap("data")
            .getMap("rates")
            .getFloat("USD")
            .multiply(10 ** 6)
            .round()

        console.log(coinbase.toString());
        expect(coinbase.toString()).to.not.null;

        const webOfThingsResult = new Witnet.Source("http://192.168.0.5:3000/mycounter")
            .parseJSONMap()
            .getMap("data")

        console.log("url of the webOfTHingsResult endpoint: " + webOfThingsResult.url);
        expect(webOfThingsResult.toString()).to.not.null;

        
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



    
})