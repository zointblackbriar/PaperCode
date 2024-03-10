//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7;
import "./AbstractHandler.sol";

contract ConcreteHandler3 is AbstractHandler {
    event Logging(string description, bytes handlerAddress);

    function handle(bytes calldata _request) public override returns (string memory ) {
        emit Logging("ConcreteHandler1", _request);
        if (keccak256(_request) == keccak256(abi.encodePacked("sample text"))) {
            return "Sample message: A sample message is prompted";
        }

        return super.handle(_request);
    }
}