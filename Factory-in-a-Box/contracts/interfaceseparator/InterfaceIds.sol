//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7;
import "../factory-patterns/mediator/Mediator.sol";
import "../factory-patterns/chainofresponsibility/ChainOfResponsibilityHandler.sol";
import "../factory-patterns/mediator/Role.sol";

library InterfaceIds {
    bytes4 constant MEDIATOR_ID = type(Mediator).interfaceId;
    bytes4 constant CHAIN_RESPONSE = type(ChainOfResponsibilityHandler).interfaceId;
    bytes4 constant ROLE_ID = type(Role).interfaceId;
}