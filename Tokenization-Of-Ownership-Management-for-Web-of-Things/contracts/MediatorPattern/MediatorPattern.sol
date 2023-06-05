pragma solidity ^0.8.7;
import "@openzeppelin/contracts/utils/introspection/ERC165.sol";
import "hardhat/console.sol";
//import "../NonAdministrativeRoles/Reciever.sol";

import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "../Resource.sol";
import "./mEmployeeRole.sol";

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


contract AccessControlMediator {
    event RoleCreated(EmployeeRole r1);
    event Logging(string description);
    // an account has many roles
    //  mapping(Employee => mapping(EmployeeRole => bool)) accountRoles;
    mapping(Employee => EmployeeRole) accountRoles;
    address[] account_roles_array;

    constructor() {}

    function accountAddRole(Employee account, uint256 role)
        public
        returns (EmployeeRole)
    {
        EmployeeRole empployee_role;

        if (role == 0) {
            //  console.log("In role 0");
            empployee_role = new Receiver();
            // console.log("Receiver Role added to employee ");
            emit Logging("Receiver Role added to employee");

            empployee_role.setName("Reciever");
        } else if (role == 1) {
            empployee_role = new Supplier();
            empployee_role.setName("Supplier");
            // console.log("Supplier Role added to employee ");
            emit Logging("Supplier Role added to employee");

        } else if (role == 2) {
            empployee_role = new Putaway();
            empployee_role.setName("Putaway");
            // console.log("Putaway Role added to employee ");
            emit Logging("Putaway Role added to employee");

        } else if (role == 3) {
            empployee_role = new Picker();
            empployee_role.setName("Picker");
            // console.log("Picker Role added to employee ");
            emit Logging("Picker Role added to employee");


        } else if (role == 4) {
             empployee_role = new Transporter();
            empployee_role.setName("Transporter");
            // console.log("Transporter Role added to employee ");
            emit Logging("Transporter Role added to employee");

        } else if (
            role == 5
        ) {
             empployee_role = new Auditor();
            empployee_role.setName("Auditor");
            // console.log("Inspector Role added to employee ");
            emit Logging("Inspector Role added to employee");

        } else if (role == 6) {

            empployee_role = new Manager();
            empployee_role.setName("Manager");
            // console.log("Manager Role added to employee");
            emit Logging("Manager Role added to employee");

        }
        //console.log("Account", account);
        //console.log("Role", address(employeeRole));

        accountRoles[account] = empployee_role;
        account_roles_array.push() = address(empployee_role);
        emit RoleCreated(empployee_role);
        return empployee_role;
    }

    function accountHasRole(Employee account, EmployeeRole employeeRole)
        public
        view
        returns (bool)
    {
        if (accountRoles[account] == employeeRole) {
            return true;
        } else {
            return false;
        }
    }

    function accountHasRoleObject(address account) public returns (bool) {
        for (uint256 i = 0; i < account_roles_array.length; i++) {
            if (
                (account_roles_array[i] == account) &&
                (
                    compareStringsbyBytes(
                        (EmployeeRole(account_roles_array[i])).getName(),
                        EmployeeRole(account).getName()
                    )
                )
            ) {
                // console.log("INNNN TRUE");
                emit Logging("INNNN TRUE");
                return true;
            }
        }
        return false;
    }

    function accountRemoveRole(Employee account, EmployeeRole employeeRole)
        public
    {
        accountRoles[account] = EmployeeRole(address(0));
    }


    function getRole(Employee account) public returns (EmployeeRole) {
        return accountRoles[account];
    }

    function compareStringsbyBytes(string memory s1, string memory s2)
        public
        pure
        returns (bool)
    {
        return
            keccak256(abi.encodePacked(s1)) == keccak256(abi.encodePacked(s2));
    }
}

contract Manager888 is EmployeeRole {
    string _job = "Receiver";
    uint256 _salary = 34;

    function manageWarehouse() public view returns (string memory) {
        return _job;
    }

    function salary() public view returns (uint256) {
        return _salary;
    }
}

contract Employee {
    string _name;
    uint256 _age;

    constructor(string memory name, uint256 age) {
        _name = name;
        _age = age;
    }

    function getName() public view returns (string memory) {
        return _name;
    }

    function getAge() public view returns (uint256) {
        return _age;
    }
}

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