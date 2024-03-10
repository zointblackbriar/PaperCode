//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7; 

import "./Mediator.sol";
import "./RoleGenerator.sol";

contract Role{
    string public message; 
    bytes32 roleSpecification;
    // Mediator public mediator;

    constructor(bytes32 _roleSpecification) {
        roleSpecification = _roleSpecification;
    }

}