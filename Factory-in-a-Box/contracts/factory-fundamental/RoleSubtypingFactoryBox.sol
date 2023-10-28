//SPDX-License-Identifier: MIT 
pragma solidity >=0.8.7; 

import "./CellConfigurator.sol"; 
import "./CellConfiguratorController.sol";
import "./CellMaintenanceAgent.sol";
import "./FactoryBoxRoles.sol";


contract RoleSubtypingFactoryBox  {
    event Logging(string description); 
    function assignmentOfRoles() public payable returns(string[] memory) {
        string[] memory sampleReturn;
        FactoryBoxRoles[] memory factoryboxroles = new FactoryBoxRoles[](3);
        factoryboxroles[0] = FactoryBoxRoles(new CellConfigurator(12)); 
        factoryboxroles[1] = FactoryBoxRoles(new CellConfiguratorController()); 
        factoryboxroles[2] = FactoryBoxRoles(new CellMaintenanceAgent()); 

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