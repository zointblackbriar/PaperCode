// client side of the application
// deprecated
Servant = require("@node-wot/core").Servient; 
HttpClientFactory = require("@node-wot/binding-http").HttpClientFactory; 

Helpers = require("@node-wot/core").Helpers; 

//create Servient and adding HTTP binding
let servient = new Servant(); 
servient.addClientFactory(new HttpClientFactory(null)); 

let wotHelper = new Helpers(servient); 
wotHelper
    .fetch("http://plugfest.thingweb.io:8083/testthing")
    .then(async (td) => {
        // using await for serial execution (note 'async' in then() of fetch())
        try {
            const WoT = await servient.start(); 
            const thing = await WoT.consume(td); 
            // console.log("remote thing in the WoT: ", thing);

            //Read property 
            const read1 = await thing.readProperty("string"); 
            const readInt = await thing.readProperty("int")
            console.log("string value is: ", await read1.value()); 
            console.log("int value is: " + await readInt.value());
        } catch(err) {
            console.error("Script error: ", err);
        }
    }).catch((err) => {
        console.error("Fetch error: ", err)
    });

    wotHelper
    .fetch("http://192.168.0.5:3000/mycounter")
    .then(async (td) => {
        // using await for serial execution (note 'async' in then() of fetch())
        try {
            const WoT = await servient.start(); 
            const thing = await WoT.consume(td); 
            console.log("thing in the WoT: ", thing);
            //Read property 
            // const read1 = await thing.readProperty("title"); 
            // console.log("string value is: ", await read1.value()); 
        } catch(err) {
            console.error("Script error: ", err);
        }
    }).catch((err) => {
        console.error("Fetch error: ", err)
    });

exports.wotHelper = wotHelper;