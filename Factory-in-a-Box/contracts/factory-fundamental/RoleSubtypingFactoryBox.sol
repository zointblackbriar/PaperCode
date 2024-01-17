//SPDX-License-Identifier: MIT 
pragma solidity >=0.8.7; 

import "./ProductionConfigurator.sol"; 
import "./ProductionController.sol";
import "./MaintenanceAgent.sol";
import "./FactoryBoxRoles.sol";
import "./RobotArm.sol";

contract RoleSubtypingFactoryBox  {
    event Logging(string description); 
    function assignmentOfRoles() public payable returns(string[] memory) {
        string[] memory sampleReturn;
        FactoryBoxRoles[] memory factoryboxroles = new FactoryBoxRoles[](10);
        factoryboxroles[0] = FactoryBoxRoles(new ProductionConfigurator()); 
        factoryboxroles[1] = FactoryBoxRoles(new ProductionController()); 
        factoryboxroles[2] = FactoryBoxRoles(new MaintenanceAgent()); 
        factoryboxroles[3] = FactoryBoxRoles(new RobotArm());

        if(factoryboxroles[0].roleAssignment() == Constants.ClassType.ProductionConfigurator) {
            emit Logging("ProductionConfigurator Role");
            sampleReturn[0] = "ProductionConfigurator";
        }

        if(factoryboxroles[1].roleAssignment() == Constants.ClassType.ProductionController) {
            emit Logging("ProductionController Role"); 
            sampleReturn[1] = "ProductionController"; 
        }

        if(factoryboxroles[2].roleAssignment() == Constants.ClassType.MaintenanceAgent) {
            emit Logging("MaintenanceAgent Role");
            sampleReturn[2] = "MaintenanceAgent";
        }
        
        if(factoryboxroles[3].roleAssignment() == Constants.ClassType.RobotArm) {
            emit Logging("RobotArm Role");
            sampleReturn[3] = "RobotArm";
        }

        return sampleReturn; 
    }
}