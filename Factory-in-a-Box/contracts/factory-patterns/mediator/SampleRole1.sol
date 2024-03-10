//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7; 
import "./Role.sol";

contract SampleRole1 is Role{ // Role Subtyping


    constructor() {

    }

    function getRoleName() public returns (string memory) {
        return "SampleRole1";
    }
}