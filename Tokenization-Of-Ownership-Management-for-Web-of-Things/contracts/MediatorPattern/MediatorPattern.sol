pragma solidity ^0.8.7;
import "@openzeppelin/contracts/utils/introspection/ERC165.sol";
import "hardhat/console.sol";
//import "../NonAdministrativeRoles/Reciever.sol";

import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "../Resource.sol";
import "./EmployeeRole.sol";
import "./AccessControlMediator.sol";

import "../AdministrativeRoles/Issuer.sol";
import "./NonAdminRoles/mReceiver.sol";
import "./NonAdminRoles/mManager.sol";
import "./NonAdminRoles/mPicker.sol";
import "./NonAdminRoles/mSupplier.sol";
import "./NonAdminRoles/mAuditor.sol";
import "./NonAdminRoles/mPicker.sol";
import "./NonAdminRoles/mAuditor.sol";
import "./NonAdminRoles/mTransporter.sol";

// import "hardhat/console.sol";

import "./NonAdminRoles/mPutaway.sol";


contract Administrator {
    address[] Employees;

    event EmployeeCreated(
        string message,
        Employee r1,
        string name,
        uint256 age
    );
    event IssuerCreated(string message, address issuer);
    event VerifierCreated(string message, address verifier);

    AccessControlMediator con1 = new AccessControlMediator();

    event HasRoleResult(bool result);

    event CreateAdminitrativeRoles();
    event CreateIssuer(string message);
    event CreateVerifier(string message);
    event CreateManager(string Name, uint256 Age);
    event CreatePicker(string Name, uint256 Age);
    event CreateSupplier(string Name, uint256 Age);
    event CreateAuditor(string Name, uint256 Age);
    event CreateReceiver(string Name, uint256 Age);
    event CreatePutaway(string Name, uint256 Age);
    event RoleAdded(EmployeeRole ac);
    Manager manager;
    Picker picker;
    Receiver receiver;
    Supplier supplier;
    Auditor auditor;
    Putaway putaway;
    Issuer issuer;
    Verifier verifier;

    function createAdministrativeRoles() public {
        issuer = new Issuer("Token Issuer", "IS");
        if (issuer.getContractAddress() != address(0)) {
            //  emit CreateIssuer("Issuer Created");
            // console.log("Issuer Created");
            emit IssuerCreated("Issuer Created", issuer.getContractAddress());
        }
        // console.log("Issuer in admin", issuer.getContractAddress());

        verifier = new Verifier();
        address verifier_address = verifier.getContractAddress();
        // console.log("verifier address", verifier_address);
        if (verifier_address != address(0)) {
            // emit CreateVerifier(
            //     "Verifier Created"

            // );

            emit VerifierCreated(
                "Verifier Created",
                verifier.getContractAddress()
            );
        }
    }

    function createNonAdministrativeRoles() public {
        Manager manager = new Manager();
        picker = new Picker();

        supplier = new Supplier();

        auditor = new Auditor();

        putaway = new Putaway();

        receiver = new Receiver();
    }

    function createEmployee(string memory name, uint256 age)
        public
        returns (Employee)
    {
        Employee r1 = new Employee(name, age);
        emit EmployeeCreated("Employee Created", r1, name, age);

        return r1;
    }

    function addRole(uint256 r1, Employee account) public {
        EmployeeRole account1 = con1.accountAddRole(account, r1);
        // console.log("Account role", address(account1), r1);
        emit RoleAdded(account1);
    }

    function hasRole(Employee add, EmployeeRole employeeRole)
        public
        returns (bool)
    {
        bool result = con1.accountHasRole(add, employeeRole);
        console.log("Result is ", result);
        emit HasRoleResult(result);
        return result;
    }

    function getAddress() public view returns (address) {
        return address(this);
    }

    function getIssuer() public view returns (uint256) {
        return 1;
    }

    function getVerifier() public view returns (address) {
        return verifier.getContractAddress();
    }

}