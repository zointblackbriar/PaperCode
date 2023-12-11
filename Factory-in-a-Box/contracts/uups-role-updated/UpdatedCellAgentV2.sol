//SPDX-License-Identifier: MIT 
pragma solidity >=0.8.7;

import "./UpdatedCellAgent.sol";

contract UpdatedCellAgentV2 is UpdatedCellAgent {
    function refillStateVariable() external {
        sampleVariable -= 1;
    }
}