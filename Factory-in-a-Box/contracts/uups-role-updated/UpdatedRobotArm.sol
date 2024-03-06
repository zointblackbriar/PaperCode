//SPDX-License-Identifier: MIT 
pragma solidity >=0.8.7;


import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "../factory-fundamental/FactoryBoxRoles.sol";
import "../factory-fundamental/MachineOperationConstant.sol";

import "hardhat/console.sol";
import "../factory-fundamental/MachineOperationConstant.sol";
// initialize() : Upgradable contracts should have an initialize method in place of constructors, and also the initializer keyword makes sure that the contract is initialized only once
// _authorizeUpgrade() : This method is required to safeguard from unauthorized upgrades because in the UUPS pattern the upgrade is done from the implementation contract, 
// whereas in the transparent proxy pattern, the upgrade is done via the proxy contract
// changeStateVariable() : A simple function to reduce the storage variable whenever called

contract UpdatedRobotArm is Initializable, 
UUPSUpgradeable, 
OwnableUpgradeable,
PausableUpgradeable,
FactoryBoxRoles {

    uint public sampleVariable; 

    // function _authorizeUpgrade(address) internal override onlyOwner {}

    function initializeRoleOwner(address roleAddress) public initializer {
    }

    //Sample function to get a message
    function getMessage() public pure returns(string memory) {
        return "Updated RobotArm Role";
    }

    function setDifferentMachineryState(MachineOperationConstant.MachineOperation machineryState) pure public  {
        // sampleVariable = 1;
        machineryState = MachineOperationConstant.MachineOperation.Drilling; 
    }

    function addFunctionalityToRobotArm() external pure returns(string memory) {
        // require(sampleVariable > 1, "be careful about the state variable"); 
        return "Updated RobotArm";
    }

    ///@dev required by the Openzeppelin UUPS module
    function _authorizeUpgrade(address newImplementationAddress)
     internal 
     virtual 
     override {
        require(_msgSender() == owner(), "Unauthorized address");
        console.log("_authorizeUpgrade executed for the admin account:", _msgSender());
        console.log("New implementation address:", newImplementationAddress);
    }

    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause(); 
    }

    function _onlyProxyPause() external onlyProxy {
        _pause();
    }

    function roleAssignment() public pure override returns(Constants.RoleType) {
        return Constants.RoleType.ProductionController;
    }


}