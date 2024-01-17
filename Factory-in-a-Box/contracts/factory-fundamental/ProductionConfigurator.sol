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
    string public companyName; 
    string  public companyId; 
    bool public isProductionEnviornmentLeased; 
    string public serviceProviderID; //public key of service provider ID
    string public machineID; //public key of machine asset
    // enum MachineOperation {Drilling, SlotMilling, SlabMilling, StepMilling, Shaping, Reaming}

    mapping(string => MachineOperationConstant.MachineOperation) public machineProcessConfiguration;
    
    address owner; 

    modifier onlyOwner() {
        require(msg.sender == owner); 
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function getCompanyName() public view returns(string memory) {
        return companyName; 
    } 

    function getCompanyId() public view returns(string memory) {
        return companyId; 
    }

    function setCompanyName(string memory _companyName) onlyOwner public {
        companyName = _companyName; 
    }

    function setCompanyId(string memory _companyId) onlyOwner public {
        companyId = _companyId;
    }

    function roleAssignment() public pure override returns(Constants.ClassType) {
        return Constants.ClassType.ProductionConfigurator;
    }

    function setMachineProcessConfiguration(string memory name, MachineOperationConstant.MachineOperation machineOperation) public {
        machineProcessConfiguration[name] = machineOperation;
    }

    // Function to get the operation associated with a string name
    function getMachineProcessConfiguration(string memory name) public view returns(MachineOperationConstant.MachineOperation) {
        return machineProcessConfiguration[name];
    }
}