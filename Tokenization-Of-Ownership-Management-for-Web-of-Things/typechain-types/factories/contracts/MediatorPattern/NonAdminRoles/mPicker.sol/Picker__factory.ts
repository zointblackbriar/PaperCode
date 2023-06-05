/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  Picker,
  PickerInterface,
} from "../../../../../contracts/MediatorPattern/NonAdminRoles/mPicker.sol/Picker";

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
    name: "OrderReceived",
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
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "UpdateInventoryRecord",
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
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getStorageLoc",
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
    name: "inventoryDelivered",
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
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "packInventory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pickInventory",
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
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "receiveOrder",
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
    name: "updateInventoryRecord",
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
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405261014860015534801561001657600080fd5b50610924806100266000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80631fd3639b11610081578063a89060b51161005b578063a89060b5146101e5578063c47f0027146101f8578063ec16a6af1461020b57600080fd5b80631fd3639b146101b157806332a2c5d0146101c457806397bab12f146101d257600080fd5b806317d7de7c116100b257806317d7de7c146101505780631cd34347146101655780631f2cd65d1461019e57600080fd5b806303a638e5146100ce578063150b7a02146100e3575b600080fd5b6100e16100dc3660046106cf565b61021e565b005b61011a6100f1366004610602565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020015b60405180910390f35b6101586102bf565b60405161014791906106e8565b60408051808201909152600e81527f5069636b20496e76656e746f72790000000000000000000000000000000000006020820152610158565b6100e16101ac3660046106cf565b610351565b6100e16101bf3660046106cf565b610380565b604051308152602001610147565b6100e16101e03660046106cf565b6103ac565b6100e16101f33660046106cf565b610446565b6100e161020636600461067e565b610475565b6100e16102193660046106cf565b61048c565b6040805160608082526007908201527f5061636b696e6700000000000000000000000000000000000000000000000000608082015260a060208201819052601b908201527f496e76656e746f7279205061636b6564204173736574204964203a000000000060c08201529081018290527fc57fe612d7b32b5a0c9de84cc9e411bd87aa0acee51d87341343a7606c6f28d59060e0015b60405180910390a150565b6060600080546102ce9061089d565b80601f01602080910402602001604051908101604052809291908181526020018280546102fa9061089d565b80156103475780601f1061031c57610100808354040283529160200191610347565b820191906000526020600020905b81548152906001019060200180831161032a57829003601f168201915b5050505050905090565b7f57a4e806546685802b89cc251949cd35162a36cceb14853290289723210ba93c816040516102b49190610842565b6040517f920a784f8539e7a38804b579f1af1be102b6085a55b73857d2ec5a53230b94c790600090a150565b6040805160608082526007908201527f53746f7261676500000000000000000000000000000000000000000000000000608082015260a060208201819052601d908201527f4f7264657220526563656976656420666f722041737365742049643a2000000060c08201529081018290527fb4af109ce109b00e1351d01065ff54d94352b2fe8791baeaaa4ed250ece5fa9b9060e0016102b4565b7fb2224e66f9b26d75592864c2c683950317e4e20f102369ab7207d8a09ed80708816040516102b4919061073d565b80516104889060009060208401906104ca565b5050565b7f8426ac1eee4d18008b476f31884d3934dd0711f61562f19d7996706bcaee9f6081826001546104bc9190610877565b6040516102b49291906107cf565b8280546104d69061089d565b90600052602060002090601f0160209004810192826104f8576000855561053e565b82601f1061051157805160ff191683800117855561053e565b8280016001018555821561053e579182015b8281111561053e578251825591602001919060010190610523565b5061054a92915061054e565b5090565b5b8082111561054a576000815560010161054f565b600067ffffffffffffffff8084111561057e5761057e6108d8565b604051601f8501601f19908116603f011681019082821181831017156105a6576105a66108d8565b816040528093508581528686860111156105bf57600080fd5b858560208301376000602087830101525050509392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146105fd57600080fd5b919050565b6000806000806080858703121561061857600080fd5b610621856105d9565b935061062f602086016105d9565b925060408501359150606085013567ffffffffffffffff81111561065257600080fd5b8501601f8101871361066357600080fd5b61067287823560208401610563565b91505092959194509250565b60006020828403121561069057600080fd5b813567ffffffffffffffff8111156106a757600080fd5b8201601f810184136106b857600080fd5b6106c784823560208401610563565b949350505050565b6000602082840312156106e157600080fd5b5035919050565b600060208083528351808285015260005b81811015610715578581018301518582016040015282016106f9565b81811115610727576000604083870101525b50601f01601f1916929092016040019392505050565b6060815260006107646060830160078152665069636b696e6760c81b602082015260400190565b8281036020840152602881527f53746f72616765205265706f7274205570646174653a2044656c65746520417360208201527f7365742049643a2000000000000000000000000000000000000000000000000060408201526060810191505082604083015292915050565b6080815260006107f66080830160078152665069636b696e6760c81b602082015260400190565b8281036020840152601181527f53746f72616765204c6f636174696f6e200000000000000000000000000000006020820152604081019150508360408301528260608301529392505050565b6040815260006108696040830160078152665069636b696e6760c81b602082015260400190565b905082602083015292915050565b6000821982111561089857634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806108b157607f821691505b602082108114156108d257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fdfea26469706673582212200138264c025252d01857d9ddba6d107a4f638e91172a94659f2434d5a41e8c9064736f6c63430008070033";

type PickerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PickerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Picker__factory extends ContractFactory {
  constructor(...args: PickerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Picker> {
    return super.deploy(overrides || {}) as Promise<Picker>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Picker {
    return super.attach(address) as Picker;
  }
  override connect(signer: Signer): Picker__factory {
    return super.connect(signer) as Picker__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PickerInterface {
    return new utils.Interface(_abi) as PickerInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Picker {
    return new Contract(address, _abi, signerOrProvider) as Picker;
  }
}
