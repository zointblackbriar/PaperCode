//SPDX-License-Identifier: MIT 
pragma solidity >=0.8.7; 

import "./RoleConstants.sol";


/// @title assignment of the factory roles - Constants have been used for assignment of role types
abstract contract FactoryBoxRoles {
    function roleAssignment() public pure virtual returns(Constants.RoleType); 
}
