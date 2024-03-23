const {expect} = require("chai")

describe("OEECalculator", function () {
    let OEECalculator;
    let oeeCalculator;
    const operatingTime = 100;
    const scheduledProductionTime = 3600;
    const totalUnitsProduced = 1000;
    const goodUnits = 950;

    beforeEach(async function () {
        OEECalculator = await ethers.getContractFactory("OEECalculator");
        oeeCalculator = await OEECalculator.deploy();
        await oeeCalculator.deployed();
    });

    it("should set scheduled production time and update OEE", async function () {
        await oeeCalculator.setScheduledProductionTime(3600);
        await oeeCalculator.recordOperatingTime(10);
        await oeeCalculator.recordProduction(12, 15);

        await oeeCalculator.updateOEE();
        console.log(await oeeCalculator.result())
        // expect(await oeeCalculator.result()).to.equal(3600);
    });

    it("testing with event OEEUpdated", async function() {
    
        await oeeCalculator.recordOperatingTime(operatingTime);
        await oeeCalculator.setScheduledProductionTime(scheduledProductionTime);
        await oeeCalculator.recordProduction(totalUnitsProduced, goodUnits);
    
        const tx = await oeeCalculator.updateOEE();
        const receipt = await tx.wait(); // wait for the transaction
    
        const oneUpdateEvent = receipt.events.find((event) => event.event === "OEEUpdated");
        expect(oneUpdateEvent).to.exist;

        //Verifying event values
        const availability = oneUpdateEvent.args.availability;
        const performance = oneUpdateEvent.args.performance;
        const quality = oneUpdateEvent.args.quality;
        const oee = oneUpdateEvent.args.oee; 
        console.log("availability: " + availability);
        console.log("performance: " +performance);
        console.log("quality: " +quality);
        console.log("oee: " +oee);

        // expect(availability).to.equal((operatingTime * 100) / scheduledProductionTime);
        // expect(performance).to.equal((totalUnitsProduced * 100) / (operatingTime * 1e18));
        // expect(quality).to.equal((goodUnits * 100) / totalUnitsProduced);
        // expect(oee).to.equal((availability * performance * quality) / 10000);
    
    });
})