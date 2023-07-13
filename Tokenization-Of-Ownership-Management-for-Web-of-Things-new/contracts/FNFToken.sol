// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;


import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "hardhat/console.sol";



contract FNFToken is ERC20, ERC20Burnable, Ownable,     IERC721Receiver
 {
       event Mint(
        address to,
        uint256  amount
    );
    constructor() ERC20("FNFToken", "FNT") {}

    function mint(address to, uint256 amount) public  {
       // console.log("Amount", amount * 10**uint(decimals()));
        _mint(to, amount * 10**uint(decimals()));
       // console.log("ERC20 Mint address ", to);
      //  console.log("ERC20 Contract address ", getAddress());
        emit Mint(to, amount);


    }

    function getAddress() public view returns (address) {
        return address(this);

    }

    function onERC721Received(
        address,
        address,
        uint256,
        bytes memory
    ) public virtual override returns (bytes4) {
        return this.onERC721Received.selector;
    }
}