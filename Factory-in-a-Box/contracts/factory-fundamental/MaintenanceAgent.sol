//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7; 

import "./FactoryBoxRoles.sol";

contract MaintenanceAgent is FactoryBoxRoles{
    event Logging(string description, string problemDefinition); 

    address public owner;

    enum MaintenanceTaskStatus {
        Open, InProgress, Completed
    }

    struct MaintenanceTask {
        uint taskID; 
        string taskDescription;
        address assignedAgent;
        MaintenanceTaskStatus status;
        uint timestamp;
    }

    mapping(uint256 => MaintenanceTask) public maintenanceTasks;
    uint256 public latestTaskID; 

    event TaskLogged(uint taskID, string taskDescription, address assignedAgent, MaintenanceTaskStatus maintenanceTaskStatus, uint timestamp);

    modifier onlyOwner() {
        require(owner == msg.sender, "It is not the contract owner");
        _;
    }

    constructor() {
        emit Logging("CellMaintenanceAgent constructor has been called", "");
    }

    function assignLogging(string memory _description, string memory _problemDefinition) public {
        emit Logging(_description, _problemDefinition);
    }

    function roleAssignment() public pure override returns(Constants.ClassType) {
        return Constants.ClassType.MaintenanceAgent;
    }

    function logMaintenanceTask(uint taskID, string memory taskDescription) external {
        maintenanceTasks[taskID] = MaintenanceTask({
            taskID: taskID,
            taskDescription: taskDescription,
            assignedAgent: address(0),
            status: MaintenanceTaskStatus.Open,
            timestamp: block.timestamp
        });

        emit TaskLogged(latestTaskID, taskDescription, address(0), MaintenanceTaskStatus.Open, block.timestamp);
    }

    function assignTaskToAgent(uint taskID, address assignedAgent) external onlyOwner {
        require(taskID > 0 && taskID <= latestTaskID, "Invalid taskID");
        MaintenanceTask storage task = maintenanceTasks[taskID];
        require(task.status == MaintenanceTaskStatus.Open, "Task is not open");

        task.assignedAgent = assignedAgent;
        task.status = MaintenanceTaskStatus.InProgress;

        emit TaskLogged(taskID, task.taskDescription, assignedAgent, MaintenanceTaskStatus.InProgress, block.timestamp);

    }

}