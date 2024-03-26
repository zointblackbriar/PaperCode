
//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7;
import "./Role.sol";

interface Mediator{

    function bindRole(address _roleAddress) external;

    function unbindRole(address _roleAddress) external;

    function getRole(address _roleAddress) external returns(Role role); // sendMessage() method invocation in design pattern
}