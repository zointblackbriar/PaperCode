// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;
import "./mReceiver.sol";
import "../mEmployeeRole.sol";

interface IPutaway {
    function putawayInventory(uint256 AssetId, Verifier verifier,Issuer issuer) external returns (string memory);
    function getStorageLocation() external returns (uint256);
    function getContractAddress() external returns (address);
    function addItemStorage(uint256 AssetId, Verifier verifier,Issuer issuer) external;
    function updateStorageReport(uint256 AssetId, Verifier verifier,Issuer issuer) external returns (uint256);
}

contract Putaway is EmployeeRole{
    uint256 rack_no=328;
    event ItemStored(string phase, string message,uint256 id, uint256 rack_no);
    event StorageReportUpdated(string phase, string message,uint256 id);
    event StorageLocation(string phase, string message, uint256 rack_no);

    constructor() {}

    function putawayInventory() public pure returns (string memory) {
        string memory job = "Putaway Inventory";
        return job;
    }

    function getContractAddress() public view returns (address) {
        return address(this);
    }

    function getStorageLocation(uint256 id) public returns (uint256) {
              

        console.log("Putway :: ","Request Storage Location for Asset Id: ", id);
        emit StorageLocation("Putaway","Free Rack No. ",rack_no+id);
        return rack_no;
    }

    function addItemStorage(uint256 id) public {

        emit ItemStored("Storage","Asset Stored Asset id:",id, rack_no+id);
    }

    function updateStorageReport(uint256 id) public returns (uint256) {
        emit StorageReportUpdated("Putaway", "Storage Report Update: Asset Added Asset id ",id);
    }
}
