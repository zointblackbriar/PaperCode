/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface VerifierInterface extends utils.Interface {
  functions: {
    "accessPolicy(string,string,uint256)": FunctionFragment;
    "accessResource(string,string,uint256,uint256)": FunctionFragment;
    "compareStringsbyBytes(string,string)": FunctionFragment;
    "getContractAddress()": FunctionFragment;
    "getNFTMetadata(string)": FunctionFragment;
    "makeAccessPolicy()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setIssuer(address)": FunctionFragment;
    "stringToUint(string)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "verify(string,string,uint256,address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "accessPolicy"
      | "accessResource"
      | "compareStringsbyBytes"
      | "getContractAddress"
      | "getNFTMetadata"
      | "makeAccessPolicy"
      | "owner"
      | "renounceOwnership"
      | "setIssuer"
      | "stringToUint"
      | "transferOwnership"
      | "verify"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "accessPolicy",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "accessResource",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "compareStringsbyBytes",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getContractAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNFTMetadata",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "makeAccessPolicy",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setIssuer",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "stringToUint",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "verify",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "accessPolicy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "accessResource",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "compareStringsbyBytes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getContractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNFTMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "makeAccessPolicy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setIssuer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stringToUint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;

  events: {
    "AccessResult(string)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AccessResult"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface AccessResultEventObject {
  access: string;
}
export type AccessResultEvent = TypedEvent<[string], AccessResultEventObject>;

export type AccessResultEventFilter = TypedEventFilter<AccessResultEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface Verifier extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VerifierInterface;

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
    accessPolicy(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    accessResource(
      resource_name: PromiseOrValue<string>,
      role: PromiseOrValue<string>,
      access_type: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    compareStringsbyBytes(
      s1: PromiseOrValue<string>,
      s2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getContractAddress(overrides?: CallOverrides): Promise<[string]>;

    getNFTMetadata(
      tokenUri: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    makeAccessPolicy(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setIssuer(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stringToUint(
      s: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    verify(
      role: PromiseOrValue<string>,
      resource_name: PromiseOrValue<string>,
      tokenUri: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      issuer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  accessPolicy(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  accessResource(
    resource_name: PromiseOrValue<string>,
    role: PromiseOrValue<string>,
    access_type: PromiseOrValue<BigNumberish>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  compareStringsbyBytes(
    s1: PromiseOrValue<string>,
    s2: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getContractAddress(overrides?: CallOverrides): Promise<string>;

  getNFTMetadata(
    tokenUri: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  makeAccessPolicy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setIssuer(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stringToUint(
    s: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  verify(
    role: PromiseOrValue<string>,
    resource_name: PromiseOrValue<string>,
    tokenUri: PromiseOrValue<BigNumberish>,
    account: PromiseOrValue<string>,
    issuer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    accessPolicy(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    accessResource(
      resource_name: PromiseOrValue<string>,
      role: PromiseOrValue<string>,
      access_type: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    compareStringsbyBytes(
      s1: PromiseOrValue<string>,
      s2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getContractAddress(overrides?: CallOverrides): Promise<string>;

    getNFTMetadata(
      tokenUri: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    makeAccessPolicy(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setIssuer(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    stringToUint(
      s: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    verify(
      role: PromiseOrValue<string>,
      resource_name: PromiseOrValue<string>,
      tokenUri: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      issuer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "AccessResult(string)"(access?: null): AccessResultEventFilter;
    AccessResult(access?: null): AccessResultEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    accessPolicy(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    accessResource(
      resource_name: PromiseOrValue<string>,
      role: PromiseOrValue<string>,
      access_type: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    compareStringsbyBytes(
      s1: PromiseOrValue<string>,
      s2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getContractAddress(overrides?: CallOverrides): Promise<BigNumber>;

    getNFTMetadata(
      tokenUri: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    makeAccessPolicy(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setIssuer(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stringToUint(
      s: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    verify(
      role: PromiseOrValue<string>,
      resource_name: PromiseOrValue<string>,
      tokenUri: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      issuer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    accessPolicy(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    accessResource(
      resource_name: PromiseOrValue<string>,
      role: PromiseOrValue<string>,
      access_type: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    compareStringsbyBytes(
      s1: PromiseOrValue<string>,
      s2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getContractAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNFTMetadata(
      tokenUri: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    makeAccessPolicy(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setIssuer(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stringToUint(
      s: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    verify(
      role: PromiseOrValue<string>,
      resource_name: PromiseOrValue<string>,
      tokenUri: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      issuer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}