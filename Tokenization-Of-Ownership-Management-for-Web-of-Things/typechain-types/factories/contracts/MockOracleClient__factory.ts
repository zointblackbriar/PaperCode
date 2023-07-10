/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  MockOracleClient,
  MockOracleClientInterface,
} from "../../contracts/MockOracleClient";

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
        internalType: "bytes32",
        name: "data",
        type: "bytes32",
      },
    ],
    name: "ByteData",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "data",
        type: "string",
      },
    ],
    name: "ReadData",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "content",
        type: "string",
      },
    ],
    name: "Tweet",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "baz",
        type: "string[]",
      },
    ],
    name: "bar",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "data",
        type: "bytes32",
      },
    ],
    name: "fulfill",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenUri",
        type: "uint256",
      },
    ],
    name: "requestVolumeData",
    outputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "content",
        type: "string",
      },
    ],
    name: "sendTweet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "source",
        type: "string",
      },
    ],
    name: "stringToBytes32",
    outputs: [
      {
        internalType: "bytes32",
        name: "result",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506200001d3362000222565b60408051608081018252600b8183019081526a185c1c1bda5b9d1b595b9d60aa1b6060830152815281518083019092526001808352600360fc1b60208481019190915280830193909352600080529091526200009d907fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb4990600262000272565b5060408051608081018252600b8183019081526a185c1c1bda5b9d1b595b9d60aa1b6060830152815281518083019092526001808352603160f81b6020848101919091528083019390935260008190529091526200011f907fcc69885fda6bcc1a4ace058b4a62bf5e179ea78fd58a1ccd71c22cc9b688792f90600262000272565b50604080516080810182526007818301908152661c9958d95a5c1d60ca1b6060830152815281518083019092526001808352603160f81b602084810191909152808301939093526002600081905292526200019d917fd9d16d34ffb15ba3a3d852f0d403e2ce1d691fb54de27ac87cd2f993f3ec330f919062000272565b50604080516080810182526007818301908152661c9958d95a5c1d60ca1b6060830152815281518083019092526001808352600360fc1b6020848101919091528083019390935260036000529091526200021b907f7dfe757ecd65cbd7922a9c0161e935dd7fdbcc0e999689c7d31633896b1fc60b90600262000272565b5062000418565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b828054828255906000526020600020908101928215620002c4579160200282015b82811115620002c45782518051620002b3918491602090910190620002d6565b509160200191906001019062000293565b50620002d292915062000361565b5090565b828054620002e490620003db565b90600052602060002090601f01602090048101928262000308576000855562000353565b82601f106200032357805160ff191683800117855562000353565b8280016001018555821562000353579182015b828111156200035357825182559160200191906001019062000336565b50620002d292915062000382565b80821115620002d257600062000378828262000399565b5060010162000361565b5b80821115620002d2576000815560010162000383565b508054620003a790620003db565b6000825580601f10620003b8575050565b601f016020900490600052602060002090810190620003d8919062000382565b50565b600181811c90821680620003f057607f821691505b602082108114156200041257634e487b7160e01b600052602260045260246000fd5b50919050565b61094980620004286000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638da5cb5b1161005b5780638da5cb5b146100f4578063cfb519281461010f578063dc6e186914610122578063f2fde38b1461013557600080fd5b80635508ff941461008d578063684ede7f146100b6578063715018a6146100d757806382cf776f146100e1575b600080fd5b6100a061009b3660046106d2565b610148565b6040516100ad91906107e9565b60405180910390f35b6100c96100c43660046106d2565b6102cf565b6040519081526020016100ad565b6100df610384565b005b6100df6100ef36600461065d565b610398565b6000546040516001600160a01b0390911681526020016100ad565b6100c961011d3660046106eb565b6103fe565b6100df6101303660046106eb565b61041b565b6100df610143366004610634565b610455565b606060006040516020016101e0907f7b226e616d65223a20226170706f696e746d656e74000000000000000000000081527f222c2022616363657373223a202230222c202261747472696275746573223a0060158201527f5b7b226b6579223a2274726169745f74797065222c2276616c7565223a2231226034820152617d5d60f01b6054820152607d60f81b605682015260570190565b60408051601f1981840301815260025460009081526001602090815283822080548083028701830190955284865292955091929184015b828210156102c3578382906000526020600020018054610236906108ac565b80601f0160208091040260200160405190810160405280929190818152602001828054610262906108ac565b80156102af5780601f10610284576101008083540402835291602001916102af565b820191906000526020600020905b81548152906001019060200180831161029257829003601f168201915b505050505081526020019060010190610217565b50505050915050919050565b6002819055604080517f7b226e616d65223a20226170706f696e746d656e74000000000000000000000060208201527f222c2022616363657373223a202230222c202261747472696275746573223a0060358201527f5b7b226b6579223a2274726169745f74797065222c2276616c7565223a2231226054820152617d5d60f01b6074820152607d60f81b607682015281516057818303018152607790910190915260009061037d816103fe565b9392505050565b61038c6104ea565b6103966000610544565b565b6103fa828260008181106103ae576103ae6108e7565b90506020028101906103c0919061085e565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506105ac92505050565b5050565b805160009082906104125750600092915050565b50506020015190565b7f6653c0a1cf688aba87a4010ef20b068ddb2deb21931825f8e5da042cab4417658160405161044a919061084b565b60405180910390a150565b61045d6104ea565b6001600160a01b0381166104de5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6104e781610544565b50565b6000546001600160a01b031633146103965760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104d5565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6104e7816040516024016105c0919061084b565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f41304fac0000000000000000000000000000000000000000000000000000000017815281516a636f6e736f6c652e6c6f67916000918291845afa505050565b60006020828403121561064657600080fd5b81356001600160a01b038116811461037d57600080fd5b6000806020838503121561067057600080fd5b823567ffffffffffffffff8082111561068857600080fd5b818501915085601f83011261069c57600080fd5b8135818111156106ab57600080fd5b8660208260051b85010111156106c057600080fd5b60209290920196919550909350505050565b6000602082840312156106e457600080fd5b5035919050565b6000602082840312156106fd57600080fd5b813567ffffffffffffffff8082111561071557600080fd5b818401915084601f83011261072957600080fd5b81358181111561073b5761073b6108fd565b604051601f8201601f19908116603f01168101908382118183101715610763576107636108fd565b8160405282815287602084870101111561077c57600080fd5b826020860160208301376000928101602001929092525095945050505050565b6000815180845260005b818110156107c2576020818501810151868301820152016107a6565b818111156107d4576000602083870101525b50601f01601f19169290920160200192915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561083e57603f1988860301845261082c85835161079c565b94509285019290850190600101610810565b5092979650505050505050565b60208152600061037d602083018461079c565b6000808335601e1984360301811261087557600080fd5b83018035915067ffffffffffffffff82111561089057600080fd5b6020019150368190038213156108a557600080fd5b9250929050565b600181811c908216806108c057607f821691505b602082108114156108e157634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220051776b14bb0ebf826ef2a326f54413e236bc66bfc3654b9afb8188d1f71207f64736f6c63430008070033";

type MockOracleClientConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockOracleClientConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockOracleClient__factory extends ContractFactory {
  constructor(...args: MockOracleClientConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockOracleClient> {
    return super.deploy(overrides || {}) as Promise<MockOracleClient>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockOracleClient {
    return super.attach(address) as MockOracleClient;
  }
  override connect(signer: Signer): MockOracleClient__factory {
    return super.connect(signer) as MockOracleClient__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockOracleClientInterface {
    return new utils.Interface(_abi) as MockOracleClientInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockOracleClient {
    return new Contract(address, _abi, signerOrProvider) as MockOracleClient;
  }
}
