const {expect} = require("chai");
const {ethers} = require("hardhat");

describe("MaintenanceAgent", async function() {
    let maintenanceAgent;
    let MaintenanceAgent;
    let owner;
    beforeEach(async function() {
        [owner] = await ethers.getSigners();
        MaintenanceAgent = await ethers.getContractFactory("MaintenanceAgent");
        maintenanceAgent = await MaintenanceAgent.deploy();
        await maintenanceAgent.deployed();
    });

    it("Should log a maintenance task", async function() {
        const taskDescription = "Fix broken machinery";
        await maintenanceAgent.connect(owner).logMaintenanceTask(taskDescription);
        const[loggedTaskDescription, assignedAgent, status, timestamp] = await maintenanceAgent.connect(owner).getTaskDetails(1);
        expect(loggedTaskDescription).to.equal(taskDescription);
        expect(assignedAgent).to.equal("0x0000000000000000000000000000000000000000"); // we didn't assign any address to an agent.
        expect(status).to.equal(0); //TaskStatus Open
        expect(timestamp).to.not.equal(0);
    });

    it("should complete a task", async function() {
        const taskDescription = "Fix broken machinery";
        const assignedAgent = ethers.Wallet.createRandom().address;

        await maintenanceAgent.connect(owner).logMaintenanceTask(taskDescription);
        await maintenanceAgent.connect(owner).assignTaskToAgent(1, assignedAgent); // assignment address of an agent
        await maintenanceAgent.connect(owner).completeTask(1);

        const [, ,  status] = await maintenanceAgent.getTaskDetails(1);
        expect(status).to.equal(2); // Task has been completed and confirmed
    }); 
})