pragma solidity ^0.8.7;
import "hardhat/console.sol";

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MockOracleClient is Ownable {
    event Tweet(string content);
    event ReadData(string data);
    event ByteData(bytes32 data);
    mapping(uint256 => string[]) token_data;

    constructor() public {
        // link = _link;
        token_data[0] = ["appointment", "0"];
        token_data[1] = ["appointment", "1"];
        token_data[2] = ["receipt", "1"];
        token_data[3] = ["receipt", "0"];

        // token_data["QmZNbMHRAAxKTuqfLTJ6f6eRC7TtU6fBJTFHnznwHQmzJq/2"] = ["appointment","2"];
        // token_data["QmZNbMHRAAxKTuqfLTJ6f6eRC7TtU6fBJTFHnznwHQmzJq/3"] = ["appointment","3"];

        // token_data["QmZNbMHRAAxKTuqfLTJ6f6eRC7TtU6fBJTFHnznwHQmzJq/4"] = ["receipt","0"];
        // token_data["QmZNbMHRAAxKTuqfLTJ6f6eRC7TtU6fBJTFHnznwHQmzJq/5"] = ["receipt","1"];
        // token_data["QmZNbMHRAAxKTuqfLTJ6f6eRC7TtU6fBJTFHnznwHQmzJq/6"] = ["receipt","2"];
        // token_data["QmZNbMHRAAxKTuqfLTJ6f6eRC7TtU6fBJTFHnznwHQmzJq/7"] = ["receipt","3"];

        // token_data["QmZNbMHRAAxKTuqfLTJ6f6eRC7TtU6fBJTFHnznwHQmzJq/8"] = ["inspection_report","0"];
        // token_data["QmZNbMHRAAxKTuqfLTJ6f6eRC7TtU6fBJTFHnznwHQmzJq/9"] = ["inspection_report","1"];
        // token_data["QmZNbMHRAAxKTuqfLTJ6f6eRC7TtU6fBJTFHnznwHQmzJq/10"] = ["inspection_report","2"];
        // token_data["QmZNbMHRAAxKTuqfLTJ6f6eRC7TtU6fBJTFHnznwHQmzJq/11"] = ["inspection_report","3"];
    }

    function sendTweet(string memory content) public {
        emit Tweet(content);
    }

    uint256 tokenId;

    function requestVolumeData(uint256 tokenUri)
        public
        returns (bytes32 requestId)
    {
        tokenId = tokenUri;
        string memory nft_metadata = string(
            abi.encodePacked(
                '{"name": "appointment',
                '", "access": "0", "attributes":',
                '[{"key":"trait_type","value":"1"}]',
                "}"
            )
        );
        //  emit ByteData(stringToBytes32(nft_metadata));

        return stringToBytes32(nft_metadata);
    }

    function fulfill(bytes32 data) public returns (string[] memory) {
        string memory nft_metadata = string(
            abi.encodePacked(
                '{"name": "appointment',
                '", "access": "0", "attributes":',
                '[{"key":"trait_type","value":"1"}]',
                "}"
            )
        );
        //  string memory data = string(abi.encodePacked(_requestId));
        // emit ReadData(nft_metadata);
        return token_data[tokenId];
    }

    function stringToBytes32(string memory source)
        public
        pure
        returns (bytes32 result)
    {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }

        assembly {
            result := mload(add(source, 32))
        }
    }

    function bar(string[] calldata baz) public {
        // do something with `baz` here
        console.log(baz[0]);
    }
}
