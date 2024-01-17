//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7; 

import "./FactoryBoxRoles.sol";

contract MaintenanceAgent is FactoryBoxRoles{
    event Logging(string description, string problemDefinition); 

    constructor() {
        emit Logging("CellMaintenanceAgent constructor has been called", "");
    }

    function assignLogging(string memory _description, string memory _problemDefinition) public {
        emit Logging(_description, _problemDefinition);
    }

    function roleAssignment() public pure override returns(Constants.ClassType) {
        return Constants.ClassType.MaintenanceAgent;
    }

}