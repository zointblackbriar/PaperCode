//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7; 

import "./Mediator.sol";
import "./RoleGenerator.sol";
import "./ConcreteMediator.sol";

contract Role{
    string public message; 
    address roleSpecification;
    Mediator public mediator;
    ConcreteMediator cMediator;
    uint private nonce;

    constructor(address _roleSpecification, address _mediator) {
        roleSpecification = _roleSpecification;
        mediator = Mediator(_mediator);
    }

    function roleImplementation(address _roleAddress, address _mediator) public {
        cMediator.roleGenerate(_roleAddress, _mediator);

    }

    ///@dev create random bytes32 in Role Generator
    function generateRandomRoleData() public returns (bytes32) {
        nonce++;
        return keccak256(abi.encodePacked(block.timestamp, msg.sender, nonce)); 
    }


}