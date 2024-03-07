//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7; 

import "../interfaceseparator/ERC165.sol";
import "../interfaceseparator/InterfaceIds.sol";
import "../interfaceseparator/ERC165Query.sol";

/// @title Chain Of Responsibility Design Pattern for Role Operations
contract ChainOfResponsibility is ERC165Query{

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


interface ChainOfResponsibilityHandler is ERC165 {
    function setNext(ChainOfResponsibilityHandler _handler) external returns(ChainOfResponsibilityHandler);
    function handle(bytes calldata _request) external returns(string memory);
}

//Abstract Handller contract
abstract contract AbstractHandler is ChainOfResponsibilityHandler {
    ChainOfResponsibilityHandler private nextHandler;

    function setNext(ChainOfResponsibilityHandler _handler) external virtual override returns(ChainOfResponsibilityHandler) {
        nextHandler = _handler;
        return _handler;
    }

    function handle(bytes calldata _request) public virtual override returns(string memory){
        if(nextHandler != ChainOfResponsibilityHandler(address(0))) {
            return nextHandler.handle(_request);
        }
    }

    function supportsInterface(bytes4 interfaceID) external pure override returns (bool) {
        return interfaceID == this.supportsInterface.selector || // ERC165 Separator
            // interfaceID == this.addRole.selector ^ this.bindRole.selector ^ this.invokeRole.selector ^ this.getRole.selector ; // Mediator.sol
            interfaceID == InterfaceIds.CHAIN_RESPONSE; //Mediator Pattern
    }

}

contract ConcreteHandler1 is AbstractHandler {

    event Logging(string description, bytes handlerAddress);
    function handle(bytes calldata _request) public override returns (string memory) {
        // supportsInterface(_request);

        emit Logging("ConcreteHandler1", _request);
        if(keccak256(_request) == keccak256(abi.encodePacked("Sample fruit"))) {
            return "Sample fruit should be taken";
        }
        return super.handle(_request);
    }
}

contract ConcreteHandler2 is AbstractHandler {
    event Logging(string description, bytes handlerAddress);

    function handle(bytes calldata _request) public override returns (string memory ) {
        emit Logging("ConcreteHandler1", _request);
        if (keccak256(_request) == keccak256(abi.encodePacked("sample text"))) {
            return "Sample message: A sample message is prompted";
        }

        return super.handle(_request);
    }
}

contract ConcreteHandler3 is AbstractHandler {
    event Logging(string description, bytes handlerAddress);

    function handle(bytes calldata _request) public override returns (string memory ) {
        emit Logging("ConcreteHandler1", _request);
        if (keccak256(_request) == keccak256(abi.encodePacked("sample text"))) {
            return "Sample message: A sample message is prompted";
        }

        return super.handle(_request);
    }
}