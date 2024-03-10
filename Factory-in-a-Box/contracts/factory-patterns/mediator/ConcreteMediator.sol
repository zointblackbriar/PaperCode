//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7; 

import "./Mediator.sol";
import "./Role.sol";
import "./RoleGenerator.sol";

contract ConcreteMediator is Mediator {
    // RoleReceiver private _roleReceiver;
    mapping(bytes32 => Role) public assignedRoles;
    bool public isMediator;
    event Logging(string description);
    string public sampleMessage;
    RoleGenerator rg;

    constructor() {
        sampleMessage = "Concrete Mediator message";
    }

    // implementation of the addRole
    function addRoleConcreteMediator(bytes32 _roleSpecification, address _role) public  {
        require(_role != address(0x0), "address should be different from null value");
        // return "role has been added";
        // isMediatorRole = doesContractImplementInterface(
        //     role, InterfaceIds.MEDIATOR_ID
        // );
        // require(isMediatorRole, "Role should be suitable for Mediator pattern");
        Role role = rg.roleGenerate(_roleSpecification);
        assignedRoles[_roleSpecification] = role;

    }

    //implementation of the bindRole()
    // activation of the mediator address
    function bindRoleConcreteMediator(bytes32 _roleSpecification, address _role) public {
        require(_role != address(0x0), "a role should have an address");
        // require(isMediatorRole, "Mediator has been activated");
        emit Logging("bindRole has been activated");
        Mediator mediator = new Mediator();

    }

    // implementation of the getRole()
    function getRoleConcreteMediator(bytes32 _roleSpecification, address _role) public returns (Role role) {
        emit Logging("getRole has been activated");
        // isMediator = doesContractImplementInterface(_role, InterfaceIds.MEDIATOR_ID);
        // require(isMediatorRole, "Mediator has been activated");
        return assignedRoles[_roleSpecification];
    }      

    function setMediator(address _addressOfMediator) public returns(bool) {
        require(_addressOfMediator != address(0x0), "a address should have an address");
        isMediator = doesContractImplementInterface(
            _addressOfMediator, InterfaceIds.MEDIATOR_ID
        );
        require(isMediator, "Mediator has been activated");
        return true;

    }


}



