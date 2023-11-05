//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7; 

import "./FactoryBoxRoles.sol";
import "./Cobot.sol";

/// @dev the background of the Cell Configurator is the need for a visual and intuitive way
// to program and control robotic working cell.

/// @dev CellConfigurator contains pair of robots that cooperate while assembling a cabinet 
contract CellConfigurator is FactoryBoxRoles {
// contract CellConfigurator {
    //Each participant should have unique Id in the network. 
    string public companyName; 
    string  public companyId; 
    bool public isProductionEnviornmentLeased; 
    string public serviceProviderID; //public key of service provider ID
    string public machineID; //public key of machine asset
    
    address owner; 

    modifier onlyOwner() {
        require(msg.sender == owner); 
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function getCompanyName() public view returns(string memory) {
        return companyName; 
    } 

    function getCompanyId() public view returns(string memory) {
        return companyId; 
    }

    function setCompanyName(string memory _companyName) onlyOwner public {
        companyName = _companyName; 
    }

    function setCompanyId(string memory _companyId) onlyOwner public {
        companyId = _companyId;
    }

    function getType() public pure override returns(Constants.ClassType) {
        return Constants.ClassType.CellConfigurator;
    }
}