// const {expect} = require('chai');
// const {Servient, Helpers}  = require('@node-wot/core')
// const {HttpServer} = require('@node-wot/binding-http').HttpServer;

// describe('WoT Servient', () => {
//     let servient; 
//     let thing; 
//     let count;
//     let WoT;

//     before(async() => {
//         servient = new Servient(); 
//         servient.addServer(new HttpServer({port: 3000})); 
//         await servient.start(); 
//         WoT = await Helpers.fetch(WoT); 
//         console.log(WoT)
//         thing = await WoT.produce({
//             title: 'Counter',
//             properties: {
//                 count: {
//                     type: 'integer',
//                 },
//             },
//         });

//         count = 0;

//         thing.setPropertyReadHandler('count', async() => count);
//         thing.setPropertyWriteHandler('count', async(inOutput, options) => {
//             count = await inOutput.value();
//             return undefined;
//         });

//         await thing.expose();
//     });

//     after(() => {
//         servient.shutdown();
//     });

//     it('should have the correct title', () => {
//         expect(thing.getThingDescription().title).to.equal('Counter');
//     });

//     it('should have an initial count value of 0', async() => {
//         const countValue = await thing.properties.count.read();
//         expect(countValue).to.equal(0);
//     });
// });