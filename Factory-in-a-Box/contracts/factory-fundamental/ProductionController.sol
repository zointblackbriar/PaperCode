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

    enum QualityStatus {Pending, Approved, Rejected}

    struct ProductionProcess {
        uint256 processId; 
        string description; 
        QualityStatus qualityStatus;
        uint timestamp;
    }

    mapping(uint => ProductionProcess) public productionProcess;
    uint public latestProcessId;


    event ProcessStarted(uint processId, string description, uint timestamp);
    event QualityChecked(uint processId, QualityStatus qualityStatus, uint timestamp);

    constructor() {
        emit Logging("productionConfigurator constructor has been called");
    }

    function roleAssignment() public pure override returns(Constants.RoleType) {
        return Constants.RoleType.ProductionController;
    }

    function startProductionProcess(string memory description) external {
        latestProcessId++;
        productionProcess[latestProcessId] = ProductionProcess({
            processId: latestProcessId,
            description: description,
            qualityStatus: QualityStatus.Pending,
            timestamp: block.timestamp
        });

        emit ProcessStarted(latestProcessId, description, block.timestamp);
    }

    function checkProductionQuality(uint256 processId, QualityStatus newStatus) external {
        require(processId > 0 && processId <= latestProcessId, "Invalid processId");
        ProductionProcess storage process = productionProcess[processId];
        require(process.qualityStatus == QualityStatus.Pending, "Quality check should be done");
        process.qualityStatus = newStatus;
        emit QualityChecked(processId, process.qualityStatus, block.timestamp);
    }

    function getProcessDetails(uint processId) external view returns (string memory, QualityStatus, uint) {
        require(processId > 0 && processId <= latestProcessId, "Invalid processId");
        ProductionProcess storage process = productionProcess[processId]; // Write the process value to the blockchain network
        return (process.description, process.qualityStatus, process.timestamp);
    }

}