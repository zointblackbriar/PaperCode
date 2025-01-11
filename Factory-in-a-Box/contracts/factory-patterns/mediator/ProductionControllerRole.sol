//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7;
import "./RoleImplementor.sol";
import "./ConcreteMediator.sol";

contract ProductionControllerRole {
    event Logging(string description, bytes32 data);

    ConcreteMediator concreteMediator;
    RoleImplementor roleImplementor;

    function roleBasedFunctionInitiate() public {
        bytes32 roleData = roleImplementor.generateRandomRoleData(address(roleImplementor), address(concreteMediator));
        emit Logging("role-based data from RoleImplementor through ConcreteMediator", roleData);
        ProductionControllerRole productionControllerRole;
        concreteMediator.bindRole(address(productionControllerRole));
    }



}