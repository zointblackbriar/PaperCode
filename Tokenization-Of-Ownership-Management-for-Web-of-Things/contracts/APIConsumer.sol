// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";

/**
 * @title The APIConsumer contract
 * @notice An API Consumer contract that makes GET requests to obtain 24h trading volume of ETH in USD
 */
contract APIConsumer is ChainlinkClient {
    using Chainlink for Chainlink.Request;

    uint256 public volume;
    address private immutable oracle = address(0x779877A7B0D9E8603169DdbD7836e478b4624789);
    bytes32 private jobId;
    uint256 private fee;

    event DataFullfilled(uint256 volume);

    // constructor(address _oracle, bytes32 _jobId, uint256 _fee, address _link) {
    //     if (_link == address(0)) {
    //         setPublicChainlinkToken();
    //     } else {
    //         setChainlinkToken(_link);
    //     }
    //     oracle = _oracle;
    //     jobId = _jobId;
    //     fee = _fee;
    // }

    constructor() {
        setChainlinkToken(0x779877A7B0D9E8603169DdbD7836e478b4624789);
        setChainlinkOracle(0x6090149792dAAeE9D1D568c9f9a6F6B46AA29eFD);
        jobId = "7da2702f37fd48e5b1b9a5715e3509b6";
        fee = (1 * LINK_DIVISIBILITY);
    }


    /**
     * @notice Creates a Chainlink request to retrieve API response, find the target
     * data, then multiply by 1000000000000000000 (to remove decimal places from data).
     *
     * @return requestId - id of the request
     */
    function requestVolumeData() public returns (bytes32 requestId) {
        Chainlink.Request memory request = buildChainlinkRequest(
            jobId,
            address(this),
            this.fulfill.selector
        );

        // Set the URL to perform the GET request on
        request.add(
            "get",
            "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD"
        );

        // Set the path to find the desired data in the API response, where the response format is:
        // {"RAW":
        //   {"ETH":
        //    {"USD":
        //     {
        //      "VOLUME24HOUR": xxx.xxx,
        //     }
        //    }
        //   }
        //  }
        // request.add("path", "RAW.ETH.USD.VOLUME24HOUR"); // Chainlink nodes prior to 1.0.0 support this format
        request.add("path", "RAW,ETH,USD,VOLUME24HOUR"); // Chainlink nodes 1.0.0 and later support this format

        // Multiply the result by 1000000000000000000 to remove decimals
        int256 timesAmount = 10 ** 18;
        request.addInt("times", timesAmount);

        // Sends the request
        return sendChainlinkRequestTo(oracle, request, fee);
    }

    /**
     * @notice Receives the response in the form of uint256
     *
     * @param _requestId - id of the request
     * @param _volume - response; requested 24h trading volume of ETH in USD
     */
    function fulfill(
        bytes32 _requestId,
        uint256 _volume
    ) public recordChainlinkFulfillment(_requestId) {
        volume = _volume;
        emit DataFullfilled(volume);
    }

    /**
     * @notice Witdraws LINK from the contract
     * @dev Implement a withdraw function to avoid locking your LINK in the contract
     */
    function withdrawLink() external {}
}
