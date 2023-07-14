/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Resource, ResourceInterface } from "../../contracts/Resource";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "contractName",
        type: "string",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [],
    name: "ResourceCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "resource_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "role",
        type: "string",
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
    name: "createResource",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
      {
        internalType: "string",
        name: "role",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "access_type",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "tokenUri",
        type: "string",
      },
    ],
    name: "deleteResource",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "role",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "access_type",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "tokenUri",
        type: "string",
      },
    ],
    name: "readResource",
    outputs: [],
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
      {
        internalType: "string",
        name: "role",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "access_type",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "tokenUri",
        type: "string",
      },
    ],
    name: "updateResource",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052604051610749380380610749833981016040819052610022916100d5565b805161003590600090602084019061003c565b50506101f5565b828054610048906101a4565b90600052602060002090601f01602090048101928261006a57600085556100b0565b82601f1061008357805160ff19168380011785556100b0565b828001600101855582156100b0579182015b828111156100b0578251825591602001919060010190610095565b506100bc9291506100c0565b5090565b5b808211156100bc57600081556001016100c1565b600060208083850312156100e857600080fd5b82516001600160401b03808211156100ff57600080fd5b818501915085601f83011261011357600080fd5b815181811115610125576101256101df565b604051601f8201601f19908116603f0116810190838211818310171561014d5761014d6101df565b81604052828152888684870101111561016557600080fd5b600093505b82841015610187578484018601518185018701529285019261016a565b828411156101985760008684830101525b98975050505050505050565b600181811c908216806101b857607f821691505b602082108114156101d957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b610545806102046000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063bfe120ed11610050578063bfe120ed146100ad578063c3a6eb35146100ad578063decc86e5146100ad57600080fd5b806317d7de7c1461006c5780637f87f7351461008a575b600080fd5b6100746100c3565b6040516100819190610469565b60405180910390f35b61009d610098366004610339565b610155565b6040519015158152602001610081565b6100c16100bb3660046103d7565b50505050565b005b6060600080546100d2906104be565b80601f01602080910402602001604051908101604052809291908181526020018280546100fe906104be565b801561014b5780601f106101205761010080835404028352916020019161014b565b820191906000526020600020905b81548152906001019060200180831161012e57829003601f168201915b5050505050905090565b6001546040517f255efb7000000000000000000000000000000000000000000000000000000000815233600482015260806024820152600d608482018190527f73616d706c65776f746e616d650000000000000000000000000000000000000060a483015260c06044830152601460c48301527f73616d706c65776f746465736372697074696f6e00000000000000000000000060e483015261010060648301526101048201527f73616d706c65776f74737065630000000000000000000000000000000000000061012482015260009173ffffffffffffffffffffffffffffffffffffffff169063255efb709061014401600060405180830381600087803b15801561026157600080fd5b505af1158015610275573d6000803e3d6000fd5b505050509695505050505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146102a757600080fd5b919050565b600082601f8301126102bd57600080fd5b813567ffffffffffffffff808211156102d8576102d86104f9565b604051601f8301601f19908116603f01168101908282118183101715610300576103006104f9565b8160405283815286602085880101111561031957600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060008060008060c0878903121561035257600080fd5b863567ffffffffffffffff8082111561036a57600080fd5b6103768a838b016102ac565b9750602089013591508082111561038c57600080fd5b5061039989828a016102ac565b955050604087013593506103af60608801610283565b92506103bd60808801610283565b91506103cb60a08801610283565b90509295509295509295565b600080600080608085870312156103ed57600080fd5b843567ffffffffffffffff8082111561040557600080fd5b610411888389016102ac565b9550602087013591508082111561042757600080fd5b610433888389016102ac565b945060408701359350606087013591508082111561045057600080fd5b5061045d878288016102ac565b91505092959194509250565b600060208083528351808285015260005b818110156104965785810183015185820160400152820161047a565b818111156104a8576000604083870101525b50601f01601f1916929092016040019392505050565b600181811c908216806104d257607f821691505b602082108114156104f357634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220e1efdb1e59092cbadc635025ceedd71d1ec18c163a8c1df9662eec61cb1527ce64736f6c63430008070033";

type ResourceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ResourceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Resource__factory extends ContractFactory {
  constructor(...args: ResourceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    contractName: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<Resource> {
    return super.deploy(contractName, overrides || {}) as Promise<Resource>;
  }
  override getDeployTransaction(
    contractName: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(contractName, overrides || {});
  }
  override attach(address: string): Resource {
    return super.attach(address) as Resource;
  }
  override connect(signer: Signer): Resource__factory {
    return super.connect(signer) as Resource__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ResourceInterface {
    return new utils.Interface(_abi) as ResourceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Resource {
    return new Contract(address, _abi, signerOrProvider) as Resource;
  }
}