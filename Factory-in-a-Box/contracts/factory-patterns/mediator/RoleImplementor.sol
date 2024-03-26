//SPDX-License-Identifier: MIT

pragma solidity >=0.8.7;
import "./Role.sol";
import "../../interfaceseparator/ERC165.sol";
import "../../interfaceseparator/ERC165Query.sol";
import "../../interfaceseparator/InterfaceIds.sol";
abstract contract RoleImplementor is ERC165Query, ERC165, Role{

    // uint private nonce;
    bool public isRole;
    bool public isMediator;
    uint256 nonce;

    function supportsInterface(bytes4 interfaceID ) external pure override returns (bool) {
        return interfaceID == this.supportsInterface.selector || // ERC165 Separator
            // interfaceID == this.addRole.selector ^ this.bindRole.selector ^ this.invokeRole.selector ^ this.getRole.selector ; // Mediator.sol
            interfaceID == InterfaceIds.MEDIATOR_ID; //Mediator Pattern
    }



    ///@dev create random bytes32 in Role Generator
    function generateRandomRoleData(address _roleAddress, address _addressOfMediator) external returns (bytes32) {
        isRole = doesContractImplementInterface(_roleAddress,  InterfaceIds.ROLE_ID);
        require(isRole, "Role has been Activated");
        isMediator = doesContractImplementInterface(
            _addressOfMediator, InterfaceIds.MEDIATOR_ID
        );
        require(isMediator, "Mediator has been activated");
        bytes32  randomRoleData = keccak256(abi.encodePacked(block.timestamp, msg.sender, nonce++));
        // Role role = Role(_roleAddress);

        return randomRoleData;


    }

}