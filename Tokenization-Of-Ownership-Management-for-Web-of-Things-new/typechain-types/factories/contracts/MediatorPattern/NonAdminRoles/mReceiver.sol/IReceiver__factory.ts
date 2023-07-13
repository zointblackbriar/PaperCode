/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IReceiver,
  IReceiverInterface,
} from "../../../../../contracts/MediatorPattern/NonAdminRoles/mReceiver.sol/IReceiver";

const _abi = [
  {
    inputs: [],
    name: "approveAppointment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "asset_name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenUri",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "verifier",
        type: "address",
      },
      {
        internalType: "address",
        name: "issuer",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "generateReciept",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getRoleName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "asset_name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "receiveItems",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "updateInventoryRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "asset_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "resource_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenUri",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "issuer",
        type: "address",
      },
      {
        internalType: "address",
        name: "verifier",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "updateReciept",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IReceiver__factory {
  static readonly abi = _abi;
  static createInterface(): IReceiverInterface {
    return new utils.Interface(_abi) as IReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IReceiver {
    return new Contract(address, _abi, signerOrProvider) as IReceiver;
  }
}
