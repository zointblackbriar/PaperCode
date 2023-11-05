//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7; 

import "./FactoryBoxRoles.sol";


contract Cobot is FactoryBoxRoles{
    event Logging(string description);
    mapping(bytes32 => string) cobotCollection;

    constructor() {
        emit Logging("Cobot Role has been activated");
    }

    function getType() public pure override returns(Constants.ClassType) {
        return Constants.ClassType.Cobot;
    }


    function setCobotID(string memory _id, string memory _name) external{
        cobotCollection[getHashValue(_id, _name)] = _name; 
    }

    function getCobotName(string memory _id, string memory _name) public view returns(string memory) {
        return cobotCollection[getHashValue(_id, _name)];
    }


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