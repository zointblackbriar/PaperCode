//SPDX-License-Identifier: MIT 
pragma solidity >=0.8.7; 

contract MediatorPattern {
    // A mapping of object addresses to object instances. 
    mapping(address => address) public objects; 

    //register objects with the MediatorPattern
    function register(address _objectAddress) public {
        objects[_objectAddress] = _objectAddress;
    }

    // A function that allows objects to send messages to each other through the MediatorPattern
    function sendMessage(address _recipientAddress, string calldata _message) public {
        // Check if the recipient object is registered with the MediatorPattern
        require(objects[_recipientAddress] != address(0), "The recipient address is not registered with the MediatorPattern");

        // Send the message to the recipient object.
        (bool success,) = objects[_recipientAddress].call(abi.encodeWithSignature("receiveMessage(string)", _message));

        // Check if the message was sent successfully.
        require(success, "Failed to send message to recipient object.");

    }
}

contract Object1 {

    // The Mediator object.
    // MediatorPattern public mediator;

    // constructor(MediatorPattern _mediator) {
    //     mediator = _mediator;
    // }

    // A function that allows the object to receive messages from the Mediator.
    function receiveMessage(string calldata message) public pure returns(string memory){
        // Process the message.
        return message;
    }
}

contract Object2 {

    // The Mediator object.
    MediatorPattern public mediator;

    constructor(MediatorPattern _mediator) {
        mediator = _mediator;
    }

    // A function that allows the object to send messages to the Mediator.
    function sendMessage(address recipientAddress, string calldata message) public {
        mediator.sendMessage(recipientAddress, message);
    }
}

