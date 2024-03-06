//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7; 

contract MediatorForwarder {
    RoleReceiver private _roleReceiver; 

    constructor(address _roleReceiverAddress) {
        _roleReceiver = RoleReceiver(_roleReceiverAddress);
    }

    function forward() external payable {
        // Forward the received Ether to the receiver contract 
        _roleReceiver.receiveCryptoAsset(msg.value); // forwarded role function
    }
}

contract RoleReceiver {
    event Received(address indexed sender, uint256 amount);

    function receiveCryptoAsset(uint256 cryptoValue) external payable { // sample amount taker function
        emit Received(msg.sender, cryptoValue);
    }
}


