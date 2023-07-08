/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { ERC20, ERC20Interface } from "../../contracts/ERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "tokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "tokenSymbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
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
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
    inputs: [],
    name: "symbol",
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
    name: "totalSupply",
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
];

const _bytecode =
  "0x60806040526006805460ff191660121790553480156200001e57600080fd5b50604051620012da380380620012da8339810160408190526200004191620003e9565b6200004c33620000b2565b8251620000619060049060208601906200028c565b508151620000779060059060208501906200028c565b506006546000906200008e9060ff16600a620004c0565b6200009a90836200057f565b9050620000a8338262000102565b505050506200060a565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6200010c62000217565b6001600160a01b038216620001685760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064015b60405180910390fd5b62000184816003546200027560201b620006571790919060201c565b6003556001600160a01b038216600090815260016020908152604090912054620001b99183906200065762000275821b17901c565b6001600160a01b0383166000818152600160205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906200020b9085815260200190565b60405180910390a35050565b6000546001600160a01b03163314620002735760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016200015f565b565b60006200028382846200045c565b90505b92915050565b8280546200029a90620005a1565b90600052602060002090601f016020900481019282620002be576000855562000309565b82601f10620002d957805160ff191683800117855562000309565b8280016001018555821562000309579182015b8281111562000309578251825591602001919060010190620002ec565b50620003179291506200031b565b5090565b5b808211156200031757600081556001016200031c565b600082601f8301126200034457600080fd5b81516001600160401b0380821115620003615762000361620005f4565b604051601f8301601f19908116603f011681019082821181831017156200038c576200038c620005f4565b81604052838152602092508683858801011115620003a957600080fd5b600091505b83821015620003cd5785820183015181830184015290820190620003ae565b83821115620003df5760008385830101525b9695505050505050565b600080600060608486031215620003ff57600080fd5b83516001600160401b03808211156200041757600080fd5b620004258783880162000332565b945060208601519150808211156200043c57600080fd5b506200044b8682870162000332565b925050604084015190509250925092565b60008219821115620004725762000472620005de565b500190565b600181815b80851115620004b85781600019048211156200049c576200049c620005de565b80851615620004aa57918102915b93841c93908002906200047c565b509250929050565b60006200028360ff841683600082620004dc5750600162000286565b81620004eb5750600062000286565b81600181146200050457600281146200050f576200052f565b600191505062000286565b60ff841115620005235762000523620005de565b50506001821b62000286565b5060208310610133831016604e8410600b841016171562000554575081810a62000286565b62000560838362000477565b8060001904821115620005775762000577620005de565b029392505050565b60008160001904831182151516156200059c576200059c620005de565b500290565b600181811c90821680620005b657607f821691505b60208210811415620005d857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b610cc0806200061a6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063715018a6116100975780639dc29fac116100665780639dc29fac146101f9578063a9059cbb1461020c578063dd62ed3e1461021f578063f2fde38b1461025857600080fd5b8063715018a6146101b3578063893d20e8146101bb5780638da5cb5b146101e057806395d89b41146101f157600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce5671461016057806340c10f191461017557806370a082311461018a57600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b61010261026b565b60405161010f9190610b45565b60405180910390f35b61012b610126366004610b1b565b6102fd565b604051901515815260200161010f565b6003545b60405190815260200161010f565b61012b61015b366004610adf565b610313565b60065460405160ff909116815260200161010f565b610188610183366004610b1b565b61037c565b005b61013f610198366004610a91565b6001600160a01b031660009081526001602052604090205490565b61018861046f565b6000546001600160a01b03165b6040516001600160a01b03909116815260200161010f565b6000546001600160a01b03166101c8565b610102610483565b610188610207366004610b1b565b610492565b61012b61021a366004610b1b565b6105ba565b61013f61022d366004610aac565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b610188610266366004610a91565b6105c7565b60606004805461027a90610bc9565b80601f01602080910402602001604051908101604052809291908181526020018280546102a690610bc9565b80156102f35780601f106102c8576101008083540402835291602001916102f3565b820191906000526020600020905b8154815290600101906020018083116102d657829003601f168201915b5050505050905090565b600061030a33848461066a565b50600192915050565b60006103208484846107c3565b610372843361036d85604051806060016040528060288152602001610c63602891396001600160a01b038a166000908152600260209081526040808320338452909152902054919061097b565b61066a565b5060019392505050565b6103846109a7565b6001600160a01b0382166103df5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064015b60405180910390fd5b6003546103ec9082610657565b6003556001600160a01b0382166000908152600160205260409020546104129082610657565b6001600160a01b0383166000818152600160205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906104639085815260200190565b60405180910390a35050565b6104776109a7565b6104816000610a01565b565b60606005805461027a90610bc9565b61049a6109a7565b6001600160a01b0382166105165760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f730000000000000000000000000000000000000000000000000000000000000060648201526084016103d6565b61055381604051806060016040528060228152602001610c1b602291396001600160a01b038516600090815260016020526040902054919061097b565b6001600160a01b0383166000908152600160205260409020556003546105799082610a69565b6003556040518181526000906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610463565b600061030a3384846107c3565b6105cf6109a7565b6001600160a01b03811661064b5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016103d6565b61065481610a01565b50565b60006106638284610b9a565b9392505050565b6001600160a01b0383166106e55760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016103d6565b6001600160a01b0382166107615760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016103d6565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b03831661083f5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016103d6565b6001600160a01b0382166108bb5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016103d6565b6108f881604051806060016040528060268152602001610c3d602691396001600160a01b038616600090815260016020526040902054919061097b565b6001600160a01b0380851660009081526001602052604080822093909355908416815220546109279082610657565b6001600160a01b0380841660008181526001602052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906107b69085815260200190565b6000818484111561099f5760405162461bcd60e51b81526004016103d69190610b45565b505050900390565b6000546001600160a01b031633146104815760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103d6565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006106638284610bb2565b80356001600160a01b0381168114610a8c57600080fd5b919050565b600060208284031215610aa357600080fd5b61066382610a75565b60008060408385031215610abf57600080fd5b610ac883610a75565b9150610ad660208401610a75565b90509250929050565b600080600060608486031215610af457600080fd5b610afd84610a75565b9250610b0b60208501610a75565b9150604084013590509250925092565b60008060408385031215610b2e57600080fd5b610b3783610a75565b946020939093013593505050565b600060208083528351808285015260005b81811015610b7257858101830151858201604001528201610b56565b81811115610b84576000604083870101525b50601f01601f1916929092016040019392505050565b60008219821115610bad57610bad610c04565b500190565b600082821015610bc457610bc4610c04565b500390565b600181811c90821680610bdd57607f821691505b60208210811415610bfe57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfe45524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365a2646970667358221220378eb0dc64245309002ede8263f571b2eb6ff1a2ec1dbb06075ea07e16c62e2f64736f6c63430008070033";

type ERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20__factory extends ContractFactory {
  constructor(...args: ERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    tokenName: PromiseOrValue<string>,
    tokenSymbol: PromiseOrValue<string>,
    tokenAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20> {
    return super.deploy(
      tokenName,
      tokenSymbol,
      tokenAmount,
      overrides || {}
    ) as Promise<ERC20>;
  }
  override getDeployTransaction(
    tokenName: PromiseOrValue<string>,
    tokenSymbol: PromiseOrValue<string>,
    tokenAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      tokenName,
      tokenSymbol,
      tokenAmount,
      overrides || {}
    );
  }
  override attach(address: string): ERC20 {
    return super.attach(address) as ERC20;
  }
  override connect(signer: Signer): ERC20__factory {
    return super.connect(signer) as ERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20Interface {
    return new utils.Interface(_abi) as ERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC20 {
    return new Contract(address, _abi, signerOrProvider) as ERC20;
  }
}