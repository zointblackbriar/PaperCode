
//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7;
// import "../../interfaceseparator/ERC165.sol";
import "./Role.sol";

interface Mediator{

    function bindRole(bytes32 _roleSpecification, address _roleAddress) external;

    function unbindRole(bytes32 _roleSpecification) external;

    function getRole(bytes32 _roleSpecification) external returns(Role role);
}