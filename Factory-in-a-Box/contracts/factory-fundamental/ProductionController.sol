//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7; 

import "./FactoryBoxRoles.sol";

/// @dev this will check the location of the machinnery
/// @dev The Cell Designer is used to create a layout of the cell using drag-and-drop techniques.
/// @dev it also alleos the user to configure some of the properties of the different equipments that are added to the cell, such as I/O signals and variables.
/// @dev The Sequence Programmer is used to program the behavior of the cell using an icon-based flowchart programming style. 
/// @dev The Production window is used during production to allow the user to start and stop production, as well as monitor the production process - statistics
// and perform maintenance plan.
contract ProductionController is FactoryBoxRoles{
    event Logging(string description);

    constructor() {
        emit Logging("CellConfiguratorController constructor has been called");
    }

    function getType() public pure override returns(Constants.ClassType) {
        return Constants.ClassType.ProductionController;
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