/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ITransporter,
  ITransporterInterface,
} from "../../../../../contracts/MediatorPattern/NonAdminRoles/mTransporter.sol/ITransporter";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "Asset_id",
        type: "uint256",
      },
    ],
    name: "getReceipt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "Asset_id",
        type: "uint256",
      },
    ],
    name: "inventoryDelivered",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ITransporter__factory {
  static readonly abi = _abi;
  static createInterface(): ITransporterInterface {
    return new utils.Interface(_abi) as ITransporterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITransporter {
    return new Contract(address, _abi, signerOrProvider) as ITransporter;
  }
}