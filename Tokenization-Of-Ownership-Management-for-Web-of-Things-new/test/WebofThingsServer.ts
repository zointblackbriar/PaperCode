import { Servient, Helpers } from '@node-wot/core';
import { HttpServer } from '@node-wot/binding-http';
import { Validator } from 'react';
import { AnyCnameRecord } from 'dns';

const servant = new Servient();
servant.addServer(new HttpServer({ port: 3000 }));

let count: any;

servant.start().then((WoT) => {
  WoT.produce({
    title: 'MyCounter',
    properties: {
      count: {
        type: 'integer',
      },
    },
  }).then((thing) => {
    console.log('Thing description: ' + thing.getThingDescription().title);

    count = 0;

    thing.setPropertyReadHandler('count', async () => count);
    thing.setPropertyWriteHandler('count', async (inOutput, options) => {
      count = (await inOutput.value());
      return undefined;
    });

    thing.expose().then(() => {
      console.info('End of the message: ' + thing.getThingDescription().title + ' ready');
    });
  });
});
