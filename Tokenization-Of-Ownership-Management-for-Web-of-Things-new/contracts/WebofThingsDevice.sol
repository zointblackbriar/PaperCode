//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7; 

// import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
// import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";



contract WebofThingsDevice{ //Device smart contract
    // using Chainlink for Chainlink.Request;
    address public owner; 
    string public woTName; 
    string public woTDescription; 
    string[] public woTSpecification; 
    event Logging(string message, address findoutAddress);
    event RequestVolume(bytes32 indexed requestId, uint256 volume);

    //test parameters
    // IWitnetRequest query;
    // Request public query; 
    uint256 requestId;
    uint64 latestPrice;


    constructor() payable{
        // query = new WebofThingsDevice();
    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    function wotPropertyAssigner(address _owner, 
                string memory _wotName, 
                string memory _wotDescription, 
                string memory _wotSpecification) public{
                    owner = _owner; 
                    woTName = _wotName; 
                    woTDescription = _wotDescription; 
                    woTSpecification.push(_wotSpecification);
                    emit Logging('Device has been created', _owner);
                }

    function ownershipTransfer(address _newOwner) public {
        owner = _newOwner;
    }

    function getSampleMessage() public pure returns(string memory) {
        return "Wot Device";
    }

    function wotNameUpdate(string memory newWotName) public {
        woTName = newWotName; 
    }

    function getWotName() public view returns(string memory) {
        return woTName;
    }

    function getWotSpecificationName() public view returns(string memory) {
        uint lastIndex = woTSpecification.length-1;
        return woTSpecification[lastIndex];
    }

    function getWotDescriptionName() public view returns(string memory) {
        return woTDescription;
    }

    function wotSpecificationUpdate(string memory newSpecificationWot) public {
        woTSpecification.push(newSpecificationWot);
    }

    function wotDeviceHandOver() public  {
        owner = address(0x0); //owner has been nulled
        emit Logging("Device has been handed to another owner", owner);

    }

    receive() external payable {}
}