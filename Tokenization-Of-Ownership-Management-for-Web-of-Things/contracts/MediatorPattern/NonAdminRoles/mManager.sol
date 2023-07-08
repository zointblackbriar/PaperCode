// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;
import "../EmployeeRole.sol";



contract Manager is EmployeeRole{

        constructor(){
    }

    function job() public pure  returns (string memory){
        string memory job = "Manage Warehouse";
        return job;
    }
    function getContractAddress() public view returns(address) {
        return address(this);
    }
    
}