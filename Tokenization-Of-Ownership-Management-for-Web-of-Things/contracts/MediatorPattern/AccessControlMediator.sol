//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./EmployeeRole.sol";
import "./NonAdminRoles/mReceiver.sol";
import "./NonAdminRoles/mSupplier.sol";
import "./NonAdminRoles/mPutaway.sol";
import "./NonAdminRoles/mPicker.sol";
import "./NonAdminRoles/mTransporter.sol";
import "./NonAdminRoles/mAuditor.sol";
import "./NonAdminRoles/mManager.sol";

// important contract
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
