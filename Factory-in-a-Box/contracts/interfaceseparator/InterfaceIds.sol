//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7;
import "../factory-patterns/MediatorInterface.sol";
import "../factory-patterns/ChainOfResponsibility.sol";

library InterfaceIds {
    bytes4 constant MEDIATOR_ID = type(MediatorInterface).interfaceId;
    bytes4 constant CHAIN_RESPONSE = type(ChainOfResponsibilityHandler).interfaceId;
}