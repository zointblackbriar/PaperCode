//SPDX-License-Identifier: MIT 
pragma solidity >=0.8.7; 

import "./factory-fundamental/CellConfigurator.sol"; 
import "./factory-fundamental/CellConfiguratorController.sol";
import "./factory-fundamental/CellMaintenanceAgent.sol";
// import "./FactoryBoxRoles.sol";

import "./RoleLibrary.sol";

contract RoleSubtypingFactoryBox  {
    event Logging(string description); 
    function assignmentOfRoles() public payable returns(string[] memory) {
        string[] memory sampleReturn;
        FactoryBoxRoles[] memory factoryboxroles = new FactoryBoxRoles[](3);
        factoryboxroles[0] = new CellConfigurator(12); 
        factoryboxroles[1] = new CellConfiguratorController(); 
        factoryboxroles[2] = new CellMaintenanceAgent(); 

        if(factoryboxroles[0].getType() == Constants.ClassType.CellConfigurator) {
            emit Logging("CellConfiguratorRole");
            sampleReturn[0] = "CellConfiguratorRole";
        }

        if(factoryboxroles[1].getType() == Constants.ClassType.CellConfiguratorController) {
            emit Logging("CellConfiguratorControllerRole"); 
            sampleReturn[1] = "CellConfiguratorControllerRole"; 
        }

        if(factoryboxroles[2].getType() == Constants.ClassType.CellMaintenanceAgent) {
            emit Logging("CellMaintenanceAgentRole");
            sampleReturn[2] = "CellMaintenanceAgentRole";
        }

        return sampleReturn; 
    }
}