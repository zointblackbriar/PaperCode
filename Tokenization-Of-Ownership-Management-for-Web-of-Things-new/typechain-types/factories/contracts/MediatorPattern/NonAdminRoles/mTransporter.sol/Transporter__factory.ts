/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  Transporter,
  TransporterInterface,
} from "../../../../../contracts/MediatorPattern/NonAdminRoles/mTransporter.sol/Transporter";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [],
    name: "DeliverInventory",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "phase",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "InventRecordUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "ItemPacked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "phase",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "ItemShipped",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "UpdateStorageReport",
    type: "event",
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getName",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "setName",
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
    name: "shipInventory",
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
        name: "id",
        type: "uint256",
      },
    ],
    name: "updateInventoryRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061066a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c80631f2cd65d116100505780631f2cd65d1461011a57806332a2c5d01461012f578063c47f00271461013d57600080fd5b8063150b7a021461007757806317d7de7c146100e45780631c643279146100f9575b600080fd5b6100ae6100853660046103a8565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020015b60405180910390f35b6100ec610150565b6040516100db919061048e565b61010c610107366004610475565b6101e2565b6040519081526020016100db565b61012d610128366004610475565b61021f565b005b6040513081526020016100db565b61012d61014b366004610424565b610259565b60606000805461015f906105e3565b80601f016020809104026020016040519081016040528092919081815260200182805461018b906105e3565b80156101d85780601f106101ad576101008083540402835291602001916101d8565b820191906000526020600020905b8154815290600101906020018083116101bb57829003601f168201915b5050505050905090565b60007fe8c5f0d3002e68bca41f81b116d2232fded1ecf5639d23c404f933b4da4dfb648260405161021391906104e3565b60405180910390a15090565b7ffc105aa3a2816d1f39d6bf9b31145f561ac343e4780f7a0b379bda6bd76e31548160405161024e9190610550565b60405180910390a150565b805161026c906000906020840190610270565b5050565b82805461027c906105e3565b90600052602060002090601f01602090048101928261029e57600085556102e4565b82601f106102b757805160ff19168380011785556102e4565b828001600101855582156102e4579182015b828111156102e45782518255916020019190600101906102c9565b506102f09291506102f4565b5090565b5b808211156102f057600081556001016102f5565b600067ffffffffffffffff808411156103245761032461061e565b604051601f8501601f19908116603f0116810190828211818310171561034c5761034c61061e565b8160405280935085815286868601111561036557600080fd5b858560208301376000602087830101525050509392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146103a357600080fd5b919050565b600080600080608085870312156103be57600080fd5b6103c78561037f565b93506103d56020860161037f565b925060408501359150606085013567ffffffffffffffff8111156103f857600080fd5b8501601f8101871361040957600080fd5b61041887823560208401610309565b91505092959194509250565b60006020828403121561043657600080fd5b813567ffffffffffffffff81111561044d57600080fd5b8201601f8101841361045e57600080fd5b61046d84823560208401610309565b949350505050565b60006020828403121561048757600080fd5b5035919050565b600060208083528351808285015260005b818110156104bb5785810183015185820160400152820161049f565b818111156104cd576000604083870101525b50601f01601f1916929092016040019392505050565b60608152600061050b6060830160088152675368697070696e6760c01b602082015260400190565b8281036020840152601681527f4974656d20536869707065642041737365742049643a0000000000000000000060208201526040810191505082604083015292915050565b6060815260006105786060830160088152675368697070696e6760c01b602082015260400190565b8281036020840152603281527f496e76656e746f72792064656c657465642066726f6d20496e76656e746f727960208201527f205265636f72642041737365742049643a20000000000000000000000000000060408201526060810191505082604083015292915050565b600181811c908216806105f757607f821691505b6020821081141561061857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fdfea26469706673582212201e4fdd38f1adf4242b074cd0e97cae18bfac3783401549d6e80de2b26f18c67f64736f6c63430008070033";

type TransporterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TransporterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Transporter__factory extends ContractFactory {
  constructor(...args: TransporterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Transporter> {
    return super.deploy(overrides || {}) as Promise<Transporter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Transporter {
    return super.attach(address) as Transporter;
  }
  override connect(signer: Signer): Transporter__factory {
    return super.connect(signer) as Transporter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TransporterInterface {
    return new utils.Interface(_abi) as TransporterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Transporter {
    return new Contract(address, _abi, signerOrProvider) as Transporter;
  }
}
