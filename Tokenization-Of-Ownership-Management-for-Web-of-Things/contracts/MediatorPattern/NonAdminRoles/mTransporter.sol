// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;
import "../EmployeeRole.sol";

interface ITransporter {
    function inventoryDelivered(uint256 Asset_id) external;

    function getReceipt(uint256 Asset_id) external;
}

contract Transporter is EmployeeRole {
    constructor() {}

    uint256[] rack_no;
    event ItemShipped(string phase, string message, uint256 id);
    event UpdateStorageReport();
    event DeliverInventory();
    event ItemPacked(uint256 id);
    event InventRecordUpdated(string phase, string message, uint256 id);


    function getContractAddress() public view returns (address) {
        return address(this);
    }

    function shipInventory(uint256 id) public returns (uint256) {
        emit ItemShipped("Shipping", "Item Shipped Asset Id:", id);

        return id;
    }


    function updateInventoryRecord(uint256 id) public  {
        emit InventRecordUpdated(
            "Shipping",
            "Inventory deleted from Inventory Record Asset Id: ",
            id
        );
    }
}
