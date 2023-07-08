// server.js
// Required steps to create a servant to create a thing of WoT
// deprecated
const Servant = require("@node-wot/core").Servient;
const HttpServer = require("@node-wot/binding-http").HttpServer; 
const { expect } = require('chai');

Helpers = require("@node-wot/core").Helpers; 

//create Servient and adding HTTP binding with port configuration
let servant = new Servant(); 
servant.addServer(
    new HttpServer(
        {port : 3000,}
    )
)

let count; // add a counter

servant.start().then((WoT) => {
    WoT.produce({
        title: "MyCounter",
        properties: {
            count: {
                type: "integer",
            },
        },
    }).then((thing) => {
        console.log("Thing description: " + thing.getThingDescription().title);

        //init property value 
        count = 0;
        //set property handlers (using async-await)
        thing.setPropertyReadHandler("count", async() => count); 
        thing.setPropertyWriteHandler("count", async(inOutput, options) => {
            count = await inOutput.value(); 
            return undefined;
        }); 

        //expose the thing
        thing.expose().then(() => {
            console.info("End of the message: " + thing.getThingDescription().title + " ready");
        });
    });
});