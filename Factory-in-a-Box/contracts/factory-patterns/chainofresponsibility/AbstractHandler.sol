
//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7;
import "./ChainOfResponsibilityHandler.sol";
import "../../interfaceseparator/InterfaceIds.sol";

//Abstract Handller contract
abstract contract AbstractHandler is ChainOfResponsibilityHandler {
    ChainOfResponsibilityHandler private nextHandler;

    function setNext(ChainOfResponsibilityHandler _handler) external virtual override returns(ChainOfResponsibilityHandler) {
        nextHandler = _handler;
        return _handler;
    }

    function handle(bytes calldata _request) public virtual override returns(string memory){
        if(nextHandler != ChainOfResponsibilityHandler(address(0))) {
            return nextHandler.handle(_request);
        }
    }

    function supportsInterface(bytes4 interfaceID) external pure override returns (bool) {
        // return interfaceID == this.supportsInterface.selector || // ERC165 Separator
        return interfaceID == 0x01ffc9a7 || interfaceID == InterfaceIds.CHAIN_RESPONSE; //Mediator Pattern
    }

}

