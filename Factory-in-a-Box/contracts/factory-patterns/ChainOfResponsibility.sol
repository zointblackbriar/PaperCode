//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7; 

import "../interfaceseparator/ERC165.sol";

contract ChainOfResponsibility {
}


interface ChainOfResponsibilityHandler {
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
}

contract ConcreteHandler1 is AbstractHandler {

    event Logging(string description, bytes handlerAddress);
    function handle(bytes calldata _request) public override returns (string memory) {
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


contract Clieht {
    event Logging(string description);

    function testHandlers() external {
        ChainOfResponsibilityHandler sampleConcrete1 = new ConcreteHandler1();
        ChainOfResponsibilityHandler sampleConcrete2 = new ConcreteHandler2();  
        ChainOfResponsibilityHandler sampleConcrete3 = new ConcreteHandler3();

        sampleConcrete1.setNext(sampleConcrete2);
        sampleConcrete2.setNext(sampleConcrete3);

        //Simulate with method invocation
        string memory result;
        for (uint256 i = 0; i < 3; i++) {
            if (i == 0) {
                result = sampleConcrete1.handle(bytes("Sample Sentence 1"));
            } else if(i == 1) {
                result = sampleConcrete1.handle(bytes("Sample Sentence 2"));
            } else {
                result = sampleConcrete1.handle(bytes("Sample Sentence3"));
            }

            // Log the result
            if (bytes(result).length > 0) {
                // Handle the result
            } else {
                // Log the food was left untouched
            }
        }

    }
}
