//SPDX-License-Identifier: MIT 

pragma solidity >=0.8.7; 

import "./Role.sol";
import "./Mediator.sol";

interface RoleGenerator {
    function roleGenerate(address _roleAddress, address _mediator) external returns(Role);
}