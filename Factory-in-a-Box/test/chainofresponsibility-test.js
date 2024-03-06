const {expect} = require('chai'); 
const {ethers} = require('hardhat');

describe(' Chain of Responsibility Contracts', function() {
    let ConcreteHandler1, ConcreteHandler2, Client, RequestHandler;
    let concreteHandler1, concreteHandler2, client, requestHandler;

    beforeEach(async function() {
        ConcreteHandler1 = await ethers.getContractFactory('ConcreteHandler1');
        ConcreteHandler2 = await ethers.getContractFactory('ConcreteHandler2');
        RequestHandler = await ethers.getContractFactory('RequestHandler');
        Client = await ethers.getContractFactory('Client');
        // requestHandler = await RequestHandler.deploy(); 
        concreteHandler1 = await ConcreteHandler1.deploy();
        concreteHandler2 = await ConcreteHandler2.deploy();
        requestHandler = await RequestHandler.deploy();
        await concreteHandler1.setNextHandler(concreteHandler2.address);
        client = await Client.deploy(requestHandler.address);
        // console.log("concretedHandler1: ", concreteHandler1);
        // console.log("concretedHandler2: ", concreteHandler2);
        // await concreteHandler1.setNextHandler(concreteHandler2.nextHandler);
    });

    it("should handle requests correctly", async function() {
        //Test with amounts within each handler's range 
        console.log(await client.processRequest(400));
        expect(await client.stateVariable()).to.be.equal(true);
        await client.processRequest(10);
        expect(await client.stateVariable()).to.be.equal(false);

        // expect(await client.processRequest(50)).to.be.equal(true);
        // expect(await client.processRequest(200)).to.be.equal(true); 
        // Test with amounts outside both handlers' range
        // expect(await client.processRequest(500)).to.be.equal(false); //Expect false
    });
});

