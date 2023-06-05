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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface IAuditorInterface extends utils.Interface {
  functions: {
    "createInspectionReport()": FunctionFragment;
    "deleteInspectionReport()": FunctionFragment;
    "getContractAddress()": FunctionFragment;
    "inspectInventory()": FunctionFragment;
    "updateInspectionReport(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createInspectionReport"
      | "deleteInspectionReport"
      | "getContractAddress"
      | "inspectInventory"
      | "updateInspectionReport"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createInspectionReport",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deleteInspectionReport",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getContractAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "inspectInventory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateInspectionReport",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "createInspectionReport",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deleteInspectionReport",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getContractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "inspectInventory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateInspectionReport",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IAuditor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IAuditorInterface;

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
    createInspectionReport(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deleteInspectionReport(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getContractAddress(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    inspectInventory(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateInspectionReport(
      Id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  createInspectionReport(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deleteInspectionReport(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getContractAddress(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  inspectInventory(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateInspectionReport(
    Id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createInspectionReport(overrides?: CallOverrides): Promise<void>;

    deleteInspectionReport(overrides?: CallOverrides): Promise<void>;

    getContractAddress(overrides?: CallOverrides): Promise<string>;

    inspectInventory(overrides?: CallOverrides): Promise<string>;

    updateInspectionReport(
      Id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    createInspectionReport(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deleteInspectionReport(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getContractAddress(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    inspectInventory(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateInspectionReport(
      Id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createInspectionReport(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deleteInspectionReport(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getContractAddress(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    inspectInventory(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateInspectionReport(
      Id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
