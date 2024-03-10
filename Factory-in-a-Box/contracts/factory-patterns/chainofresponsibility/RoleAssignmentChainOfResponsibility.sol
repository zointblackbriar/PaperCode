//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7; 

import "../../interfaceseparator/ERC165.sol";
import "../../interfaceseparator/InterfaceIds.sol";
import "../../interfaceseparator/ERC165Query.sol";
import "./ChainOfResponsibilityHandler.sol";
import "./ConcreteHandler1.sol";
import "./ConcreteHandler2.sol";
import "./ConcreteHandler3.sol";

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
        ChainOfResponsibilityHandler sampleConcrete1 = new ConcreteHandler1();
        ChainOfResponsibilityHandler sampleConcrete2 = new ConcreteHandler2();  
        ChainOfResponsibilityHandler sampleConcrete3 = new ConcreteHandler3();

        isChainResponsibilitySuitable = doesContractImplementInterface(
            _chainResponseAddress, _chainOfResponsibility
        );
        require(isChainResponsibilitySuitable, "interface of the chain of responsibility is not correct");

        sampleConcrete1.setNext(sampleConcrete2);
        sampleConcrete2.setNext(sampleConcrete3);

        //Three simulation step
        string memory result;
        for (uint256 i = 0; i < 3; i++) { 
            if (i == 0) {
                result = sampleConcrete1.handle(bytes("Maintenance Task"));
                emit Logging(result);
            } else if(i == 1) {
                result = sampleConcrete1.handle(bytes("Configuration of Production Process"));
                emit Logging(result);
            } else {
                result = sampleConcrete1.handle(bytes("Fault Record on the Transportation"));
                emit Logging(result);
            }

        }

    }

}
