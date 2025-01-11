//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7; 

import "./Role.sol";
import "./Mediator.sol";

contract ConcreteMediator is Mediator{ // Mediator is an interface
    mapping(address => Role) public assignedRoles;
    bool public isMediator;
    event Logging(string description);

    constructor() {
    }

    function bindRole(address _roleAddress) override public {
        require(_roleAddress != address(0x0), "a role should have an address");
        // require(isMediatorRole, "Mediator has been activated");
        emit Logging("bindRole has been activated");
    }

    function unbindRole(address _roleAddress) override public {
        delete assignedRoles[_roleAddress];
    }


    function getRole(address _roleAddress) public override returns (Role role) {
        emit Logging("getRole has been activated");
        return assignedRoles[_roleAddress];
    } 

}



