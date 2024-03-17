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

    // bytes4 internal constant _INTERFACE_ID_ERC165 = InterfaceIds.ERC165_ID;
    // bytes4 internal constant _INTERFACE_ID_CHAIN_OF_RESPONSIBILITY = bytes4(keccak256("ChainOfResponsibilityHandler(uint256)"));
    bool public isChainResponsibilitySuitable;
    event Logging(string description);

    ChainOfResponsibilityHandler public handler;
    
    constructor(ChainOfResponsibilityHandler _handler) {
        handler = _handler;
    }


    function testHandlers(address _chainResponseAddress, bytes4 _chainOfResponsibility) public {
        ChainOfResponsibilityHandler superConcreteRole = new SuperRole();
        ChainOfResponsibilityHandler basicConcreteRole = new BasicRole();  

        isChainResponsibilitySuitable = doesContractImplementInterface(
            _chainResponseAddress, _chainOfResponsibility
        );
        require(isChainResponsibilitySuitable, "interface of the chain of responsibility is not correct");

        basicConcreteRole.setNext(superConcreteRole);
        // basicConcreteRole.setNext(roleSubtyping);

        //Three simulation step
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
