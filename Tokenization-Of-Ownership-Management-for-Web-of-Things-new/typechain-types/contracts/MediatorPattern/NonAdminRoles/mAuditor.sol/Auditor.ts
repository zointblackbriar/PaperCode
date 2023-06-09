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
} from "../../../../common";

export interface AuditorInterface extends utils.Interface {
  functions: {
    "createInspectionReport(uint256)": FunctionFragment;
    "deleteInspectionReport()": FunctionFragment;
    "getContractAddress()": FunctionFragment;
    "getName()": FunctionFragment;
    "inspectInventory(uint256)": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "setName(string)": FunctionFragment;
    "updateInspectionReport(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createInspectionReport"
      | "deleteInspectionReport"
      | "getContractAddress"
      | "getName"
      | "inspectInventory"
      | "onERC721Received"
      | "setName"
      | "updateInspectionReport"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createInspectionReport",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "deleteInspectionReport",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getContractAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getName", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "inspectInventory",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setName",
    values: [PromiseOrValue<string>]
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
  decodeFunctionResult(functionFragment: "getName", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "inspectInventory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setName", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateInspectionReport",
    data: BytesLike
  ): Result;

  events: {
    "CreateInspectionReport(string,string,uint256)": EventFragment;
    "DeleteInspectionReport()": EventFragment;
    "ItemInspected(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CreateInspectionReport"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DeleteInspectionReport"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ItemInspected"): EventFragment;
}

export interface CreateInspectionReportEventObject {
  phase: string;
  message: string;
  id: BigNumber;
}
export type CreateInspectionReportEvent = TypedEvent<
  [string, string, BigNumber],
  CreateInspectionReportEventObject
>;

export type CreateInspectionReportEventFilter =
  TypedEventFilter<CreateInspectionReportEvent>;

export interface DeleteInspectionReportEventObject {}
export type DeleteInspectionReportEvent = TypedEvent<
  [],
  DeleteInspectionReportEventObject
>;

export type DeleteInspectionReportEventFilter =
  TypedEventFilter<DeleteInspectionReportEvent>;

export interface ItemInspectedEventObject {
  id: BigNumber;
}
export type ItemInspectedEvent = TypedEvent<
  [BigNumber],
  ItemInspectedEventObject
>;

export type ItemInspectedEventFilter = TypedEventFilter<ItemInspectedEvent>;

export interface Auditor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AuditorInterface;

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
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deleteInspectionReport(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getContractAddress(overrides?: CallOverrides): Promise<[string]>;

    getName(overrides?: CallOverrides): Promise<[string]>;

    inspectInventory(
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setName(
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateInspectionReport(
      Id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  createInspectionReport(
    id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deleteInspectionReport(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getContractAddress(overrides?: CallOverrides): Promise<string>;

  getName(overrides?: CallOverrides): Promise<string>;

  inspectInventory(
    id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onERC721Received(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setName(
    name: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateInspectionReport(
    Id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createInspectionReport(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    deleteInspectionReport(overrides?: CallOverrides): Promise<void>;

    getContractAddress(overrides?: CallOverrides): Promise<string>;

    getName(overrides?: CallOverrides): Promise<string>;

    inspectInventory(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    setName(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateInspectionReport(
      Id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "CreateInspectionReport(string,string,uint256)"(
      phase?: null,
      message?: null,
      id?: null
    ): CreateInspectionReportEventFilter;
    CreateInspectionReport(
      phase?: null,
      message?: null,
      id?: null
    ): CreateInspectionReportEventFilter;

    "DeleteInspectionReport()"(): DeleteInspectionReportEventFilter;
    DeleteInspectionReport(): DeleteInspectionReportEventFilter;

    "ItemInspected(uint256)"(id?: null): ItemInspectedEventFilter;
    ItemInspected(id?: null): ItemInspectedEventFilter;
  };

  estimateGas: {
    createInspectionReport(
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deleteInspectionReport(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getContractAddress(overrides?: CallOverrides): Promise<BigNumber>;

    getName(overrides?: CallOverrides): Promise<BigNumber>;

    inspectInventory(
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setName(
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateInspectionReport(
      Id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createInspectionReport(
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deleteInspectionReport(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getContractAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    inspectInventory(
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setName(
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateInspectionReport(
      Id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
