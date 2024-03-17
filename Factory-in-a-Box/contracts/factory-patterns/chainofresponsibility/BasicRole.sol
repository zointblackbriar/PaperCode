
//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7;
import "./AbstractHandler.sol";


contract BasicRole is AbstractHandler {
    event Logging(string description, bytes handlerAddress);

    function handle(bytes calldata _request) public override returns (string memory ) {
        emit Logging("Robot Arm Role", _request);
        if (keccak256(_request) == keccak256(abi.encodePacked("Robotarm role"))) {
            return "Robot Arm Role";
        }

        return super.handle(_request);
    }
}
