
//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7;
import "./AbstractHandler.sol";


contract ConcreteHandler1 is AbstractHandler {

    event Logging(string description, bytes handlerAddress);
    function handle(bytes calldata _request) public override returns (string memory) {
        // supportsInterface(_request);

        emit Logging("ConcreteHandler1", _request);
        if(keccak256(_request) == keccak256(abi.encodePacked("Sample fruit"))) {
            return "Sample fruit should be taken";
        }
        return super.handle(_request);
    }
}
