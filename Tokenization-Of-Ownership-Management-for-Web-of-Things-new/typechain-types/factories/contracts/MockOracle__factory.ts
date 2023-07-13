/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  MockOracle,
  MockOracleInterface,
} from "../../contracts/MockOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_link",
        type: "address",
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
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
    ],
    name: "CancelOracleRequest",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "specId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "requester",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "payment",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "callbackAddr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes4",
        name: "callbackFunctionId",
        type: "bytes4",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cancelExpiration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "dataVersion",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "OracleRequest",
    type: "event",
  },
  {
    inputs: [],
    name: "EXPIRY_TIME",
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
        internalType: "bytes32",
        name: "_requestId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_payment",
        type: "uint256",
      },
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
      {
        internalType: "uint256",
        name: "_expiration",
        type: "uint256",
      },
    ],
    name: "cancelOracleRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_requestId",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_data",
        type: "bytes32",
      },
    ],
    name: "fulfillOracleRequest",
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
    inputs: [],
    name: "getChainlinkToken",
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
        name: "_sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "onTokenTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_payment",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_specId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_callbackAddress",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "_callbackFunctionId",
        type: "bytes4",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_dataVersion",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "oracleRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610d13380380610d138339818101604052602081101561003357600080fd5b5051600080546001600160a01b039092166001600160a01b0319909216919091179055610cae806100656000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c80634b602282116100505780634b602282146101855780636ee4d5531461019f578063a4c0ed36146101d857610072565b8063165d35e1146100775780631f8f238c1461009b57806340429946146100d2575b600080fd5b61007f610293565b604080516001600160a01b039092168252519081900360200190f35b6100be600480360360408110156100b157600080fd5b50803590602001356102a2565b604080519115158252519081900360200190f35b61018360048036036101008110156100e957600080fd5b6001600160a01b038235811692602081013592604082013592606083013516916001600160e01b03196080820135169160a08201359160c081013591810190610100810160e082013564010000000081111561014457600080fd5b82018360208201111561015657600080fd5b8035906020019184600183028401116401000000008311171561017857600080fd5b5090925090506104e2565b005b61018d6107e4565b60408051918252519081900360200190f35b610183600480360360808110156101b557600080fd5b508035906020810135906001600160e01b031960408201351690606001356107ea565b610183600480360360608110156101ee57600080fd5b6001600160a01b038235169160208101359181019060608101604082013564010000000081111561021e57600080fd5b82018360208201111561023057600080fd5b8035906020019184600183028401116401000000008311171561025257600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506109a9945050505050565b6000546001600160a01b031690565b60008281526001602052604081205483906001600160a01b031661030d576040805162461bcd60e51b815260206004820152601b60248201527f4d757374206861766520612076616c6964207265717565737449640000000000604482015290519081900360640190fd5b610315610c61565b506000848152600160208181526040808420815180830190925280546001600160a01b03811683526001600160e01b031974010000000000000000000000000000000000000000820460e01b168385015294899052929091527fffffffffffffffff000000000000000000000000000000000000000000000000909216905562061a805a10156103ec576040805162461bcd60e51b815260206004820181905260248201527f4d7573742070726f7669646520636f6e73756d657220656e6f75676820676173604482015290519081900360640190fd5b805160208083015160408051602481018a905260448082018a9052825180830390910181526064909101825292830180516001600160e01b03166001600160e01b03199093169290921782525182516000946001600160a01b0316939282918083835b6020831061046e5780518252601f19909201916020918201910161044f565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146104d0576040519150601f19603f3d011682016040523d82523d6000602084013e6104d5565b606091505b5090979650505050505050565b6104ea610293565b6001600160a01b0316336001600160a01b03161461054f576040805162461bcd60e51b815260206004820152601360248201527f4d75737420757365204c494e4b20746f6b656e00000000000000000000000000604482015290519081900360640190fd5b60005486906001600160a01b03808316911614156105b4576040805162461bcd60e51b815260206004820152601760248201527f43616e6e6f742063616c6c6261636b20746f204c494e4b000000000000000000604482015290519081900360640190fd5b604080516bffffffffffffffffffffffff1960608d901b166020808301919091526034808301899052835180840390910181526054909201835281519181019190912060008181526001909252919020546001600160a01b031615610660576040805162461bcd60e51b815260206004820152601460248201527f4d75737420757365206120756e69717565204944000000000000000000000000604482015290519081900360640190fd5b60006106744261012c63ffffffff610c0016565b905060405180604001604052808a6001600160a01b03168152602001896001600160e01b0319168152506001600084815260200190815260200160002060008201518160000160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060208201518160000160146101000a81548163ffffffff021916908360e01c0217905550905050897fd8d7ecc4800d25fa53ce0372f13a416d98907a7ef3d8d3bdd79cf4fe75529c658d848e8d8d878d8d8d604051808a6001600160a01b03166001600160a01b03168152602001898152602001888152602001876001600160a01b03166001600160a01b03168152602001866001600160e01b0319166001600160e01b0319168152602001858152602001848152602001806020018281038252848482818152602001925080828437600083820152604051601f909101601f19169092018290039c50909a5050505050505050505050a2505050505050505050505050565b61012c81565b6000848152600160205260409020546001600160a01b0316610853576040805162461bcd60e51b815260206004820152601460248201527f4d75737420757365206120756e69717565204944000000000000000000000000604482015290519081900360640190fd5b428111156108a8576040805162461bcd60e51b815260206004820152601660248201527f52657175657374206973206e6f74206578706972656400000000000000000000604482015290519081900360640190fd5b60008481526001602052604080822080547fffffffffffffffff0000000000000000000000000000000000000000000000001690555185917fa7842b9ec549398102c0d91b1b9919b2f20558aefdadf57528a95c6cd3292e9391a260008054604080517fa9059cbb0000000000000000000000000000000000000000000000000000000081523360048201526024810187905290516001600160a01b039092169263a9059cbb926044808401936020939083900390910190829087803b15801561097157600080fd5b505af1158015610985573d6000803e3d6000fd5b505050506040513d602081101561099b57600080fd5b50516109a357fe5b50505050565b6109b1610293565b6001600160a01b0316336001600160a01b031614610a16576040805162461bcd60e51b815260206004820152601360248201527f4d75737420757365204c494e4b20746f6b656e00000000000000000000000000604482015290519081900360640190fd5b8051819060441115610a6f576040805162461bcd60e51b815260206004820152601660248201527f496e76616c69642072657175657374206c656e67746800000000000000000000604482015290519081900360640190fd5b602082015182906001600160e01b031981167f404299460000000000000000000000000000000000000000000000000000000014610af4576040805162461bcd60e51b815260206004820152601e60248201527f4d757374207573652077686974656c69737465642066756e6374696f6e730000604482015290519081900360640190fd5b8560248501528460448501526000306001600160a01b0316856040518082805190602001908083835b60208310610b3c5780518252601f199092019160209182019101610b1d565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114610b9c576040519150601f19603f3d011682016040523d82523d6000602084013e610ba1565b606091505b5050905080610bf7576040805162461bcd60e51b815260206004820152601860248201527f556e61626c6520746f2063726561746520726571756573740000000000000000604482015290519081900360640190fd5b50505050505050565b600082820183811015610c5a576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b60408051808201909152600080825260208201529056fea264697066735822122026141457ad31deb7983699d3af3d1a17d4bf007350eb007a86b9f39223a5f25064736f6c63430006060033";

type MockOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockOracle__factory extends ContractFactory {
  constructor(...args: MockOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _link: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockOracle> {
    return super.deploy(_link, overrides || {}) as Promise<MockOracle>;
  }
  override getDeployTransaction(
    _link: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_link, overrides || {});
  }
  override attach(address: string): MockOracle {
    return super.attach(address) as MockOracle;
  }
  override connect(signer: Signer): MockOracle__factory {
    return super.connect(signer) as MockOracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockOracleInterface {
    return new utils.Interface(_abi) as MockOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockOracle {
    return new Contract(address, _abi, signerOrProvider) as MockOracle;
  }
}
