//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7; 
import "./Role.sol";

contract SampleRole2 is Role{ //Role subtyping

    constructor() {
        
    }

    function getRoleName() public returns(string memory) {
        return "SampleRole2";
    }
}