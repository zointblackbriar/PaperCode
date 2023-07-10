/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  Putaway,
  PutawayInterface,
} from "../../../../../contracts/MediatorPattern/NonAdminRoles/mPutaway.sol/Putaway";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
      {
        indexed: false,
        internalType: "uint256",
        name: "rack_no",
        type: "uint256",
      },
    ],
    name: "ItemStored",
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
        name: "rack_no",
        type: "uint256",
      },
    ],
    name: "StorageLocation",
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
    name: "StorageReportUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
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
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
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
    inputs: [],
    name: "putawayInventory",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
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

const _bytecode =
  "0x608060405261014860015534801561001657600080fd5b5061091c806100266000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063655ae7571161005b578063655ae757146101325780639288f39b14610153578063a89060b51461018c578063c47f00271461019f57600080fd5b8063150b7a021461008d57806317d7de7c146100fa57806332a2c5d01461010f5780633865419d1461011d575b600080fd5b6100c461009b3660046105c7565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020015b60405180910390f35b6101026101b2565b6040516100f191906106fa565b6040513081526020016100f1565b61013061012b366004610694565b610244565b005b610145610140366004610694565b6102f9565b6040519081526020016100f1565b60408051808201909152601181527f5075746177617920496e76656e746f72790000000000000000000000000000006020820152610102565b61014561019a366004610694565b61039f565b6101306101ad366004610643565b6103dd565b6060600080546101c19061086e565b80601f01602080910402602001604051908101604052809291908181526020018280546101ed9061086e565b801561023a5780601f1061020f5761010080835404028352916020019161023a565b820191906000526020600020905b81548152906001019060200180831161021d57829003601f168201915b5050505050905090565b7fdaba19858a22edacfa1779f209a5839dbb453f89179c1b1cb01659214a7dba0881826001546102749190610848565b6040805160808082526007908201527f53746f726167650000000000000000000000000000000000000000000000000060a082015260c0602082018190526016908201527f41737365742053746f7265642041737365742069643a0000000000000000000060e08201529081019290925260608201526101000160405180910390a150565b60006103536040518060400160405280600a81526020017f507574776179203a3a20000000000000000000000000000000000000000000008152506040518060600160405280602781526020016108c060279139846103f4565b7f71295a8ca7edb10bdadb44e91d62ba27fca14dfca9297038aa0c6eb9d356ddb3826001546103829190610848565b60405161038f91906107dc565b60405180910390a1505060015490565b60007f793ebedd91cf63afbb4413bec8dac9d37523c0a038a9d73c6b813bad68d1b206826040516103d0919061074a565b60405180910390a1919050565b80516103f090600090602084019061048f565b5050565b61046983838360405160240161040c93929190610714565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f5821efa10000000000000000000000000000000000000000000000000000000017905261046e565b505050565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b82805461049b9061086e565b90600052602060002090601f0160209004810192826104bd5760008555610503565b82601f106104d657805160ff1916838001178555610503565b82800160010185558215610503579182015b828111156105035782518255916020019190600101906104e8565b5061050f929150610513565b5090565b5b8082111561050f5760008155600101610514565b600067ffffffffffffffff80841115610543576105436108a9565b604051601f8501601f19908116603f0116810190828211818310171561056b5761056b6108a9565b8160405280935085815286868601111561058457600080fd5b858560208301376000602087830101525050509392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146105c257600080fd5b919050565b600080600080608085870312156105dd57600080fd5b6105e68561059e565b93506105f46020860161059e565b925060408501359150606085013567ffffffffffffffff81111561061757600080fd5b8501601f8101871361062857600080fd5b61063787823560208401610528565b91505092959194509250565b60006020828403121561065557600080fd5b813567ffffffffffffffff81111561066c57600080fd5b8201601f8101841361067d57600080fd5b61068c84823560208401610528565b949350505050565b6000602082840312156106a657600080fd5b5035919050565b6000815180845260005b818110156106d3576020818501810151868301820152016106b7565b818111156106e5576000602083870101525b50601f01601f19169290920160200192915050565b60208152600061070d60208301846106ad565b9392505050565b60608152600061072760608301866106ad565b828103602084015261073981866106ad565b915050826040830152949350505050565b6060815260006107716060830160078152665075746177617960c81b602082015260400190565b8281036020840152602c81527f53746f72616765205265706f7274205570646174653a2041737365742041646460208201527f656420417373657420696420000000000000000000000000000000000000000060408201526060810191505082604083015292915050565b6060815260006108036060830160078152665075746177617960c81b602082015260400190565b8281036020840152600e81527f46726565205261636b204e6f2e2000000000000000000000000000000000000060208201526040810191505082604083015292915050565b6000821982111561086957634e487b7160e01b600052601160045260246000fd5b500190565b600181811c9082168061088257607f821691505b602082108114156108a357634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fdfe526571756573742053746f72616765204c6f636174696f6e20666f722041737365742049643a20a26469706673582212208a15e2ed7e16a3362528255c7ed529a8546e39ad3219ce690667ce2861e2e67064736f6c63430008070033";

type PutawayConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PutawayConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Putaway__factory extends ContractFactory {
  constructor(...args: PutawayConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Putaway> {
    return super.deploy(overrides || {}) as Promise<Putaway>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Putaway {
    return super.attach(address) as Putaway;
  }
  override connect(signer: Signer): Putaway__factory {
    return super.connect(signer) as Putaway__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PutawayInterface {
    return new utils.Interface(_abi) as PutawayInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Putaway {
    return new Contract(address, _abi, signerOrProvider) as Putaway;
  }
}
