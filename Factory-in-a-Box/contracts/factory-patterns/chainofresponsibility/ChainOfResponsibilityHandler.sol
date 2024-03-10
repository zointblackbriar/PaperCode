//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7;
import "../../interfaceseparator/ERC165.sol";

interface ChainOfResponsibilityHandler is ERC165 {
    function setNext(ChainOfResponsibilityHandler _handler) external returns(ChainOfResponsibilityHandler);
    function handle(bytes calldata _request) external returns(string memory);
}

