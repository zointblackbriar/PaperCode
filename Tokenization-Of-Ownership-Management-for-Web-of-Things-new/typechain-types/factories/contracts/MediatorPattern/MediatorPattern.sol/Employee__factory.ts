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
import type { PromiseOrValue } from "../../../../common";
import type {
  Employee,
  EmployeeInterface,
} from "../../../../contracts/MediatorPattern/MediatorPattern.sol/Employee";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "age",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getAge",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516103f83803806103f883398101604081905261002f916100e5565b815161004290600090602085019061004c565b506001555061020e565b828054610058906101bd565b90600052602060002090601f01602090048101928261007a57600085556100c0565b82601f1061009357805160ff19168380011785556100c0565b828001600101855582156100c0579182015b828111156100c05782518255916020019190600101906100a5565b506100cc9291506100d0565b5090565b5b808211156100cc57600081556001016100d1565b600080604083850312156100f857600080fd5b82516001600160401b038082111561010f57600080fd5b818501915085601f83011261012357600080fd5b815181811115610135576101356101f8565b604051601f8201601f19908116603f0116810190838211818310171561015d5761015d6101f8565b8160405282815260209350888484870101111561017957600080fd5b600091505b8282101561019b578482018401518183018501529083019061017e565b828211156101ac5760008484830101525b969092015195979596505050505050565b600181811c908216806101d157607f821691505b602082108114156101f257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6101db8061021d6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806317d7de7c1461003b578063967e6e6514610059575b600080fd5b61004361006a565b60405161005091906100fc565b60405180910390f35b600154604051908152602001610050565b60606000805461007990610151565b80601f01602080910402602001604051908101604052809291908181526020018280546100a590610151565b80156100f25780601f106100c7576101008083540402835291602001916100f2565b820191906000526020600020905b8154815290600101906020018083116100d557829003601f168201915b5050505050905090565b600060208083528351808285015260005b818110156101295785810183015185820160400152820161010d565b8181111561013b576000604083870101525b50601f01601f1916929092016040019392505050565b600181811c9082168061016557607f821691505b6020821081141561019f577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b5091905056fea26469706673582212209266c76746175b872e7370977f4c03172e110aae0f3ef464cfa43d505ac3eb3064736f6c63430008070033";

type EmployeeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EmployeeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Employee__factory extends ContractFactory {
  constructor(...args: EmployeeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: PromiseOrValue<string>,
    age: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Employee> {
    return super.deploy(name, age, overrides || {}) as Promise<Employee>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    age: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, age, overrides || {});
  }
  override attach(address: string): Employee {
    return super.attach(address) as Employee;
  }
  override connect(signer: Signer): Employee__factory {
    return super.connect(signer) as Employee__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EmployeeInterface {
    return new utils.Interface(_abi) as EmployeeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Employee {
    return new Contract(address, _abi, signerOrProvider) as Employee;
  }
}
