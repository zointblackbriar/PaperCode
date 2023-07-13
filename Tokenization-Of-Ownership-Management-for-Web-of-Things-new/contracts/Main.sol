// // SPDX-License-Identifier: MIT

// pragma solidity ^0.8.7;

// import "./NonAdministrativeRoles/Manager.sol";
// import "./NonAdministrativeRoles/Putaway.sol";

// import "./NonAdministrativeRoles/Auditor.sol";
// import "./NonAdministrativeRoles/Reciever.sol";
// import "./NonAdministrativeRoles/Supplier.sol";
// import "./NonAdministrativeRoles/Picker.sol";
// import "./AdministrativeRoles/Issuer.sol";
// import "./AdministrativeRoles/Verifier.sol";
// import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
// import "@erc725/smart-contracts/contracts/ERC725.sol";

// //import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";

// import "./Resource.sol";

// contract Main is IERC721Receiver {
//     // using Chainlink for Chainlink.Request;

//     Manager manager;
//     Picker picker1;
//     Picker picker2;
//     Receiver receiver1;
//     Receiver receiver2;
//     Supplier supplier1;
//     Supplier supplier2;
//     Auditor auditor1;
//     Auditor auditor2;
//     Putaway putaway1;
//     Putaway putaway2;

//     Issuer issuer;
//     Verifier verifier;

//     event CreateAdminitrativeRoles();
//     event CreateIssuer();
//     event CreateVerifier();
//     event CreateManager(string Name, uint256 Age);
//     event CreatePicker(string Name, uint256 Age);
//     event CreateSupplier(string Name, uint256 Age);
//     event CreateAuditor(string Name, uint256 Age);
//     event CreateReceiver(string Name, uint256 Age);
//     event CreatePutaway(string Name, uint256 Age);

//     function createAdministrativeRoles() public {
//         IComponent employee1 = new ComponentCore("Richard", 24);
//         issuer = new Issuer();
//         if (issuer.getContractAddress() != address(0)) {
//             emit CreateIssuer();
//         }

//         verifier = new Verifier();
//         address verifier_address = verifier.getContractAddress();
//         if (verifier_address != address(0)) {
//             emit CreateVerifier();
//         }
//     }

//     function createNonAdministrativeRoles() public {
//         IComponent employee1 = new ComponentCore("Richard", 34);
//         manager = new Manager(employee1);
//         //employee1.job();
//         if (employee1.addRole(manager.getContractAddress(), manager)) {
//             emit CreateManager(manager.getName(), manager.getAge());
//         }

//         IComponent employee2 = new ComponentCore("Derik", 24);
//         picker1 = new Picker(employee2);
//         if (employee2.addRole(picker1.getContractAddress(), picker1)) {
//             emit CreatePicker(picker1.getName(), picker1.getAge());
//         }

//         IComponent employee3 = new ComponentCore("Samuel", 25);
//         picker2 = new Picker(employee3);
//         if (employee3.addRole(picker2.getContractAddress(), picker2)) {
//             emit CreatePicker(picker2.getName(), picker2.getAge());
//         }

//         IComponent employee4 = new ComponentCore("Mathew", 40);
//         supplier1 = new Supplier(employee4);
//         if (employee4.addRole(supplier1.getContractAddress(), supplier1)) {
//             emit CreateSupplier(supplier1.getName(), supplier1.getAge());
//         }

//         IComponent employee5 = new ComponentCore("Sara", 23);
//         supplier2 = new Supplier(employee5);
//         if (employee5.addRole(supplier2.getContractAddress(), supplier2)) {
//             emit CreateSupplier(supplier2.getName(), supplier2.getAge());
//         }

//         IComponent employee6 = new ComponentCore("Tony", 21);
//         auditor1 = new Auditor(employee6);
//         if (employee6.addRole(auditor1.getContractAddress(), auditor1))
//             emit CreateAuditor(auditor1.getName(), auditor1.getAge());

//         IComponent employee7 = new ComponentCore("Samantha", 29);
//         auditor2 = new Auditor(employee7);
//         if (employee7.addRole(auditor2.getContractAddress(), auditor2)) {
//             emit CreateAuditor(auditor2.getName(), auditor2.getAge());
//         }

//         IComponent employee8 = new ComponentCore("John", 24);
//         putaway1 = new Putaway(employee8);
//         if (employee8.addRole(putaway1.getContractAddress(), putaway1))
//             emit CreatePutaway(putaway1.getName(), putaway1.getAge());

//         IComponent employee9 = new ComponentCore("Ali", 29);
//         putaway2 = new Putaway(employee9);
//         if (employee9.addRole(putaway2.getContractAddress(), putaway2))
//             emit CreatePutaway(putaway2.getName(), putaway2.getAge());

