/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  Manager,
  ManagerInterface,
} from "../../../../../contracts/MediatorPattern/NonAdminRoles/mManager.sol/Manager";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
    inputs: [],
    name: "job",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506104d4806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c806332a2c5d01161005057806332a2c5d0146100ee57806358e7ec3c146100fc578063c47f00271461013557600080fd5b8063150b7a021461006c57806317d7de7c146100d9575b600080fd5b6100a361007a36600461032b565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020015b60405180910390f35b6100e161014a565b6040516100d091906103f8565b6040513081526020016100d0565b60408051808201909152601081527f4d616e6167652057617265686f7573650000000000000000000000000000000060208201526100e1565b6101486101433660046103a7565b6101dc565b005b6060600080546101599061044d565b80601f01602080910402602001604051908101604052809291908181526020018280546101859061044d565b80156101d25780601f106101a7576101008083540402835291602001916101d2565b820191906000526020600020905b8154815290600101906020018083116101b557829003601f168201915b5050505050905090565b80516101ef9060009060208401906101f3565b5050565b8280546101ff9061044d565b90600052602060002090601f0160209004810192826102215760008555610267565b82601f1061023a57805160ff1916838001178555610267565b82800160010185558215610267579182015b8281111561026757825182559160200191906001019061024c565b50610273929150610277565b5090565b5b808211156102735760008155600101610278565b600067ffffffffffffffff808411156102a7576102a7610488565b604051601f8501601f19908116603f011681019082821181831017156102cf576102cf610488565b816040528093508581528686860111156102e857600080fd5b858560208301376000602087830101525050509392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461032657600080fd5b919050565b6000806000806080858703121561034157600080fd5b61034a85610302565b935061035860208601610302565b925060408501359150606085013567ffffffffffffffff81111561037b57600080fd5b8501601f8101871361038c57600080fd5b61039b8782356020840161028c565b91505092959194509250565b6000602082840312156103b957600080fd5b813567ffffffffffffffff8111156103d057600080fd5b8201601f810184136103e157600080fd5b6103f08482356020840161028c565b949350505050565b600060208083528351808285015260005b8181101561042557858101830151858201604001528201610409565b81811115610437576000604083870101525b50601f01601f1916929092016040019392505050565b600181811c9082168061046157607f821691505b6020821081141561048257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220fe9ed9d8f7c4d442d9d691d08c6001dc24fd3d6ecdd5123e1b6bf3837e9bf12b64736f6c63430008070033";

type ManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Manager__factory extends ContractFactory {
  constructor(...args: ManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Manager> {
    return super.deploy(overrides || {}) as Promise<Manager>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Manager {
    return super.attach(address) as Manager;
  }
  override connect(signer: Signer): Manager__factory {
    return super.connect(signer) as Manager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ManagerInterface {
    return new utils.Interface(_abi) as ManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Manager {
    return new Contract(address, _abi, signerOrProvider) as Manager;
  }
}
