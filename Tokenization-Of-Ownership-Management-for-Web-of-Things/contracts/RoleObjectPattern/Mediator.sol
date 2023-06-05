// // // pragma solidity ^0.8.7;
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
// //       address[] carAssets;


// //    function getName() public returns (string memory ){
// //     return _name;
// //    }
// //         EmployeeRole empRole11 =new EmployeeRole();

// //     function addRole(string memory aSpec) public override  {
// //         EmployeeRole empRole =new EmployeeRole();
// //         //address account = address(this);
// //       address a = address(new Transporter());            
// //       carAssets.push(a);   
// //     //  a.job();
// //         empRole = empRole11.createRole(this, aSpec);
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
// //     function abc() public{

// //     }

// //     function createRole(EmployeeCore aCore, string memory aSpec)
// //         public
// //         returns (EmployeeRole)
// //     {
// //         EmployeeRole newRole = new EmployeeRole();
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

// contract Mediator {
//  address [] public otokenAddress;

// function createNewRole(address _asset, address _collateral, address _strikePrice, uint256 _expiry ) public returns (address) {
//      address otoken = address (new Receiver(_asset, _collateral, _expiry, 
//      _strikePrice));
//      otokenAddress.push(otoken);
//          //    otoken.call{gas: 50000}(abi.encodeWithSignature("Job()"));

//      return otoken;
// }
// }


// contract Receiver {
//   address public asset;
//   address public collateral;
//   address public strikePrice;
//   uint256 public expiry;

//   constructor(address _asset, address _collateral, uint256 
//   _expiry, address _strikePrice ) {
//        asset = _asset;
//        collateral = _collateral;
//        strikePrice = _strikePrice;
//        expiry = _expiry;
//   }
//   function Job() public {

//   }}