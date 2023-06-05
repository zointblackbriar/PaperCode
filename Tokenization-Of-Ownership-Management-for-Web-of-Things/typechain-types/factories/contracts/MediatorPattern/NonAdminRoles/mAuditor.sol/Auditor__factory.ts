/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  Auditor,
  AuditorInterface,
} from "../../../../../contracts/MediatorPattern/NonAdminRoles/mAuditor.sol/Auditor";

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
    ],
    name: "CreateInspectionReport",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "DeleteInspectionReport",
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
    name: "ItemInspected",
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
    name: "createInspectionReport",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deleteInspectionReport",
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
    name: "inspectInventory",
    outputs: [],
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
        name: "Id",
        type: "uint256",
      },
    ],
    name: "updateInspectionReport",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061061e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063cbf653c01161005b578063cbf653c014610132578063d3022fe81461013a578063ebc56a221461014d578063ee06c7201461016057600080fd5b8063150b7a021461008d57806317d7de7c146100fa57806332a2c5d01461010f578063c47f00271461011d575b600080fd5b6100c461009b36600461045c565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020015b60405180910390f35b610102610173565b6040516100f19190610542565b6040513081526020016100f1565b61013061012b3660046104d8565b610205565b005b61013061021c565b610130610148366004610529565b610247565b61013061015b366004610529565b61027e565b61013061016e366004610529565b61028a565b60606000805461018290610597565b80601f01602080910402602001604051908101604052809291908181526020018280546101ae90610597565b80156101fb5780601f106101d0576101008083540402835291602001916101fb565b820191906000526020600020905b8154815290600101906020018083116101de57829003601f168201915b5050505050905090565b8051610218906000906020840190610324565b5050565b6040517f994121a9939dd8a3456146ebbf410185442a0c1856dc4cdf12ec8644cb5ca37e90600090a1565b6040518181527fd2878a39332fd7fa5772f8464219762e150b5c0d7c09c0e1b4bdaad3ad809226906020015b60405180910390a150565b6102878161028a565b50565b604080516060808252600a908201527f496e7370656374696f6e00000000000000000000000000000000000000000000608082015260a0602082018190526018908201527f417373657420496e73706563746564204173736574206964000000000000000060c08201529081018290527f85f86201955fadd6e813d9db89f07122b602f9eb6adbe76ebcdb3db0ab2ddb369060e001610273565b82805461033090610597565b90600052602060002090601f0160209004810192826103525760008555610398565b82601f1061036b57805160ff1916838001178555610398565b82800160010185558215610398579182015b8281111561039857825182559160200191906001019061037d565b506103a49291506103a8565b5090565b5b808211156103a457600081556001016103a9565b600067ffffffffffffffff808411156103d8576103d86105d2565b604051601f8501601f19908116603f01168101908282118183101715610400576104006105d2565b8160405280935085815286868601111561041957600080fd5b858560208301376000602087830101525050509392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461045757600080fd5b919050565b6000806000806080858703121561047257600080fd5b61047b85610433565b935061048960208601610433565b925060408501359150606085013567ffffffffffffffff8111156104ac57600080fd5b8501601f810187136104bd57600080fd5b6104cc878235602084016103bd565b91505092959194509250565b6000602082840312156104ea57600080fd5b813567ffffffffffffffff81111561050157600080fd5b8201601f8101841361051257600080fd5b610521848235602084016103bd565b949350505050565b60006020828403121561053b57600080fd5b5035919050565b600060208083528351808285015260005b8181101561056f57858101830151858201604001528201610553565b81811115610581576000604083870101525b50601f01601f1916929092016040019392505050565b600181811c908216806105ab57607f821691505b602082108114156105cc57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220391153ee49b6d9539c21a092d1e01abacd782bc502db67763bf4c07c9b31c15a64736f6c63430008070033";

type AuditorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AuditorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Auditor__factory extends ContractFactory {
  constructor(...args: AuditorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Auditor> {
    return super.deploy(overrides || {}) as Promise<Auditor>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Auditor {
    return super.attach(address) as Auditor;
  }
  override connect(signer: Signer): Auditor__factory {
    return super.connect(signer) as Auditor__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AuditorInterface {
    return new utils.Interface(_abi) as AuditorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Auditor {
    return new Contract(address, _abi, signerOrProvider) as Auditor;
  }
}
