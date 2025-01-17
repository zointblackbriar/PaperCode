// SPDX-License-Identifier: MIT
pragma solidity >=0.8.7;

/// @notice ERC165 Query for interface separator
/// @dev Interface identification is specified in ERC-165. This function
/// @dev `invalidID` in case of 0xffffffff, `false` otherwise
contract ERC165Query {
    bytes4 constant InvalidID = 0xffffffff;
    bytes4 constant ERC165ID = 0x01ffc9a7;

    function doesContractImplementInterface(
        address _contract,
        bytes4 _interfaceId
    ) internal view returns (bool) {
        uint256 success;
        uint256 result;

        (success, result) = noThrowCall(_contract, ERC165ID);
        if (success == 0 || result == 0) return false;

        (success, result) = noThrowCall(_contract, InvalidID);
        if (success == 0 || result != 0) return false;

        (success, result) = noThrowCall(_contract, _interfaceId);
        if (success == 1 && result == 1) return true;

        return false;
    }

    function noThrowCall(
        address _contract,
        bytes4 _interfaceId
    ) internal view returns (uint256 success, uint256 result) {
        bytes4 erc165ID = ERC165ID;

        assembly {
            let x := mload(0x40) // Find empty storage location using "free memory pointer"
            mstore(x, erc165ID) // Place signature at beginning of empty storage
            mstore(add(x, 0x04), _interfaceId) // Place first argument directly next to signature

            // Low-level call
            success := staticcall(
                30000, // 30k gas
                _contract, // To addr
                x, // Inputs are stored at location x
                0x24, // Inputs are 36 bytes long
                x, // Store output over input (saves space)
                0x20 // Outputs are 32 bytes long
            )

            result := mload(x) // Load the result
        }
    }
}
