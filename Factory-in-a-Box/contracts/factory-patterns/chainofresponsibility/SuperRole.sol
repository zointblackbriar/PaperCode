
//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7;
import "./AbstractHandler.sol";

// Role Assignment for the AbstractHandler
contract SuperRole is AbstractHandler {

    event Logging(string description, bytes handlerAddress);
    function handle(bytes calldata _request) public override returns (string memory) {
        // supportsInterface(_request);

        emit Logging("ProductionControllerChainOfResp", _request);
        if(keccak256(_request) == keccak256(abi.encodePacked("Production Controller Super Role"))) {
            return "Production controller chain of responsibility";
        }
        return super.handle(_request);
    }
}
