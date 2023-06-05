// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;
import "../mEmployeeRole.sol";

interface IAuditor {
    function inspectInventory() external returns (string memory);

    function createInspectionReport() external;

    function updateInspectionReport(uint256 Id) external;

    function deleteInspectionReport() external;

    function getContractAddress()  external  returns (address);
}

contract Auditor  is EmployeeRole{
    constructor() {}

    event ItemInspected(uint256 id);
    event DeleteInspectionReport();
    event CreateInspectionReport(string phase, string message, uint256 id);

    function inspectInventory(uint256 id) public  {
        createInspectionReport(id);
      //  string memory job = "Audit Inventory";
        //return job;
    }

    function createInspectionReport(uint256 id) public {
        emit CreateInspectionReport("Inspection","Asset Inspected Asset id", id);
    }

    function updateInspectionReport(uint256 Id) public {
        emit ItemInspected(Id);
    }

    function deleteInspectionReport() public {
        emit DeleteInspectionReport();
    }

    function getContractAddress() public view returns (address) {
        return address(this);
    }
}
