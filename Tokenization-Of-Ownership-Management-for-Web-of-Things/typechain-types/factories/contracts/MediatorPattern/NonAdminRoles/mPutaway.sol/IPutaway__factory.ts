/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPutaway,
  IPutawayInterface,
} from "../../../../../contracts/MediatorPattern/NonAdminRoles/mPutaway.sol/IPutaway";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "AssetId",
        type: "uint256",
      },
      {
        internalType: "contract Verifier",
        name: "verifier",
        type: "address",
      },
      {
        internalType: "contract Issuer",
        name: "issuer",
        type: "address",
      },
    ],
    name: "addItemStorage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getContractAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getStorageLocation",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "AssetId",
        type: "uint256",
      },
      {
        internalType: "contract Verifier",
        name: "verifier",
        type: "address",
      },
      {
        internalType: "contract Issuer",
        name: "issuer",
        type: "address",
      },
    ],
    name: "putawayInventory",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "AssetId",
        type: "uint256",
      },
      {
        internalType: "contract Verifier",
        name: "verifier",
        type: "address",
      },
      {
        internalType: "contract Issuer",
        name: "issuer",
        type: "address",
      },
    ],
    name: "updateStorageReport",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IPutaway__factory {
  static readonly abi = _abi;
  static createInterface(): IPutawayInterface {
    return new utils.Interface(_abi) as IPutawayInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPutaway {
    return new Contract(address, _abi, signerOrProvider) as IPutaway;
  }
}
