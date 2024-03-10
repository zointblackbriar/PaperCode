//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7;
import "../../interfaceseparator/ERC165.sol";
import "../../interfaceseparator/ERC165Query.sol";
import "./MediatorInterface.sol";
import "../../interfaceseparator/InterfaceIds.sol";
import "./ConcreteMediator.sol";

/// @title Mediator desing pattern for role operations
contract Mediator is MediatorInterface, ERC165Query{
    bool public isMediatorRole;
    ConcreteMediator concreteMediator;
    ConcreteMediator public mediatorCore;

    bool isObserverSuitable;
    constructor() {
    }

    function supportsInterface(bytes4 interfaceID ) external pure override returns (bool) {
        return interfaceID == this.supportsInterface.selector || // ERC165 Separator
            // interfaceID == this.addRole.selector ^ this.bindRole.selector ^ this.invokeRole.selector ^ this.getRole.selector ; // Mediator.sol
            interfaceID == InterfaceIds.MEDIATOR_ID; //Mediator Pattern
    }

    function bindRole(bytes32 _roleSpecification, address _roleAddress) public override {
        concreteMediator.bindRole(_roleSpecification, _roleAddress);
    }

    function unbindRole(bytes32 _roleSpecification, address _roleAddress) public override {
        concreteMediator.unbindRole(_roleSpecification, _roleAddress);
    }

    function getRole(bytes32 _roleSpecification, address _roleAddress) public override {
        concreteMediator.getRole(_roleSpecification, _roleAddress);
    }

    modifier onlyActivatedMediator() {
        require(address(mediatorCore) != address(0x0), "This function requires the Mediator to set."); 
        require(mediatorCore.setMediator(address(mediatorCore)), "This function requires the Mediator to set.");
        _;
    }

}