//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7; 

import "./FactoryBoxRoles.sol";
import "./RobotArm.sol";
import "./MachineOperationConstant.sol";

/// @dev the background of the Cell Configurator is the need for a visual and intuitive way
// to program and control robotic working cell.

/// @title A Role-based Smart Contract Programming for Factory-in-a-Box
/// @author Orçun Oruç
/// @notice Drilling, Slot Milling, Slab Milling, Step Milling, Shaping, and Reaming (@Source: Multi-level decision making in reconfigurable machining systems using fuzzy logic)
/// @dev ProductionConfigurator contains pair of robot arms that cooperate while assembling in a cabinet 
contract ProductionConfigurator is FactoryBoxRoles {
    //Each participant should have unique Id in the network. 
    string public machineID; //public key of machine asset
    // enum MachineOperation {Drilling, SlotMilling, SlabMilling, StepMilling, Shaping, Reaming}

    mapping(string => MachineOperationConstant.MachineOperation) public machineProcessConfiguration;

    struct ProductionConfiguraton {
        uint configID;
        string processDescription;
        uint resourceAllocation; 
        uint timestamp;
    }

    mapping(uint => ProductionConfiguraton) public productionConfigurations;
    uint public latestConfigID;
    
    event ProductionConfigured(uint configID, string processDescription, uint resourceAllocation, uint timestamp);

    address owner; 

    modifier onlyOwner() {
        require(msg.sender == owner); 
        _;
    }

    constructor() {
        owner = msg.sender;
    }


    function roleAssignment() public pure override returns(Constants.ClassType) {
        return Constants.ClassType.ProductionConfigurator;
    }

    function setMachineProcessConfiguration(string memory machineAssetID, MachineOperationConstant.MachineOperation machineOperation) public {
        machineProcessConfiguration[machineAssetID] = machineOperation;
    }

    // Function to get the operation associated with a string name
    function getMachineProcessConfiguration(string memory name) public view returns(MachineOperationConstant.MachineOperation) {
        return machineProcessConfiguration[name];
    }

    function configureProduction(string memory description, uint resourceAllocation) external {
        latestConfigID++;
        productionConfigurations[latestConfigID] = ProductionConfiguraton({
            configID: latestConfigID,
            processDescription: description,
            resourceAllocation: resourceAllocation,
            timestamp: block.timestamp
        });

        emit ProductionConfigured(latestConfigID, description, resourceAllocation, block.timestamp);
    }

    function getConfigurationDetails(uint configId) external view returns(string memory, uint, uint) {
        require(configId > 0 && configId <= latestConfigID, "Invalid configID");
        ProductionConfiguraton storage config = productionConfigurations[configId];
        return (config.processDescription, config.resourceAllocation, config.timestamp);
    }
}