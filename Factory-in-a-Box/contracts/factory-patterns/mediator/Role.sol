//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7; 

import "./Mediator.sol";
import "./ConcreteMediator.sol";

interface Role{
    function generateRandomRoleData() external returns (Role);

}