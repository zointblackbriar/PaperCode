//SPDX-License-Identifier: MIT 
pragma solidity >=0.8.7; 

import "./RoleConstants.sol";

abstract contract FactoryBoxRoles {
    function getType() public pure virtual returns(Constants.ClassType); 
}
