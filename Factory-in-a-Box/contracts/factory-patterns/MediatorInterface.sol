
//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7;
import "../interfaceseparator/ERC165.sol";

interface MediatorInterface is ERC165{

    function addRole(bytes32 _roleSpecification, address _roleAddress) external; 

    function bindRole(bytes32 _roleSpecification) external;

    function invokeRole(bytes32 _roleSpecification) external;

    function getRole(bytes32 _roleSpecification) external;
}