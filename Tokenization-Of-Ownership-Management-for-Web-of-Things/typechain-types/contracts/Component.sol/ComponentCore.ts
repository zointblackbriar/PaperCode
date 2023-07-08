/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface ComponentCoreInterface extends utils.Interface {
  functions: {
    "abc()": FunctionFragment;
    "addRole(address,address)": FunctionFragment;
    "getAge()": FunctionFragment;
    "getConractAddressComponetCore()": FunctionFragment;
    "getName()": FunctionFragment;
    "hasRole(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "abc"
      | "addRole"
      | "getAge"
      | "getConractAddressComponetCore"
      | "getName"
      | "hasRole"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "abc", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addRole",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "getAge", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getConractAddressComponetCore",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getName", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "abc", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getAge", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getConractAddressComponetCore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getName", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;

  events: {};
}

export interface ComponentCore extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ComponentCoreInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    abc(overrides?: CallOverrides): Promise<[string]>;

    addRole(
      account: PromiseOrValue<string>,
      componentrole: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAge(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getConractAddressComponetCore(overrides?: CallOverrides): Promise<[string]>;

    getName(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role_address: PromiseOrValue<string>,
      object: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  abc(overrides?: CallOverrides): Promise<string>;

  addRole(
    account: PromiseOrValue<string>,
    componentrole: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAge(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getConractAddressComponetCore(overrides?: CallOverrides): Promise<string>;

  getName(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role_address: PromiseOrValue<string>,
    object: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    abc(overrides?: CallOverrides): Promise<string>;

    addRole(
      account: PromiseOrValue<string>,
      componentrole: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getAge(overrides?: CallOverrides): Promise<BigNumber>;

    getConractAddressComponetCore(overrides?: CallOverrides): Promise<string>;

    getName(overrides?: CallOverrides): Promise<string>;

    hasRole(
      role_address: PromiseOrValue<string>,
      object: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    abc(overrides?: CallOverrides): Promise<BigNumber>;

    addRole(
      account: PromiseOrValue<string>,
      componentrole: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAge(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getConractAddressComponetCore(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getName(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    hasRole(
      role_address: PromiseOrValue<string>,
      object: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    abc(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addRole(
      account: PromiseOrValue<string>,
      componentrole: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAge(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getConractAddressComponetCore(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getName(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role_address: PromiseOrValue<string>,
      object: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}