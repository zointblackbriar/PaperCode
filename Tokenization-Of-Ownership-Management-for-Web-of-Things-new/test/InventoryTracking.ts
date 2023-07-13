
import { expect } from "chai";
import { ethers } from 'ethers';
import { Transporter__factory } from "../typechain-types";
import { administrativeRoles } from "../typechain-types/contracts";
import { Admin } from '../typechain-types/contracts/RoleObjectPattern/ROP.sol';
import { Supplier } from '../typechain-types/contracts/MediatorPattern/NonAdminRoles/mSupplier.sol';
import { Receiver } from '../typechain-types/contracts/MediatorPattern/NonAdminRoles/mReceiver.sol';
import { Putaway } from '../typechain-types/contracts/MediatorPattern/NonAdminRoles/mPutaway.sol';
import { Picker } from '../typechain-types/contracts/MediatorPattern/NonAdminRoles/mPicker.sol';
import { Auditor } from '../typechain-types/contracts/MediatorPattern/NonAdminRoles/mAuditor.sol';
import { Transporter } from '../typechain-types/contracts/MediatorPattern/NonAdminRoles/mTransporter.sol';



describe("Inventory Tracking Module", function () {

    let contract_supplier: Supplier;
    let contract_receiver: Receiver;
    let contract_putaway: Putaway;
    let contract_picker: Putaway;
    let contract_transporter: Putaway;
    let contract_auditor: Auditor;



    //let contract_empcore: Administrator;
    //let contract_transporter: Transporter;


    const hardhat = require("hardhat")
    const fetch = require("node-fetch")
    const { ethers } = require("hardhat");


    beforeEach(async () => {
        //const Verifier = await hardhat.ethers.getContractFactory("Verifier");
        // contract = await Verifier.deploy();

        const Supplier = await hardhat.ethers.getContractFactory("Supplier");
        contract_supplier = await Supplier.deploy();


        const Receiver = await hardhat.ethers.getContractFactory("Receiver");
        contract_receiver = await Receiver.deploy();

        const Putaway = await hardhat.ethers.getContractFactory("Putaway");
        contract_putaway = await Putaway.deploy();

        const Picker = await hardhat.ethers.getContractFactory("Picker");
        contract_picker = await Picker.deploy();

        const Transporter = await hardhat.ethers.getContractFactory("Transporter");
        contract_transporter = await Transporter.deploy();

        const Auditor = await hardhat.ethers.getContractFactory("Auditor");
        contract_auditor = await Auditor.deploy();
        //  const Transporter = await hardhat.ethers.getContractFactory("Transporter");
        //  contract_transporter = await Transporter.deploy();

    });

    describe("trackInventory", () => {
        it("should track inventory based on the id of the asset", async function () {
            await contract_supplier.deployed();
            await contract_receiver.deployed();


            //const tx = await contract_receiver.receiveItems("abc",1);
            /////////////////////Engine////////////////////////////
            const tx2 = await contract_receiver.receiveItems("Automobile Engine", 1);
            const tx2_result = await tx2.wait();
            const message = tx2_result.events[0].args.message;
            const name = tx2_result.events[0].args.asset_name;
            const id = tx2_result.events[0].args.id;
            const phase = tx2_result.events[0].args.phase;

            //const tx_result = await contract_receiver.wait();
            console.log(phase.toString(), "::",  message, String(name), "Asset id: ", id.toNumber());
            ////////////////////STEEL FRAME////////////////////////////////////////////
            const tx11 = await contract_receiver.receiveItems("Steel Frame", 2);
            const tx11_result = await tx11.wait();
            const message11 = tx11_result.events[0].args.message;
            const name11 = tx11_result.events[0].args.asset_name;
            const steelframe_id = tx11_result.events[0].args.id;
            const phase11 = tx11_result.events[0].args.phase;
            console.log(phase11.toString(), "::",  message11, String(name11), "Asset id: ", steelframe_id.toNumber());



            /////////////////GEAR BOX///////////////////////////////////////////////////////
            const tx12 = await contract_receiver.receiveItems("Gear Box", 3);
            const tx12_result = await tx12.wait();
            const message12 = tx12_result.events[0].args.message;
            const name12 = tx12_result.events[0].args.asset_name;
            const gearbox_id = tx12_result.events[0].args.id;
            const phase12 = tx12_result.events[0].args.phase;
            console.log(phase12.toString(), "::",  message12, String(name12), "Asset id: ", gearbox_id.toNumber());

            //////////////////////////////////////////////

            const tx3 = await contract_receiver.updateInventoryRecord(1);
            const tx3_result = await tx3.wait();
            const message1 = tx3_result.events[0].args.message;
            const id1 = tx3_result.events[0].args.id;
            const phase1 = tx2_result.events[0].args.phase;

            //const tx_result = await contract_receiver.wait();
            console.log(phase1.toString(), "::", message1, "Asset id: ", id1.toNumber());

            //////////////Update Inventory Rcord Steel Frame//////////////////
            const tx13 = await contract_receiver.updateInventoryRecord(steelframe_id);
            const tx13_result = await tx13.wait();
            const message13 = tx13_result.events[0].args.message;
            const id13 = tx13_result.events[0].args.id;
            const phase13 = tx13_result.events[0].args.phase;
            console.log(phase13.toString(), "::", message13, "Asset id: ", id13.toNumber());



            ////////////////////////Update Inventory Record GearBox////////////////////////////

            const tx16 = await contract_receiver.updateInventoryRecord(gearbox_id);
            const tx16_result = await tx16.wait();
            const message16 = tx16_result.events[0].args.message;
            const id16 = tx16_result.events[0].args.id;
            const phase16 = tx16_result.events[0].args.phase;
            console.log(phase16.toString(), "::", message16, "Asset id: ", id16.toNumber());
           ////////////////////////////////////////////////////////////////


            const tx4 = await contract_putaway.getStorageLocation(1);
            const tx4_result = await tx4.wait();
            // const _id = tx4_result.events[0].args.id;
            const _location_id = tx4_result.events[0].args.rack_no;
            const _message = tx4_result.events[0].args.message;
            const phase4 = tx4_result.events[0].args.phase;

            console.log(phase4.toString(), "::", _message.toString(), _location_id.toNumber());

            //const tx4_result = await tx3.wait();
            //console.log("Free Rack No: ", tx4.toNumber());
            /////////////////////////get Storage Location Steel Frame////////////
            const tx14 = await contract_putaway.getStorageLocation(steelframe_id);
            const tx14_result = await tx14.wait();
            // const _id = tx4_result.events[0].args.id;
            const _location_id14 = tx14_result.events[0].args.rack_no;
            const _message14 = tx14_result.events[0].args.message;
            const phase14 = tx14_result.events[0].args.phase;

            console.log(phase14.toString(), "::", _message14.toString(), _location_id14.toNumber());

            ////////////////////////////////////////////////////////

            const tx5 = await contract_putaway.addItemStorage(1);
            const tx5_result = await tx5.wait();
            const id2 = tx5_result.events[0].args.id;
            const location_id = tx5_result.events[0].args.rack_no;
            const message2 = tx5_result.events[0].args.message;
            const phase5 = tx5_result.events[0].args.phase;
            console.log(phase5.toString(), "::", message2.toString(), id2.toNumber(), " Rack No. ", location_id.toNumber());


            ///////////////Storage Steel Frame///////////////


            const tx15 = await contract_putaway.addItemStorage(steelframe_id);
            const tx15_result = await tx15.wait();
            const id15 = tx15_result.events[0].args.id;
            const location_id15 = tx15_result.events[0].args.rack_no;
            const message15 = tx15_result.events[0].args.message;
            const phase15 = tx15_result.events[0].args.phase;
            console.log(phase15.toString(), "::", message15.toString(), id15.toNumber(), " Rack No. ", location_id15.toNumber());

            ///////////////////////////////////////////////////

            const tx10 = await contract_auditor.inspectInventory(1);
            const tx10_result = await tx10.wait();
            const id10 = tx10_result.events[0].args.id;
            const message10 = tx10_result.events[0].args.message;
            const phase10 = tx10_result.events[0].args.phase;
            console.log(phase10.toString(), "::", message10.toString(), id10.toNumber(),);




            const tx6 = await contract_picker.receiveOrder(1);
            const tx6_result = await tx6.wait();
            const id3 = tx6_result.events[0].args.id;
            const message3 = tx6_result.events[0].args.message;
            const phase6 = tx6_result.events[0].args.phase;
            console.log(phase6.toString(), "::", message3.toString(), id3.toNumber());


            const tx17 = await contract_picker.getStorageLoc(1);
            const tx17_result = await tx17.wait();
            const id17 = tx17_result.events[0].args.id;
            const message17 = tx17_result.events[0].args.message;
            const phase17 = tx17_result.events[0].args.phase;
            const location17 = tx17_result.events[0].args.rack_no;

            console.log(phase17.toString(), "::", message17.toString(), "Asset Id:", id17.toNumber(), "Location", location17.toNumber());




            const tx7 = await contract_picker.updateStorageReport(1);
            const tx7_result = await tx7.wait();
            const id4 = tx7_result.events[0].args.id;
            const message4 = tx7_result.events[0].args.message;
            const phase7 = tx7_result.events[0].args.phase;


            // const location_id = tx5_result.events[0].args.rack_no;
            console.log(phase7.toString(), "::", message4.toString(), id4.toNumber());

            const tx8 = await contract_picker.packInventory(id);
            const tx8_result = await tx8.wait();
            const id8 = tx8_result.events[0].args.id;
            const message8 = tx8_result.events[0].args.message;
            const phase8 = tx8_result.events[0].args.phase;


            // const location_id = tx5_result.events[0].args.rack_no;
            console.log(phase8.toString(), "::", message8.toString(), id8.toNumber());



            const tx18 = await contract_transporter.updateInventoryRecord(id);
            const tx18_result = await tx18.wait();
            const id18 = tx18_result.events[0].args.id;
            const message18 = tx18_result.events[0].args.message;
            const phase18 = tx18_result.events[0].args.phase;
            console.log(phase18.toString(), "::", message18.toString(), id18.toNumber());


            const tx9 = await contract_transporter.shipInventory(id);
            const tx9_result = await tx9.wait();
            const id9 = tx9_result.events[0].args.id;
            const message9 = tx9_result.events[0].args.message;
            const phase9 = tx9_result.events[0].args.phase;


            // const location_id = tx5_result.events[0].args.rack_no;
            console.log(phase9.toString(), "::", message9.toString(), id9.toNumber());

            //const message1 = tx3_result.events[0].args.message;
            //const id1= tx3_result.events[0].args.id;

            //const tx_result = await contract_receiver.wait();
            //console.log(message1,"id: " ,id1.toNumber());
            //console.log(tx.events?.filter((x:any) => {return x.event == "AppointmentCreated"}));
            //const name = tx_result.events[2].args.message;
            // console.log("Event ", name);
            // await expectEvent.inLogs(tx3.logs, 'AccessResult', { access: "Access Granted" });
            //await expectEvent.inLogs(tx3.logs, 'AccessResult', { name: "Appointment Not Created" });




        });
    });
});
