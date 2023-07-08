/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  Manager888,
  Manager888Interface,
} from "../../../../contracts/MediatorPattern/AccessControlMediator.sol/Manager888";

const _abi = [
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
    name: "manageWarehouse",
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
    inputs: [],
    name: "salary",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
];

const _bytecode =
  "0x60c060405260086080819052672932b1b2b4bb32b960c11b60a09081526100299160019190610041565b50602260025534801561003b57600080fd5b50610115565b82805461004d906100da565b90600052602060002090601f01602090048101928261006f57600085556100b5565b82601f1061008857805160ff19168380011785556100b5565b828001600101855582156100b5579182015b828111156100b557825182559160200191906001019061009a565b506100c19291506100c5565b5090565b5b808211156100c157600081556001016100c6565b600181811c908216806100ee57607f821691505b6020821081141561010f57634e487b7160e01b600052602260045260246000fd5b50919050565b6104b5806101246000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c806317d7de7c1161005057806317d7de7c146100ea578063c47f0027146100ff578063e4e0e2101461011457600080fd5b80630397b6521461006c578063150b7a0214610082575b600080fd5b6002546040519081526020015b60405180910390f35b6100b961009036600461030c565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff000000000000000000000000000000000000000000000000000000009091168152602001610079565b6100f261011c565b60405161007991906103d9565b61011261010d366004610388565b6101ae565b005b6100f26101c5565b60606000805461012b9061042e565b80601f01602080910402602001604051908101604052809291908181526020018280546101579061042e565b80156101a45780601f10610179576101008083540402835291602001916101a4565b820191906000526020600020905b81548152906001019060200180831161018757829003601f168201915b5050505050905090565b80516101c19060009060208401906101d4565b5050565b60606001805461012b9061042e565b8280546101e09061042e565b90600052602060002090601f0160209004810192826102025760008555610248565b82601f1061021b57805160ff1916838001178555610248565b82800160010185558215610248579182015b8281111561024857825182559160200191906001019061022d565b50610254929150610258565b5090565b5b808211156102545760008155600101610259565b600067ffffffffffffffff8084111561028857610288610469565b604051601f8501601f19908116603f011681019082821181831017156102b0576102b0610469565b816040528093508581528686860111156102c957600080fd5b858560208301376000602087830101525050509392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461030757600080fd5b919050565b6000806000806080858703121561032257600080fd5b61032b856102e3565b9350610339602086016102e3565b925060408501359150606085013567ffffffffffffffff81111561035c57600080fd5b8501601f8101871361036d57600080fd5b61037c8782356020840161026d565b91505092959194509250565b60006020828403121561039a57600080fd5b813567ffffffffffffffff8111156103b157600080fd5b8201601f810184136103c257600080fd5b6103d18482356020840161026d565b949350505050565b600060208083528351808285015260005b81811015610406578581018301518582016040015282016103ea565b81811115610418576000604083870101525b50601f01601f1916929092016040019392505050565b600181811c9082168061044257607f821691505b6020821081141561046357634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220f6ba3b2e584e4da7eda089d5980c7a256c9e8a194fc49582c4a3c7c0a07c647764736f6c63430008070033";

type Manager888ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Manager888ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Manager888__factory extends ContractFactory {
  constructor(...args: Manager888ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Manager888> {
    return super.deploy(overrides || {}) as Promise<Manager888>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Manager888 {
    return super.attach(address) as Manager888;
  }
  override connect(signer: Signer): Manager888__factory {
    return super.connect(signer) as Manager888__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Manager888Interface {
    return new utils.Interface(_abi) as Manager888Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Manager888 {
    return new Contract(address, _abi, signerOrProvider) as Manager888;
  }
}