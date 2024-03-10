//SDPX-License-Identifier: MIT 

pragma solidity >=0.8.7; 

import "./Role.sol";

interface RoleGenerator {
    function roleGenerate(bytes32 _roleSpecification) external returns(Role);
}