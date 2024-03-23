
//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7;
import "./Role.sol";

interface Mediator{

    function bindRole(address _roleAddress) external;

    function unbindRole(bytes32 _roleSpecification) external;

    function getRole(bytes32 _roleSpecification) external returns(Role role); // sendMessage() method invocation in design pattern
}