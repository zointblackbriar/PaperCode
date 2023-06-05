// pragma solidity ^0.8.7;
// import "@openzeppelin/contracts/utils/introspection/ERC165.sol";
// import "hardhat/console.sol";

// //import "@openzeppelin/contracts/token/ERC165/ERC165.sol";

// // interface IPerson {
// //     function name() external returns (string memory);

// //     function name(string memory newName) external;

// //     function salary() external returns (uint256);

// //     function makeManager() external;
// // }

// // // interface Engineer is Person{
// // // function numberOfPatents (int value) external;
// // // function numberOfPatents () external returns(uint256);
// // // }
// // // interface Salesman is Person{
// // // function numberOfSales (int numberOfSales) external;
// // // function numberOfSales () external returns (uint256);
// // // }
// // // interface Manager is Person{
// // // function budget (uint256 value) external;
// // // }

// // contract Person {

// //     function addRole() public {}

// //     function roleOf(string memory RoleName) {}
// // }

// // contract PersonRole {
// //     uint256 private _numberOfSales = 0;

// //     function hasType(string memory value) public virtual returns (bool) {
// //         return false;
// //     }
// // }

// // contract Salesman is PersonRole {
// //     function hasType(string memory value) public override returns (bool) {
// //         //if (value.equalsIgnoreCase("Salesman")) return true;
// //         //if (value.equalsIgnoreCase("JobRole")) return true;
// //         //  else
// //         //return
// //         super.hasType(value);
// //     }

// //     function numberOfSales() public returns (int256) {
// //         return 0;
// //     }
// // }

// // contract Main is PersonRole {
// //     Person subject;
// //     Salesman subjectSalesman = Salesman(subject.roleOf("Salesman"));
// // }

// interface IAccessControl {
//     function accountAddRole(address account, EmployeeRole employeeRole) external;

//     function accountHasRole(address account, EmployeeRole employeeRole)
//         external
//         returns (bool);

//     function accountRemoveRole(address account, EmployeeRole employeeRole) external;
// }

// contract AccessControl is ERC165, IAccessControl {
//     // an account has many roles
//     mapping(address => mapping(EmployeeRole => bool)) accountRoles;

//     constructor() {}

//     function accountAddRole(address account, EmployeeRole employeeRole)
//         public
//         override
//     {
//         console.log("Account", account);
//         console.log("Role", address(employeeRole));
//         accountRoles[account][employeeRole] = true;
//     }

//     function accountHasRole(address account, EmployeeRole employeeRole)
//         public
//         view
//         override
//         returns (bool)
//     {
//         return accountRoles[account][employeeRole];
//     }

//     function accountRemoveRole(address account, EmployeeRole employeeRole)
//         public
//         override
//     {
//         accountRoles[account][employeeRole] = false;
//     }

    
// }

// contract EmployeeRole {
//     string name;
//     string age;
// }

// contract Receiver is EmployeeRole {

//     string _job="Receiver";
//     uint _salary = 34;
//     function receiveInventory() public view returns (string memory) {
//         return _job;
//     }
//     function salary() public view returns(uint){
//         return _salary;
//     }

// }
// contract Supplier123 is EmployeeRole{
//       string _job="Receiver";
//     uint _salary = 34;
//     function manageWarehouse() public view returns (string memory) {
//         return _job;
//     }
//     function salary() public view returns(uint){
//         return _salary;
//     }

// }
// contract Employee{
//     string _name;
//     uint _age;
//     function getName() public view returns (string memory){
//         return _name;
//     }
//     function getAge() public view returns (uint){
//         return _age;
//     }
// }

// contract Administrator {
//     event EmployeeRoleCreated(string message, EmployeeRole r1);
//     AccessControl con1 = new AccessControl();
//     event HasRoleResult(bool result);


//     function createEmployeeRole() public returns (EmployeeRole) {
//         EmployeeRole r1 = new Receiver();
//         emit EmployeeRoleCreated("Receiver", r1);

//         return r1;
//     }

//     function addRole(EmployeeRole r1, address account) public {
//         con1.accountAddRole(account, r1);
//     }

//     function myhasRole(address add, EmployeeRole employeeRole)
//         public
//         returns (bool)
//     {
//         bool result = con1.accountHasRole(add, employeeRole);
//         console.log("Result is ", result);
//         emit HasRoleResult(result);
//         return result;
//     }

//     function getAddress() public view returns (address) {
//         return address(this);
//     }
// }

// // contract AccessControl {
// //     AccessControl accesscontrol = new AccessControl();

// //     // an account has many roles
// //     mapping(address => uint256) accountRoleSet;
// //     function getAccessControl() public returns (AccessControl){
// //         return accesscontrol;
// //     }

// //     function addAccountRole(address account, uint256 role) public {
// //         accountRoleSet[account] |= 1 << role;
// //     }

// //     function confirmAccountRole(address account, uint256 role)
// //         public
// //         view
// //         returns (bool)
// //     {
// //         return (accountRoleSet[account] & (1 << role)) != 0;
// //     }
// // }
