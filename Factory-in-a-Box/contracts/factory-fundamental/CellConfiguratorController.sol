//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7; 

import "./FactoryBoxRoles.sol";

/// @dev this will check the location of the machinnery
contract CellConfiguratorController is FactoryBoxRoles{
    event Logging(string description);

    constructor() {
        emit Logging("CellConfiguratorController constructor has been called");
    }

    function getType() public pure override returns(Constants.ClassType) {
        return Constants.ClassType.CellConfiguratorController;
    }

    // Define a mapping that uses bytes 32 (fixed-size keys) to associate with string values.
    mapping (bytes32 => string) public stringMapping; 

    // Set the location values
    function setLocationValues(string memory key, string memory value) public {
        bytes32 fixedKey = keccak256(abi.encodePacked(key));
        stringMapping[fixedKey] = value;
    }

    // Function to get a string value from the mapping 
    function getLocationValues(string memory key) public view returns (string memory ) {
        bytes32 fixedKey = keccak256(abi.encodePacked(key));
        return stringMapping[fixedKey];
    }

}