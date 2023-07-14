/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
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
} from "../../common";

export interface HelperContractInterface extends utils.Interface {
  functions: {
    "foo()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "foo"): FunctionFragment;

  encodeFunctionData(functionFragment: "foo", values?: undefined): string;

  decodeFunctionResult(functionFragment: "foo", data: BytesLike): Result;

  events: {};
}

export interface HelperContract extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: HelperContractInterface;

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
    foo(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  foo(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    foo(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    foo(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    foo(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}