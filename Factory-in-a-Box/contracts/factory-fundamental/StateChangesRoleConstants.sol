//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7; 

import "./RoleConstants.sol";

contract StateChangesRoleConstants {
    
    Constants.RoleType public roleState;
    constructor() {
        roleState = Constants.RoleType.Unassigned;
    }


    function roleAssignment() public {
        require(roleState == Constants.RoleType.Unassigned, "RoleType Unassigned in the activation cycle"); // current state
        roleState = Constants.RoleType.ProductionConfigurator; // next state
        require(roleState == Constants.RoleType.ProductionConfigurator, "Production Configurator in the activation cycle"); // current state
        roleState = Constants.RoleType.ProductionController; //next state
        require(roleState == Constants.RoleType.ProductionController, "Production Controller in the activation cycle"); // current state
        roleState = Constants.RoleType.MaintenanceAgent; // next state
        require(roleState == Constants.RoleType.RobotArm, "Robot Arm in the activation cycle"); // next
        roleState = Constants.RoleType.RobotArm;
    }

}