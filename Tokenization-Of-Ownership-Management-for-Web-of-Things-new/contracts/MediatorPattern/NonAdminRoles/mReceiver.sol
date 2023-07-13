pragma solidity ^0.8.7;

import "../mEmployeeRole.sol";
import "../../Resource.sol";

import "hardhat/console.sol";
import "./structure.sol";
interface IReceiver{
    function getRoleName() external view returns (string memory);
    function receiveItems(string memory asset_name, uint256 id) external;
    function updateInventoryRecord(uint256 id) external;
    function generateReciept(
        string memory asset_name,
        uint256 id,
        uint256 tokenUri,
        address verifier,
        address issuer,
        address account
    ) external;
    function updateReciept(
        uint256 asset_id, 
        uint256 resource_id, 
        uint256 tokenUri, 
        address issuer,
        address verifier,
         address account) external;
    function approveAppointment() external;


}
contract Receiver is EmployeeRole, IReceiver {

    SharedStructs.Asset asset;

    string _job = "Receiver";
    uint256 _salary = 34;
    string role_name = "receiver";
    event ReceiptCreated(string message, string asset_name, uint256 id);
    event ItemsReceived(string phase,string message, string asset_name, uint256 id);
    event InventRecordUpdated(string phase,string message, uint256 id);
    event AppointmentApproved(string message);

    function getRoleName() public view override returns (string memory) {
        return role_name;
    }

    function receiveItems(string memory asset_name, uint256 id) public override {
        SharedStructs.Asset memory asset =  SharedStructs.Asset(asset_name, id);
        // asset.asset_name = asset_name;
        //        console.log(asset.name);

        emit ItemsReceived("Receiving","Item Received", asset.name, asset.id);
    }

    function updateInventoryRecord(uint256 id) public override{

        emit InventRecordUpdated("Receiving","Item added to  Inventory Record ", id);
    }

    bool result1;

    function generateReciept(
        string memory asset_name,
        uint256 id,
        uint256 tokenUri,
        address verifier,
        address issuer,
        address account
    ) public override {
        string memory resource_name = "receipt";
        result1 = Verifier(verifier).verify(
            role_name,
            resource_name,
            tokenUri,
            account,
            issuer
        );
        if (result1) {
            Resource receipt = new Resource("Resource");

            emit ReceiptCreated("Receipt Created", asset_name, id);
        } else emit ReceiptCreated("Receipt Not Created", asset_name, id);
    }

    function updateReciept(uint256 asset_id, uint256 resource_id, uint256 tokenUri, address issuer,address verifier, address account) override public {
        string memory resource_name = "receipt";
        result1 = Verifier(verifier).verify(
            role_name,
            resource_name,
            tokenUri,
            account,
            issuer
        );
        if (result1) {
            Resource receipt = new Resource("Resource");

            emit ReceiptCreated("Receipt Created", "receipt", asset_id);
        } else emit ReceiptCreated("Receipt Not Created", "receipt", asset_id);
    }

    function approveAppointment() public override {

        emit AppointmentApproved("Appointment Approved");
    }
}
