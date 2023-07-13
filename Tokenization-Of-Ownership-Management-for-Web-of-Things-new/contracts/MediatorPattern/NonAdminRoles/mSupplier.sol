// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;
import "../../Resource.sol";
import "../mEmployeeRole.sol";
import "../MediatorPattern.sol";
import "../../AdministrativeRoles/Issuer.sol";

import "hardhat/console.sol";

contract Supplier is EmployeeRole {
    string role_name = "supplier";
    event AppointmentCreated(string name);

    constructor() {}

    function manageSupplies() public pure returns (string memory) {
        string memory job = "Manage Supplies";
        return job;
    }

    function getContractAddress() public view returns (address) {
        return address(this);
    }

    bool result1 = false;

    function getresult() public view returns (bool) {
        return result1;
    }

    function createAppointment(
        uint256 tokenUri,
        string memory resource_name,
        address verifier,
        address issuer,
        address account
    ) public {
        // console.log("resource created");
        Supplier s1;
        // console.log("message sender", msg.sender);
        // bool isnft_owner = Issuer(issuer).isNFTOwner(tokenUri, account);
        // console.log("NFT Owner Supplier", isnft_owner);
        // console.log("Issuer Address",Issuer(issuer).getContractAddress());

        //console.log("has role",ac.accountHasRoleObject(msg.sender));

        // Resource appointment = new Resource();
        // console.log(msg.sender, " requests to create resource");
        // result1 = appointment.createResource(
        //     "appointment",
        //     role_name,
        //     tokenUri,
        //     verifier,
        //     issuer,
        //     account
        // );
        // if (result1) emit AppointmentCreated("Appointment Created");
        // else emit AppointmentCreated("Appointment Not Created");

        result1 = Verifier(verifier).verify(
            role_name,
            resource_name,
            tokenUri,
            account,
            issuer
        );
        if (result1) {
            emit AppointmentCreated("Appointment Created");
            Resource appointment = new Resource("Resource");
        } else emit AppointmentCreated("Appointment Not Created");
    }
}
