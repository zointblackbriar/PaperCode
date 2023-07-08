import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";




contract EmployeeRole is IERC721Receiver {
    string _name;
    function setName(string memory name) public{
        _name = name;
    }

    function getName() public view returns (string memory ) {
        return _name;
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