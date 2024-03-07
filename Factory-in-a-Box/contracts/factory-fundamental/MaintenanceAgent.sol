//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7; 

import "./FactoryBoxRoles.sol";

/// @title Maintenance Agent Role Contract
/// @author Orcun Oruc
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
        owner = msg.sender;
        emit Logging("CellMaintenanceAgent constructor has been called", "");
    }

    function roleAssignment() public pure override returns(Constants.RoleType) {
        return Constants.RoleType.MaintenanceAgent;
    }
    /// @dev logging task for the maintenance steps
    function logMaintenanceTask(string memory taskDescription) external onlyOwner {
        latestTaskID++;
        maintenanceTasks[latestTaskID] = MaintenanceTask({
            taskID: latestTaskID,
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

    function completeTask(uint taskID) external onlyOwner {
        require(taskID > 0 && taskID <= latestTaskID, "Invalid taskID");
        MaintenanceTask storage task = maintenanceTasks[taskID];
        require(task.status == MaintenanceTaskStatus.InProgress, "Task is not in progress");
        task.status = MaintenanceTaskStatus.Completed;
        emit TaskLogged(taskID, task.taskDescription, task.assignedAgent, MaintenanceTaskStatus.InProgress, block.timestamp);
    }

    function getTaskDetails(uint taskID) external view returns(string memory, address, MaintenanceTaskStatus, uint) {
        require(taskID > 0 && taskID <= latestTaskID, "Invalid taskID");
        MaintenanceTask storage maintenanceTask = maintenanceTasks[taskID];
        return(maintenanceTask.taskDescription, maintenanceTask.assignedAgent, maintenanceTask.status, maintenanceTask.timestamp);
    }

}