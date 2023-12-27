//SPDX-License-Identifier: MIT 
pragma solidity >=0.8.7;

import "./UpdatedMaintenanceAgent.sol";

contract UpdatedMaintenanceAgentV2 is UpdatedMaintenanceAgent {
    function refillStateVariable() external {
        sampleVariable -= 1;
    }
}