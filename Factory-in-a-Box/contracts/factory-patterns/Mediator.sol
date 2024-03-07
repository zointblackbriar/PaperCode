//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7;
import "../interfaceseparator/ERC165.sol";
import "../interfaceseparator/ERC165Query.sol";
import "./MediatorInterface.sol";
import "../interfaceseparator/InterfaceIds.sol";

/// @title Mediator desing pattern for role operations
contract Mediator is MediatorInterface, ERC165Query{
    mapping(bytes4 => bool) private supportedInterfaces; 
    mapping(string => string) private observerLists;
    bool isObserverSuitable;
    constructor() {
        //Example: Supports ERC165 itself
        supportedInterfaces[0x01ffc9a7] = true; //ERC165
    }

    function supportsInterface(bytes4 interfaceID ) external pure override returns (bool) {
        return interfaceID == this.supportsInterface.selector || // ERC165 Separator
            // interfaceID == this.addRole.selector ^ this.bindRole.selector ^ this.invokeRole.selector ^ this.getRole.selector ; // Mediator.sol
            interfaceID == InterfaceIds.MEDIATOR_ID; //Mediator Pattern
    }

    function addObserver(bytes4 _observerSpecification, address _observer) public {
        require(_observer != address(0), "observer should not be null address. Address should be legitimate");
        // address of the contract and interfaceID
        isObserverSuitable = doesContractImplementInterface(
            _observer, _observerSpecification
        );
        require(isObserverSuitable, "observer should not be");
        // observerLists.push();
    }


    function addRole(bytes32 _roleSpecification, address _roleAddress) public override {
        if (_roleAddress == address(0)) return; 
        //Add role to the role address
        

    }

    function bindRole(bytes32 _roleSpecification) public override {

    }

    function invokeRole(bytes32 _roleSpecification) public override {

    }

    function getRole(bytes32 _roleSpecification) public override {
        
    }

}