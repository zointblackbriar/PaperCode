
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "./FNFToken.sol";


contract TestContract is
    ERC721 {
  constructor() ERC721("MyToken", "MTK") {
        // _setupRole(MINTER_ROLE, minter);
    }

    function getContractAddress() public view returns (address) {
        return address(this);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmRZRoFryzYUN9JY5YKYx75uyjfptGqWWmasFFRwz1eQJM";
    }

    function safeMint(address to, uint256 tokens)
        public
    {
         FNFToken _fnftoken = (new FNFToken)();                                      //initialize
        _fnftoken.mint(to, tokens); 
    }

    // The following functions are overrides required by Solidity.

receive() external payable {
     //uint numTokens = calculateTokens(msg.value);
    // minter.mint(msg.sender, numTokens);
      FNFToken _fnftoken = (new FNFToken)();                                      //initialize
        _fnftoken.mint(msg.sender, 4); 
        
 }
 fallback() external payable {}



}
