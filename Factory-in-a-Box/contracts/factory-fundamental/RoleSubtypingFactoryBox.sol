//SPDX-License-Identifier: MIT 
pragma solidity >=0.8.7; 

import "./ProductionConfigurator.sol"; 
import "./ProductionController.sol";
import "./MaintenanceAgent.sol";
import "./FactoryBoxRoles.sol";
import "./Cobot.sol";


contract RoleSubtypingFactoryBox  {
    event Logging(string description); 
    function assignmentOfRoles() public payable returns(string[] memory) {
        string[] memory sampleReturn;
        FactoryBoxRoles[] memory factoryboxroles = new FactoryBoxRoles[](10);
        factoryboxroles[0] = FactoryBoxRoles(new ProductionConfigurator()); 
        factoryboxroles[1] = FactoryBoxRoles(new ProductionController()); 
        factoryboxroles[2] = FactoryBoxRoles(new MaintenanceAgent()); 
        factoryboxroles[3] = FactoryBoxRoles(new Cobot());

        if(factoryboxroles[0].getType() == Constants.ClassType.ProductionConfigurator) {
            emit Logging("ProductionConfigurator Role");
            sampleReturn[0] = "ProductionConfigurator";
        }

        if(factoryboxroles[1].getType() == Constants.ClassType.ProductionController) {
            emit Logging("ProductionController Role"); 
            sampleReturn[1] = "ProductionController"; 
        }

        if(factoryboxroles[2].getType() == Constants.ClassType.MaintenanceAgent) {
            emit Logging("MaintenanceAgent Role");
            sampleReturn[2] = "MaintenanceAgent";
        }
        
        if(factoryboxroles[3].getType() == Constants.ClassType.Cobot) {
            emit Logging("Cobot Role");
            sampleReturn[3] = "Cobot";
        }

        return sampleReturn; 
    }
}