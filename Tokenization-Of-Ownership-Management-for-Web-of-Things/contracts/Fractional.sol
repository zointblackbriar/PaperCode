// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "hardhat/console.sol";

import "./ERC20.sol";

contract Fractional is ERC721URIStorage {
    using SafeMath for uint256;
    /* immutable address datatype which indicates where the value
    assigned to a variable cannot be changed*/

    address immutable _platformAdmin;

    //counters for incrementing token ids

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    //mapping the address of admin
    mapping(address => uint256) public Track;

    struct NFT {
        uint256 tokenID;
        address payable owner;
        uint256 price;
        address[] shareHolders;
    }

    mapping(uint256 => NFT) public idToNFT;

    // NFT ID => owner
    mapping(uint256 => address payable) idToOwner;
    // NFT ID => Price
    mapping(uint256 => uint256) public idToPrice;
    // NFT ID => share value
    mapping(uint256 => uint256) public idToShareValue;
    // NFT id => ERC20 share
    mapping(uint256 => ERC20) public idToShare;

    // constructor to give a structure for (NFT SYMBOL AND NAME)
    constructor(string memory _name, string memory _symbol)
        ERC721(_name, _symbol)
    {
        _platformAdmin = msg.sender;
        console.log(_name);
    }

    //Creating a modifier for onlhy admin access

    modifier onlyPlatformAdmin() {
        //require(_platformAdmin == msg.sender, "Invalid operation");
        _;
    }

    //function to create NFT which takes input as address of the reciever and a tokenuri as counter
    function _create(address receiver, string memory _tokenURI)
        internal
        returns (uint256)
    {
        //current token id stored in newItemId

        uint256 newItemId = _tokenIds.current();

        // Minting of NFT with parameters, receiver i.e address of reciever and the cuurent token ID
        _mint(receiver, newItemId);

        console.log("Token URI", _tokenURI);

        _setTokenURI(newItemId, _tokenURI);
        Track[receiver] = newItemId;

        _tokenIds.increment();
        console.log("Token ID", newItemId);
        return newItemId;
    }

    function _transferNFT(
        address _sender,
        address _receiver,
        uint256 _tokenId,
        string memory _tokenURI
    ) internal {
        _transfer(_sender, _receiver, _tokenId);
        _setTokenURI(_tokenId, _tokenURI);

        // update mappings
        delete Track[_sender];
        Track[_receiver] = _tokenId;
    }

    // create NFT from fractional contract
    function createNFT(string memory _tokenURI, uint256 _price)
        public
    //onlyPlatformAdmin
    {
        // create NFT
        uint256 _tokenID = _create(msg.sender, _tokenURI);
        address[] memory share_holders;
        // update mapping
        idToPrice[_tokenID] = _price * 1e18;
        idToOwner[_tokenID] = payable(msg.sender);
        idToNFT[_tokenID] = NFT(
            _tokenID,
            idToOwner[_tokenID],
            idToPrice[_tokenID],
            share_holders
        );
    }

    // lock NFT in fractional contract
    function lockNFT(
        uint256 _tokenID,
        string memory _tokenURI,
        uint256 _sharesAmount
    ) public {
        // transfer NFT to contract
        _transferNFT(msg.sender, address(this), _tokenID, _tokenURI);

        // mint & transfer ERC20 to contract
        // set name of new token
        string memory tokenID = Strings.toString(_tokenID);
        string memory _tokenName = "FractionNFT";
        string memory tokenName = string(abi.encodePacked(_tokenName, tokenID));

        // set symbol of new token
        string memory _tokenSymbol = "FNFT";

        string memory tokenSymbol = string(
            abi.encodePacked(_tokenSymbol, tokenID)
        );

        // create new token
        ERC20 fToken = new ERC20(tokenName, tokenSymbol, _sharesAmount);

        // transfer tokens to this contract address
        fToken.transfer(address(this), _sharesAmount);
        console.log("Contract Address", address(this));
        console.log(balanceOf(address(this)));
        // update mapping
        idToShare[_tokenID] = fToken;
        idToNFT[_tokenID].shareHolders.push(msg.sender);

        // update share value
        uint256 _price = idToPrice[_tokenID];
        idToShareValue[_tokenID] = _price.div(_sharesAmount);
    }

    // function for user to buy shares of NFT and hold ERC20 as validation token of the purchase
    function buyFractionalShares(
        uint256 _tokenID,
        uint256 _totalShares,
        address account
    ) public payable {
        require(msg.value >= 0, "Yooooo have Insufficient funds");

        // user sends ETH to owner
        address payable nftOwner = idToOwner[_tokenID];
        uint256 _amount = idToShareValue[_tokenID].mul(_totalShares);
        //  nftOwner.transfer(_amount);

        idToShare[_tokenID].transfer(account, _totalShares);
    }

    function fetchNFTs() public view returns (NFT[] memory) {
        uint256 totalItemCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idToNFT[i + 1].owner == msg.sender) {
                itemCount += 1;
            }
        }

        NFT[] memory items = new NFT[](itemCount);
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idToNFT[i + 1].owner == msg.sender) {
                uint256 currentId = i + 1;
                NFT storage currentItem = idToNFT[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    function isNFTOwner(uint256 tokenId, address account)
        public
        view
        returns (bool)
    {
        address[] memory sh = idToNFT[tokenId].shareHolders;
        for (uint256 i = 0; i < sh.length; i++) {
            if (account == sh[i]) {
                return true;
            }
        }
        return false;
    }

    event ReadData(string data);

    function fulfill() public {
        string memory nft_metadata = string(
            abi.encodePacked(
                '{"name": "appointment',
                '", "access": "0", "attributes":',
                '[{"key":"trait_type","value":"1"}]',
                "}"
            )
        );

       // string[] storage split = nft_metadata.split(" ");

        //  string memory data = string(abi.encodePacked(_requestId));
        emit ReadData(nft_metadata);
    }

    function bar(string[] calldata baz) public {
        // do something with `baz` here
        console.log("Baz 0",baz[0]);
      //  console.log(baz[1]);
      
    }
    
}
