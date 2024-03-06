//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7; 

import "./FactoryBoxRoles.sol";
import "./ProductionConfigurator.sol";
import "./MachineOperationConstant.sol";

// Cobot should be mounted in a container. Do we need to check this? 
// Hierarchical relationship should be implemented

contract RobotArm is FactoryBoxRoles{
    event Logging(string description);
    event PartChecked(uint256 indexed partID, Partstatus status, string description);
    mapping(bytes32 => string) robotArmCollection;

    enum Partstatus {Ok, NeedsMaintenance, NeedsReplacement}

    struct Part {
        Partstatus status;
        string description;
    }

    mapping(uint256 => Part) public parts;

    constructor() {
        emit Logging("Cobot Role has been activated");
    }

    function roleAssignment() public pure override returns(Constants.RoleType) {
        return Constants.RoleType.RobotArm;
    }

    function checkPartRobotArm(uint256 partId, Partstatus newStatus, string memory newDescription) external {
        require(partId > 0, "Invalid part ID");
        parts[partId] = Part(newStatus, newDescription);
        emit PartChecked(partId, newStatus, newDescription);
    }

    function getPartStatus(uint partId) external view returns(Partstatus, string memory) {
        require(partId > 0, "Invalid part ID");
        Part storage part = parts[partId];
        return (part.status, part.description);
    }

    function setRobotArmConfiguration() public{
        ProductionConfigurator productionConfigurator;
        productionConfigurator.setMachineProcessConfiguration("sample key", MachineOperationConstant.MachineOperation.Reaming);
    }

    // HELPER METHOD
    function getHashValue(string memory _id, string memory _text) public pure returns(bytes32) {
        return keccak256(abi.encodePacked(_id, _text));
    }


    //HELPER METHOD to get the slot index of a mapping's value under it is given key
    function getLocationOfMapping(uint mappingSlot, uint key) external pure returns(uint slot) {
        // mappingSlot: the slot that the mapping itself sits -> slot 1
        // slot: the slot that the value will be sitting in, e.g. : m[key] = value -> value will sit in "slot."
        return uint256(keccak256(abi.encode(key, mappingSlot))); //necessary pack for bits
    }
}