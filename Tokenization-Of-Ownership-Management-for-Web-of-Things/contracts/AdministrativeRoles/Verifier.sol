// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";
import "../Resource.sol";
import "../MockOracleClient.sol";
import "../MediatorPattern/MediatorPattern.sol";
import "hardhat/console.sol";

import "../AdministrativeRoles/Issuer.sol";

contract Verifier is Ownable {
    string _role = "Supplier";
    uint256 _access_type = 4;
    string _resource = "Receipts";
    mapping(string => mapping(string => uint256[])) public accessPolicy;
    event AccessResult(string access);
    Issuer issuer;

    constructor() {
        makeAccessPolicy();
    }

    function makeAccessPolicy() public {
        accessPolicy["appointment"]["supplier"] = [0, 1, 2, 3];
        accessPolicy["appointment"]["manager"] = [3];
        accessPolicy["appointment"]["receiver"] = [2, 3];
        accessPolicy["receipt"]["manager"] = [3];
        accessPolicy["receipt"]["receiver"] = [0,1,2,3];
    }

    function compareStringsbyBytes(string memory s1, string memory s2)
        public
        pure
        returns (bool)
    {
        return
            keccak256(abi.encodePacked(s1)) == keccak256(abi.encodePacked(s2));
    }

    function getContractAddress() public view returns (address) {
        return address(this);
    }

    function getNFTMetadata(string memory tokenUri) public {}

    function verify(
        string memory role,
        string memory resource_name,
        uint256 tokenUri,
        address account,
        address issuer
    ) public returns (bool) {
        AccessControlMediator ac = new AccessControlMediator();
        // bool role_result = ac.accountHasRoleObject(account);

        //Check if the token is owned by this address
        bool isnft_owner = Issuer(issuer).isNFTOwner(tokenUri, account);
        // console.log("NFT Owner",isnft_owner);

        //Fetch token data
        MockOracleClient mo = new MockOracleClient();
        bytes32 data = mo.requestVolumeData(tokenUri);
        string[] memory array = mo.fulfill(data);
       // console.log("Array index", array[0], array[1]);
         uint256 temp = 0;
        bool a = compareStringsbyBytes(array[0], resource_name);
      //  console.log("Comparison result ",a,array[0],resource_name);
        //&& (ac.accountHasRoleObject(account)
        if ((compareStringsbyBytes(array[0], resource_name)) && isnft_owner) {
            uint256[] memory temparray = accessPolicy[resource_name][role];
           // console.log("Temp array", temparray.length);
            if (array.length > 0) {
                
                uint256 access_type = uint256(stringToUint(array[1]));
              //   console.log("Access Type: ", access_type, tokenUri);
                if (temparray.length > 0) {
                    for (uint256 i = 0; i < temparray.length; i++) {
                        if (temparray[i] == access_type) {
                            emit AccessResult("Access Granted");

                            temp++;
                            //true;
                        }
                    }
                }
            }
        }
        if (temp == 0) {
            emit AccessResult("Access Denied");
            console.log("Access Denied");
            return false;
        } else {
            console.log("Access Granted");
            return true;
        }

    }

    function setIssuer(address account) public {
        console.log("issuer", account);
        issuer = Issuer(account);
    }

    function accessResource(
        string memory resource_name,
        string memory role,
        uint256 access_type,
        uint256 tokenId
    ) public {
        //Create resource
        // if (verify(access_type, resource_name, role)) {
        //     if (access_type == 0) {
        //         Resource appointment = new Resource("appointment");
        //         console.log("Resource created", appointment.getName());
        //         if (access_type == 1) {
        //             appointment.updateResource();
        //         } else if (access_type == 2) {
        //             appointment.deleteResource();
        //         } else if (access_type == 3) {
        //             appointment.readResource();
        //         }
        //     }
        // }
    }

    // function accessResource(
    //     string memory resource_name,
    //     string memory role,
    //     uint256 access_type
    // ) public {
    //     //Create resource
    //     if (verify(access_type, resource_name, role)) {
    //         if (access_type == 0) {
    //             Resource appointment = new Resource("appointment");
    //             console.log("Resource created", appointment.getName());
    //             if (access_type == 1) {
    //                 appointment.updateResource();
    //             } else if (access_type == 2) {
    //                 appointment.deleteResource();
    //             } else if (access_type == 3) {
    //                 appointment.readResource();
    //             }
    //         }
    //     }
    // }

    function stringToUint(string memory s) public pure returns (uint256) {
        bytes memory b = bytes(s);
        uint256 result = 0;
        for (uint256 i = 0; i < b.length; i++) {
            uint256 c = uint256(uint8(b[i]));
            if (c >= 48 && c <= 57) {
                result = result * 10 + (c - 48);
            }
        }
        return result;
    }
}
