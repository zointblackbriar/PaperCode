//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7; 

import "../../interfaceseparator/ERC165.sol";
import "../../interfaceseparator/InterfaceIds.sol";
import "../../interfaceseparator/ERC165Query.sol";
import "./ChainOfResponsibilityHandler.sol";
import "./BasicRole.sol";
import "./SuperRole.sol";

/// @title Chain Of Responsibility Design Pattern for Role Operations
contract RoleAssignmentChainOfResponsibility is ERC165Query{

    event Logging(string description);

    constructor() {
    }


    function testHandlers() public {
        ChainOfResponsibilityHandler superConcreteRole = new SuperRole();
        ChainOfResponsibilityHandler basicConcreteRole = new BasicRole();  

        basicConcreteRole.setNext(superConcreteRole);

        //Three simulation steps
        string memory result;
        for (uint256 i = 0; i < 3; i++) { 
            if (i == 0) {
                result = superConcreteRole.handle(bytes("Maintenance Task"));
                emit Logging(result);
            } else if(i == 1) {
                result = basicConcreteRole.handle(bytes("Configuration of Production Process"));
                emit Logging(result);
            } else {
                // result = roleSubtyping.handle(bytes("Fault Record on the Transportation"));
                emit Logging("Role subtyping has no handle function. It can be subtyped");
            }

        }

    }

}
