// // pragma solidity ^0.8.7;
// // import "hardhat/console.sol";

// // interface IEmployee{

// //     function addRole(string memory aSpec) external;
// //     function getRole(string memory  aSpec) external returns (EmployeeRole);

// // }

// // contract EmployeeCore is IEmployee{
// //     string _name;
// //     constructor (string memory name){
// //         _name =name;
// //     }
// //    // mapping(string => mapping(EmployeeRole => bool)) accountRoles;
// //    mapping(string => EmployeeRole) accountRoles;

// //    function getName() public returns (string memory ){
// //     return _name;
// //    }

// //     function addRole(string memory aSpec) public override  {
// //         EmployeeRole empRole = new EmployeeRole();

// //         //address account = address(this);

// //         empRole = empRole.createRole(this, aSpec);
// //         //  if (empRole != NULL) {
// //         accountRoles[aSpec] = empRole;
// //         //  }
// //     }

// //     function getRole(string memory aSpec) public override returns (EmployeeRole) {
// //         return   accountRoles[aSpec];
// //     }

// //     function getAddress() public returns (address){
// //     return address(this);
// //     }
// // }

// // contract EmployeeRole {
// //     EmployeeCore public core;

// //     function createRole(EmployeeCore aCore, string memory aSpec)
// //         public
// //         returns (EmployeeRole)
// //     {
// //         EmployeeRole newRole;
// //         newRole.setCore(aCore);
// //         return newRole;
// //     }

// //     function setCore(EmployeeCore aCore) public {
// //         core = aCore;
// //     }

// //     function getRole(string memory aSpec) public {
// //         core.getRole(aSpec);
// //     }

// //     function addRole(string memory aSpec) public {
// //         return core.addRole(aSpec);
// //     }
// //        function getName() public returns (string memory ){
// //     return core.getName();
// //    }
// // }

// // contract Transporter is EmployeeRole {
// //     function job() public {
// //         console.log("Transports");
// //     }
// // }

// // contract Admin {
// //         EmployeeCore aEmployee;

// //     event EmployeeCreated(string name , EmployeeCore emp);

// //     function createEmployee(string memory name) public  returns (IEmployee){
// //       aEmployee = new EmployeeCore(name);
// //      console.log("Employee Created", aEmployee.getName());
// //      emit EmployeeCreated(aEmployee.getName(), aEmployee);
// //         return aEmployee;
// //     }
// //     function getEmployeeObject() public view returns (EmployeeCore) {

// //         return aEmployee;
// //     }

// //     function adminaddRole(string memory aSpec,address emp)public returns (EmployeeRole){
// //          EmployeeCore(emp).addRole(aSpec);
// //         // Transporter transporter;
// //        // transporter = Transporter (address((EmployeeCore(emp).getRole("Transporter"))));

// //        // console.log(transporter.getName());
// //     }
// //     function admin() public {

// //         IEmployee  aEmployee = new EmployeeCore("Tim");
// //         Transporter  transporter;

// //         aEmployee.addRole("Transporter");
// //         transporter = Transporter (address((aEmployee.getRole("Transporter"))));

// //         console.log(transporter.getName());
// //        // aBorrower.job();
// //        //transporter.job();

// //     }
// // }

// pragma solidity ^0.8.7;
// import "hardhat/console.sol";

// interface IEmployee {
//     function addRole(string memory aSpec) external returns (EmployeeRole);

//     function getRole(string memory aSpec) external returns (EmployeeRole);
//     //function hasRole(string memory aSpec) external returns (bool);
// }

// contract EmployeeCore is IEmployee {
//     string _name;
//     string role_exists = "false";

//     constructor(string memory name) {
//         _name = name;
//     }

//     // mapping(string => mapping(EmployeeRole => bool)) accountRoles;
//     mapping(string => EmployeeRole) accountRoles;

//     function getName() public view returns (string memory) {
//         return _name;
//     }
//         function hasRole() public view returns (string memory) {
//         return _name;
//     }

//     EmployeeRole temp = new EmployeeRole();

//     function addRole(string memory aSpec)
//         public
//         override
//         returns (EmployeeRole)
//     {
//         EmployeeRole empRole = new Transporter();

//         //address account = address(this);

//         empRole = empRole.createRole(this, aSpec);
//         //  if (empRole != NULL) {
//         accountRoles[aSpec] = empRole;
//         //  }
//         return empRole;
//     }

//     function getRole(string memory aSpec)
//         public
//         override
//         returns (EmployeeRole)
//     {
//         return accountRoles[aSpec];
//     }

//     // function hasRole(string memory aSpec) public view returns (string memory) {
//     //     if (address(accountRoles[aSpec]) != address(0)) {
//     //         //return aSpec;
//     //     }
//     //     return aSpec;
//     // }

//     function getAddress() public returns (address) {
//         return address(this);
//     }

//     function removeRole(string memory aSpec) public {
//         delete accountRoles[aSpec];
//         // accountRoles[aSpec] =address(0);
//     }
// }

// contract EmployeeRole {
//     EmployeeCore public core;

//     function createRole(EmployeeCore aCore, string memory aSpec)
//         public
//         returns (EmployeeRole)
//     {
//         //EmployeeRole newRole = new EmployeeRole();
//         setCore(aCore);
//         return this;
//     }

//     function setCore(EmployeeCore aCore) public {
//         core = aCore;
//     }

//     function hasRole() public view returns (string memory) {
//         core.hasRole();
//     }

//     function getRole(string memory aSpec) public {
//         core.getRole(aSpec);
//     }

//     function addRole(string memory aSpec) public returns (EmployeeRole) {
//         return core.addRole(aSpec);
//     }

//     function getName() external view returns (string memory) {
//         return core.getName();
//     }

//     function abc() public view returns (string memory) {
//         return "abc";
//     }
// }

// contract Transporter is EmployeeRole {
//     string task = "Transports goods";

//     function myjob() public pure returns (string memory) {
//         return "transports goos to the warehouse customers";
//     }

//     function vvv() public view returns (uint256) {
//         return 0;
//     }
// }

// contract Admin {
//     EmployeeCore aEmployee;
//     Transporter transporter;

//     event EmployeeCreated(string name, EmployeeCore emp);

//     function createEmployee(string memory name) public returns (IEmployee) {
//         aEmployee = new EmployeeCore(name);
//         console.log("Employee Created", aEmployee.getName());
//         emit EmployeeCreated(aEmployee.getName(), aEmployee);
//         return aEmployee;
//     }

//     function getEmployeeObject() public view returns (EmployeeCore) {
//         return aEmployee;
//     }

//     function getEmmployeeRoleObject() public view returns (EmployeeRole) {
//         return transporter;
//     }

//     function adminaddRole(string memory aSpec, address emp)
//         public
//         returns (EmployeeRole)
//     {
//         transporter = new Transporter();
//         EmployeeCore(emp).addRole(aSpec);
//         transporter = Transporter(
//             address((EmployeeCore(emp).addRole("Transporter")))
//         );
//         console.log(transporter.myjob());

//         console.log(address(transporter));
//     }

//     function funcall(address a) public {
//         (bool b, ) = a.call{value: 1}("job()");
//         console.log(b);
//     }

//     function abc(address a) public {}

//     function admin() public {
//         IEmployee aEmployee = new EmployeeCore("Tim");
//         Transporter transporter;

//         aEmployee.addRole("Transporter");
//         transporter = Transporter(address((aEmployee.getRole("Transporter"))));

//         console.log(transporter.getName());
//         // aBorrower.job();
//         //transporter.job();
//     }
// }
