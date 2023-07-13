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
} from "../../../common";

export interface AdministratorInterface extends utils.Interface {
  functions: {
    "addRole(uint256,address)": FunctionFragment;
    "createAdministrativeRoles()": FunctionFragment;
    "createEmployee(string,uint256)": FunctionFragment;
    "createNonAdministrativeRoles()": FunctionFragment;
    "getAddress()": FunctionFragment;
    "getIssuer()": FunctionFragment;
    "getVerifier()": FunctionFragment;
    "hasRole(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addRole"
      | "createAdministrativeRoles"
      | "createEmployee"
      | "createNonAdministrativeRoles"
      | "getAddress"
      | "getIssuer"
      | "getVerifier"
      | "hasRole"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addRole",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "createAdministrativeRoles",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createEmployee",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "createNonAdministrativeRoles",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getIssuer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getVerifier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "addRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createAdministrativeRoles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createEmployee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createNonAdministrativeRoles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getIssuer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getVerifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;

  events: {
    "CreateAdminitrativeRoles()": EventFragment;
    "CreateAuditor(string,uint256)": EventFragment;
    "CreateIssuer(string)": EventFragment;
    "CreateManager(string,uint256)": EventFragment;
    "CreatePicker(string,uint256)": EventFragment;
    "CreatePutaway(string,uint256)": EventFragment;
    "CreateReceiver(string,uint256)": EventFragment;
    "CreateSupplier(string,uint256)": EventFragment;
    "CreateVerifier(string)": EventFragment;
    "EmployeeCreated(string,address,string,uint256)": EventFragment;
    "HasRoleResult(bool)": EventFragment;
    "IssuerCreated(string,address)": EventFragment;
    "RoleAdded(address)": EventFragment;
    "VerifierCreated(string,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CreateAdminitrativeRoles"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CreateAuditor"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CreateIssuer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CreateManager"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CreatePicker"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CreatePutaway"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CreateReceiver"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CreateSupplier"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CreateVerifier"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EmployeeCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "HasRoleResult"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IssuerCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VerifierCreated"): EventFragment;
}

export interface CreateAdminitrativeRolesEventObject {}
export type CreateAdminitrativeRolesEvent = TypedEvent<
  [],
  CreateAdminitrativeRolesEventObject
>;

export type CreateAdminitrativeRolesEventFilter =
  TypedEventFilter<CreateAdminitrativeRolesEvent>;

export interface CreateAuditorEventObject {
  Name: string;
  Age: BigNumber;
}
export type CreateAuditorEvent = TypedEvent<
  [string, BigNumber],
  CreateAuditorEventObject
>;

export type CreateAuditorEventFilter = TypedEventFilter<CreateAuditorEvent>;

export interface CreateIssuerEventObject {
  message: string;
}
export type CreateIssuerEvent = TypedEvent<[string], CreateIssuerEventObject>;

export type CreateIssuerEventFilter = TypedEventFilter<CreateIssuerEvent>;

export interface CreateManagerEventObject {
  Name: string;
  Age: BigNumber;
}
export type CreateManagerEvent = TypedEvent<
  [string, BigNumber],
  CreateManagerEventObject
>;

export type CreateManagerEventFilter = TypedEventFilter<CreateManagerEvent>;

export interface CreatePickerEventObject {
  Name: string;
  Age: BigNumber;
}
export type CreatePickerEvent = TypedEvent<
  [string, BigNumber],
  CreatePickerEventObject
>;

export type CreatePickerEventFilter = TypedEventFilter<CreatePickerEvent>;

export interface CreatePutawayEventObject {
  Name: string;
  Age: BigNumber;
}
export type CreatePutawayEvent = TypedEvent<
  [string, BigNumber],
  CreatePutawayEventObject
>;

export type CreatePutawayEventFilter = TypedEventFilter<CreatePutawayEvent>;

export interface CreateReceiverEventObject {
  Name: string;
  Age: BigNumber;
}
export type CreateReceiverEvent = TypedEvent<
  [string, BigNumber],
  CreateReceiverEventObject
>;

export type CreateReceiverEventFilter = TypedEventFilter<CreateReceiverEvent>;

export interface CreateSupplierEventObject {
  Name: string;
  Age: BigNumber;
}
export type CreateSupplierEvent = TypedEvent<
  [string, BigNumber],
  CreateSupplierEventObject
>;

export type CreateSupplierEventFilter = TypedEventFilter<CreateSupplierEvent>;

export interface CreateVerifierEventObject {
  message: string;
}
export type CreateVerifierEvent = TypedEvent<
  [string],
  CreateVerifierEventObject
>;

export type CreateVerifierEventFilter = TypedEventFilter<CreateVerifierEvent>;

export interface EmployeeCreatedEventObject {
  message: string;
  r1: string;
  name: string;
  age: BigNumber;
}
export type EmployeeCreatedEvent = TypedEvent<
  [string, string, string, BigNumber],
  EmployeeCreatedEventObject
>;

export type EmployeeCreatedEventFilter = TypedEventFilter<EmployeeCreatedEvent>;

export interface HasRoleResultEventObject {
  result: boolean;
}
export type HasRoleResultEvent = TypedEvent<
  [boolean],
  HasRoleResultEventObject
>;

export type HasRoleResultEventFilter = TypedEventFilter<HasRoleResultEvent>;

export interface IssuerCreatedEventObject {
  message: string;
  issuer: string;
}
export type IssuerCreatedEvent = TypedEvent<
  [string, string],
  IssuerCreatedEventObject
>;

export type IssuerCreatedEventFilter = TypedEventFilter<IssuerCreatedEvent>;

export interface RoleAddedEventObject {
  ac: string;
}
export type RoleAddedEvent = TypedEvent<[string], RoleAddedEventObject>;

export type RoleAddedEventFilter = TypedEventFilter<RoleAddedEvent>;

export interface VerifierCreatedEventObject {
  message: string;
  verifier: string;
}
export type VerifierCreatedEvent = TypedEvent<
  [string, string],
  VerifierCreatedEventObject
>;

export type VerifierCreatedEventFilter = TypedEventFilter<VerifierCreatedEvent>;

export interface Administrator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AdministratorInterface;

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
    addRole(
      r1: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createAdministrativeRoles(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createEmployee(
      name: PromiseOrValue<string>,
      age: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createNonAdministrativeRoles(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAddress(overrides?: CallOverrides): Promise<[string]>;

    getIssuer(overrides?: CallOverrides): Promise<[BigNumber]>;

    getVerifier(overrides?: CallOverrides): Promise<[string]>;

    hasRole(
      add: PromiseOrValue<string>,
      employeeRole: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addRole(
    r1: PromiseOrValue<BigNumberish>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createAdministrativeRoles(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createEmployee(
    name: PromiseOrValue<string>,
    age: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createNonAdministrativeRoles(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAddress(overrides?: CallOverrides): Promise<string>;

  getIssuer(overrides?: CallOverrides): Promise<BigNumber>;

  getVerifier(overrides?: CallOverrides): Promise<string>;

  hasRole(
    add: PromiseOrValue<string>,
    employeeRole: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addRole(
      r1: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    createAdministrativeRoles(overrides?: CallOverrides): Promise<void>;

    createEmployee(
      name: PromiseOrValue<string>,
      age: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    createNonAdministrativeRoles(overrides?: CallOverrides): Promise<void>;

    getAddress(overrides?: CallOverrides): Promise<string>;

    getIssuer(overrides?: CallOverrides): Promise<BigNumber>;

    getVerifier(overrides?: CallOverrides): Promise<string>;

    hasRole(
      add: PromiseOrValue<string>,
      employeeRole: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "CreateAdminitrativeRoles()"(): CreateAdminitrativeRolesEventFilter;
    CreateAdminitrativeRoles(): CreateAdminitrativeRolesEventFilter;

    "CreateAuditor(string,uint256)"(
      Name?: null,
      Age?: null
    ): CreateAuditorEventFilter;
    CreateAuditor(Name?: null, Age?: null): CreateAuditorEventFilter;

    "CreateIssuer(string)"(message?: null): CreateIssuerEventFilter;
    CreateIssuer(message?: null): CreateIssuerEventFilter;

    "CreateManager(string,uint256)"(
      Name?: null,
      Age?: null
    ): CreateManagerEventFilter;
    CreateManager(Name?: null, Age?: null): CreateManagerEventFilter;

    "CreatePicker(string,uint256)"(
      Name?: null,
      Age?: null
    ): CreatePickerEventFilter;
    CreatePicker(Name?: null, Age?: null): CreatePickerEventFilter;

    "CreatePutaway(string,uint256)"(
      Name?: null,
      Age?: null
    ): CreatePutawayEventFilter;
    CreatePutaway(Name?: null, Age?: null): CreatePutawayEventFilter;

    "CreateReceiver(string,uint256)"(
      Name?: null,
      Age?: null
    ): CreateReceiverEventFilter;
    CreateReceiver(Name?: null, Age?: null): CreateReceiverEventFilter;

    "CreateSupplier(string,uint256)"(
      Name?: null,
      Age?: null
    ): CreateSupplierEventFilter;
    CreateSupplier(Name?: null, Age?: null): CreateSupplierEventFilter;

    "CreateVerifier(string)"(message?: null): CreateVerifierEventFilter;
    CreateVerifier(message?: null): CreateVerifierEventFilter;

    "EmployeeCreated(string,address,string,uint256)"(
      message?: null,
      r1?: null,
      name?: null,
      age?: null
    ): EmployeeCreatedEventFilter;
    EmployeeCreated(
      message?: null,
      r1?: null,
      name?: null,
      age?: null
    ): EmployeeCreatedEventFilter;

    "HasRoleResult(bool)"(result?: null): HasRoleResultEventFilter;
    HasRoleResult(result?: null): HasRoleResultEventFilter;

    "IssuerCreated(string,address)"(
      message?: null,
      issuer?: null
    ): IssuerCreatedEventFilter;
    IssuerCreated(message?: null, issuer?: null): IssuerCreatedEventFilter;

    "RoleAdded(address)"(ac?: null): RoleAddedEventFilter;
    RoleAdded(ac?: null): RoleAddedEventFilter;

    "VerifierCreated(string,address)"(
      message?: null,
      verifier?: null
    ): VerifierCreatedEventFilter;
    VerifierCreated(
      message?: null,
      verifier?: null
    ): VerifierCreatedEventFilter;
  };

  estimateGas: {
    addRole(
      r1: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createAdministrativeRoles(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createEmployee(
      name: PromiseOrValue<string>,
      age: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createNonAdministrativeRoles(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAddress(overrides?: CallOverrides): Promise<BigNumber>;

    getIssuer(overrides?: CallOverrides): Promise<BigNumber>;

    getVerifier(overrides?: CallOverrides): Promise<BigNumber>;

    hasRole(
      add: PromiseOrValue<string>,
      employeeRole: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addRole(
      r1: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createAdministrativeRoles(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createEmployee(
      name: PromiseOrValue<string>,
      age: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createNonAdministrativeRoles(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getIssuer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getVerifier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hasRole(
      add: PromiseOrValue<string>,
      employeeRole: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
