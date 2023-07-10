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


    //  * Sepolia Testnet details:
    //  * Link Token: 0x779877A7B0D9E8603169DdbD7836e478b4624789
    //  * Oracle: 0x6090149792dAAeE9D1D568c9f9a6F6B46AA29eFD (Chainlink DevRel)
    //  * jobId: ca98366cc7314957b8c012c72f05aeeb

    // constructor() ConfirmedOwner(msg.sender){
    //     //chainlink related properties
    //     setChainlinkToken(0x779877A7B0D9E8603169DdbD7836e478b4624789);
    //     setChainlinkOracle(0x6090149792dAAeE9D1D568c9f9a6F6B46AA29eFD);
    //     jobId = "ca98366cc7314957b8c012c72f05aeeb";
    //     fee = (1 * LINK_DIVISIBILITY) / 10; // 0,1 * 10**18 (Varies by network and job)
    // }

    constructor() {

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

    // function requestExternalData() public returns(bytes32 requestId) {
    //     Chainlink.Request memory request = buildChainlinkRequest(jobId, address(this), this.fulfill.selector);

    //     // Set the URL to perform the GET request on
    //     // request.add("get", "https://min-api.cryptocompare.com/data/generateAvg?fsym=BTC&tsym=USD&e=Kraken");
    //     // Set the URL to perform the GET request on
    //     request.add(
    //         "get",
    //         "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD"
    //     );

    //     // Specify the path for receiving the data
    //     // request.add("path", "RAW.PRICE");

    //     // Sends the request
    //     return sendChainlinkRequestTo(oracle, request, fee);
    // }

    // /**
    //  * Receive the response in the form of uint256
    //  */
    // function fulfill(
    //     bytes32 _requestId,
    //     uint256 _volume
    // ) public recordChainlinkFulfillment(_requestId) {
    //     emit RequestVolume(_requestId, _volume);
    //     volume = _volume;
    // }
}