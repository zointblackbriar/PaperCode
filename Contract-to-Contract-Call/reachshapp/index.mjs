import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib();

// // First role of the account
// const accRole1 = await stdlib.newTestAccount(stdlib.parseCurrency(100)); 
// // Second role of the account
// const accRole2 = await stdlib.newTestAccount(stdlib.parseCurrency(100)); 

// const ctcRole1 = accRole1.contract(backend); 
// const ctcRole2 = accRole2.contract(backend, ctcRole1.getInfo());

// await Promise.all([
//     ctcRole1.participants.Role1({
//         request: stdlib.parseCurrency(5),
//         info: 'Verwendungszweck'
//     }),
//     ctcRole2.p.Role2({
//         want: (amt) => console.log('Alice asked Bob for ${stdlib.formatCurrency(amt)}'),
//         got: (secret) => console.log('Alices secret is: ${secret}')
//     })
// ]);

(async () => {
    const stdlib = await loadStdlib(); 
    const startingBalance = stdlib.parseCurrency(100);

    //first balance of the account
    const role1 = await stdlib.newTestAccount(startingBalance); 


    const role2 = await stdlib.newTestAccount(startingBalance); 

    // deployment for the test network
    const testAccountRole1 = role1.deploy(backend); 

    //attachment of the predefined test account
    const testAccountRole2 = role2.attach(backend, testAccountRole1.getInfo()); 


    await Promise.all([
        backend.Role1(stdlib, role1, {
            ...stdlib.hasRandom
        }),
        backend.Role2(stdlib, role2, {
            ...stdlib.hasRandom
        }),
    ]);

    console.log("initial application has been programmed");
})();