//         IComponent employee10 = new ComponentCore("Muhammad", 22);
//         receiver1 = new Receiver(employee10);
//         if (employee8.addRole(receiver1.getContractAddress(), receiver1))
//             emit CreateReceiver(receiver1.getName(), receiver1.getAge());

//         IComponent employee11 = new ComponentCore("Ahmed", 31);
//         receiver2 = new Receiver(employee11);
//         employee9.addRole(receiver2.getContractAddress(), receiver2);
//         emit CreateReceiver(receiver2.getName(), receiver2.getAge());
//     }

//     function mintTokens() internal {
//         issuer.safeMint(issuer.getContractAddress(), 0);
//         issuer.safeMint(issuer.getContractAddress(), 1);
//         issuer.safeMint(issuer.getContractAddress(), 2);
//         issuer.safeMint(issuer.getContractAddress(), 3);
//         issuer.safeMint(issuer.getContractAddress(), 4);
//         issuer.safeMint(issuer.getContractAddress(), 5);
//         issuer.safeMint(issuer.getContractAddress(), 6);
//         issuer.safeMint(issuer.getContractAddress(), 7);
//         issuer.safeMint(issuer.getContractAddress(), 8);
//         issuer.safeMint(issuer.getContractAddress(), 9);
//         issuer.safeMint(issuer.getContractAddress(), 10);
//     }

//     function transferTokens() internal {
//         issuer.transferToken(
//             issuer.getContractAddress(),
//             manager.getContractAddress(),
//             2
//         );
//     }


//     function main() public {
//         console.log("I am in main");
//         createAdministrativeRoles();
//         createNonAdministrativeRoles();
//         mintTokens();
//         transferToken();
//         //issuer.transferToken(issuer.getContractAddress(),supplier1.getContractAddress(), 0 );
//         //supplier wants to create an appointment
//         //request();
//         //accessResource("appointmnent", "supplier", 0);
//     }

//     function onERC721Received(
//         address,
//         address,
//         uint256,
//         bytes memory
//     ) public virtual override returns (bytes4) {
//         return this.onERC721Received.selector;
//     }

//     // function request() public {
//     //     Chainlink.Request memory req = buildChainlinkRequest(
//     //         "7d80a6386ef543a3abb52817f6707e3b",
//     //         address(this),
//     //         this.fulfill.selector
//     //     );
//     //     req.add(
//     //         "get",
//     //         "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10"
//     //     );
//     //     req.add("path", "0,id");
//     //     sendChainlinkRequest(req, (1 * LINK_DIVISIBILITY) / 10); // 0,1*10**18 LINK
//     //     console.log("Chainlink");
//     // }

//     // string public id;

//     // function fulfill(bytes32 _requestId, string memory _id)
//     //     public
//     //     recordChainlinkFulfillment(_requestId)
//     // {
//     //     id = _id;
//     // }

//     function transferToken() public {
//         //Transfer token: Create Supplier Appointmnet to Supplier 1
//         issuer.transferToken(
//             issuer.getContractAddress(),
//             supplier1.getContractAddress(),
//             0
//         );
//         // //Transfer token: Update Supplier Appointment to Supplier 1
//         issuer.transferToken(
//             issuer.getContractAddress(),
//             supplier1.getContractAddress(),
//             1
//         );
//                 issuer.transferToken(
//             issuer.getContractAddress(),
//             supplier1.getContractAddress(),
//             3
//         );
//         // //Transfer token: Update Supplier Appointment to Supplier 1
//         issuer.transferToken(
//             issuer.getContractAddress(),
//             supplier1.getContractAddress(),
//             4
//         );
//                 issuer.transferToken(
//             issuer.getContractAddress(),
//             supplier1.getContractAddress(),
//             5
//         );
//         // //Transfer token: Update Supplier Appointment to Supplier 1
//         issuer.transferToken(
//             issuer.getContractAddress(),
//             supplier1.getContractAddress(),
//             6
//         );



//         // //Transfer token: Create Supplier Appointmnet to Supplier 2
//         // issuer.transferToken(
//         //     issuer.getContractAddress(),
//         //     supplier2.getContractAddress(),
//         //     0
//         // );
//         // //Transfer token: Update Supplier Appointment to Supplier 2
//         // issuer.transferToken(
//         //     issuer.getContractAddress(),
//         //     supplier2.getContractAddress(),
//         //     1
//         // );
//     }

//     function getaddressNonAdminRoles() public  returns (bool) {
//         return supplier1.hasRole(supplier1.getContractAddress(), supplier1);
//     }
// }
