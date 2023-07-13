// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;
import "../mEmployeeRole.sol";


//@dev Manager has been abstracted from the EmployeeRole
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
