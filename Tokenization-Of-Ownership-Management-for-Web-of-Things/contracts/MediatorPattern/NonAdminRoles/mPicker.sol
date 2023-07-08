// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;
import "../../AdministrativeRoles/Issuer.sol";
import "../../AdministrativeRoles/Verifier.sol";
import "../EmployeeRole.sol";

interface IPicker {
    function pickInventory(uint256 Asset_id) external returns (string memory);

    function getStorageLocation() external returns (uint256);

    function updateStorageReport(
        uint256 Asset_id,
        Issuer issuer,
        Verifier verifier
    ) external;

    function packInventory(uint256 Asset_id) external;

    function inventoryDelivered(uint256 Asset_id) external;

    function updateInventoryRecord(
        uint256 id,
        Issuer issuer,
        Verifier verifier
    ) external;
}

contract Picker is EmployeeRole {
    constructor() {}

    uint256 rack_no= 328;
    event UpdateStorageReport(string phase, string message , uint256 id);
    event DeliverInventory();
    event ItemPacked(string phase, string message,uint256 id);
    event UpdateInventoryRecord(string phase, uint256 id);
    event OrderReceived(string phase, string message, uint256 id);
    event StorageLocation(string phase, string message, uint256 id,uint256 rack_no);

    function pickInventory() public pure returns (string memory) {
        string memory job = "Pick Inventory";
        return job;
    }

    function getContractAddress() public view returns (address) {
        return address(this);
    }

    // function getStorageLocation(uint256 id) public returns (uint256) {
    //     emit StorageLocation("Storage","Storage location for", rack_no[id]);

    //     return rack_no[id];
    // }

    function updateStorageReport(uint256 id) public {
        emit UpdateStorageReport("Picking","Storage Report Update: Delete Asset Id: ", id);
    }

    function inventoryDelivered(uint256 id) public {
        emit DeliverInventory();
    }

    function packInventory(uint256 id) public {
        emit ItemPacked("Packing","Inventory Packed Asset Id :",id);
    }

    function updateInventoryRecord(uint256 id) public {
        emit UpdateInventoryRecord("Picking",id);
    }

    function receiveOrder(uint256 id) public {
        emit OrderReceived("Storage","Order Received for Asset Id: ", id);
    }

        function getStorageLoc(uint256 id) public {
        emit StorageLocation("Picking","Storage Location ",id ,rack_no +id);
    }
}
