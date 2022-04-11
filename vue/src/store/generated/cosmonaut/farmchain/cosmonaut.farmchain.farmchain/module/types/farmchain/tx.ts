/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "cosmonaut.farmchain.farmchain";

export interface MsgCreateLocationData {
  creator: string;
  timestamp: string;
  location: string;
  temperature: string;
  humidity: string;
  soilMoisture: string;
  growthPercentage: string;
  crop: string;
}

export interface MsgCreateLocationDataResponse {}

export interface MsgUpdateLocationData {
  creator: string;
  timestamp: string;
  location: string;
  temperature: string;
  humidity: string;
  soilMoisture: string;
  growthPercentage: string;
  crop: string;
}

export interface MsgUpdateLocationDataResponse {}

export interface MsgDeleteLocationData {
  creator: string;
  timestamp: string;
  location: string;
}

export interface MsgDeleteLocationDataResponse {}

const baseMsgCreateLocationData: object = {
  creator: "",
  timestamp: "",
  location: "",
  temperature: "",
  humidity: "",
  soilMoisture: "",
  growthPercentage: "",
  crop: "",
};

export const MsgCreateLocationData = {
  encode(
    message: MsgCreateLocationData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.timestamp !== "") {
      writer.uint32(18).string(message.timestamp);
    }
    if (message.location !== "") {
      writer.uint32(26).string(message.location);
    }
    if (message.temperature !== "") {
      writer.uint32(34).string(message.temperature);
    }
    if (message.humidity !== "") {
      writer.uint32(42).string(message.humidity);
    }
    if (message.soilMoisture !== "") {
      writer.uint32(50).string(message.soilMoisture);
    }
    if (message.growthPercentage !== "") {
      writer.uint32(58).string(message.growthPercentage);
    }
    if (message.crop !== "") {
      writer.uint32(66).string(message.crop);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateLocationData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateLocationData } as MsgCreateLocationData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.timestamp = reader.string();
          break;
        case 3:
          message.location = reader.string();
          break;
        case 4:
          message.temperature = reader.string();
          break;
        case 5:
          message.humidity = reader.string();
          break;
        case 6:
          message.soilMoisture = reader.string();
          break;
        case 7:
          message.growthPercentage = reader.string();
          break;
        case 8:
          message.crop = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateLocationData {
    const message = { ...baseMsgCreateLocationData } as MsgCreateLocationData;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = String(object.timestamp);
    } else {
      message.timestamp = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = String(object.location);
    } else {
      message.location = "";
    }
    if (object.temperature !== undefined && object.temperature !== null) {
      message.temperature = String(object.temperature);
    } else {
      message.temperature = "";
    }
    if (object.humidity !== undefined && object.humidity !== null) {
      message.humidity = String(object.humidity);
    } else {
      message.humidity = "";
    }
    if (object.soilMoisture !== undefined && object.soilMoisture !== null) {
      message.soilMoisture = String(object.soilMoisture);
    } else {
      message.soilMoisture = "";
    }
    if (
      object.growthPercentage !== undefined &&
      object.growthPercentage !== null
    ) {
      message.growthPercentage = String(object.growthPercentage);
    } else {
      message.growthPercentage = "";
    }
    if (object.crop !== undefined && object.crop !== null) {
      message.crop = String(object.crop);
    } else {
      message.crop = "";
    }
    return message;
  },

  toJSON(message: MsgCreateLocationData): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.location !== undefined && (obj.location = message.location);
    message.temperature !== undefined &&
      (obj.temperature = message.temperature);
    message.humidity !== undefined && (obj.humidity = message.humidity);
    message.soilMoisture !== undefined &&
      (obj.soilMoisture = message.soilMoisture);
    message.growthPercentage !== undefined &&
      (obj.growthPercentage = message.growthPercentage);
    message.crop !== undefined && (obj.crop = message.crop);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateLocationData>
  ): MsgCreateLocationData {
    const message = { ...baseMsgCreateLocationData } as MsgCreateLocationData;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    } else {
      message.location = "";
    }
    if (object.temperature !== undefined && object.temperature !== null) {
      message.temperature = object.temperature;
    } else {
      message.temperature = "";
    }
    if (object.humidity !== undefined && object.humidity !== null) {
      message.humidity = object.humidity;
    } else {
      message.humidity = "";
    }
    if (object.soilMoisture !== undefined && object.soilMoisture !== null) {
      message.soilMoisture = object.soilMoisture;
    } else {
      message.soilMoisture = "";
    }
    if (
      object.growthPercentage !== undefined &&
      object.growthPercentage !== null
    ) {
      message.growthPercentage = object.growthPercentage;
    } else {
      message.growthPercentage = "";
    }
    if (object.crop !== undefined && object.crop !== null) {
      message.crop = object.crop;
    } else {
      message.crop = "";
    }
    return message;
  },
};

const baseMsgCreateLocationDataResponse: object = {};

export const MsgCreateLocationDataResponse = {
  encode(
    _: MsgCreateLocationDataResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateLocationDataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateLocationDataResponse,
    } as MsgCreateLocationDataResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateLocationDataResponse {
    const message = {
      ...baseMsgCreateLocationDataResponse,
    } as MsgCreateLocationDataResponse;
    return message;
  },

  toJSON(_: MsgCreateLocationDataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateLocationDataResponse>
  ): MsgCreateLocationDataResponse {
    const message = {
      ...baseMsgCreateLocationDataResponse,
    } as MsgCreateLocationDataResponse;
    return message;
  },
};

const baseMsgUpdateLocationData: object = {
  creator: "",
  timestamp: "",
  location: "",
  temperature: "",
  humidity: "",
  soilMoisture: "",
  growthPercentage: "",
  crop: "",
};

export const MsgUpdateLocationData = {
  encode(
    message: MsgUpdateLocationData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.timestamp !== "") {
      writer.uint32(18).string(message.timestamp);
    }
    if (message.location !== "") {
      writer.uint32(26).string(message.location);
    }
    if (message.temperature !== "") {
      writer.uint32(34).string(message.temperature);
    }
    if (message.humidity !== "") {
      writer.uint32(42).string(message.humidity);
    }
    if (message.soilMoisture !== "") {
      writer.uint32(50).string(message.soilMoisture);
    }
    if (message.growthPercentage !== "") {
      writer.uint32(58).string(message.growthPercentage);
    }
    if (message.crop !== "") {
      writer.uint32(66).string(message.crop);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateLocationData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateLocationData } as MsgUpdateLocationData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.timestamp = reader.string();
          break;
        case 3:
          message.location = reader.string();
          break;
        case 4:
          message.temperature = reader.string();
          break;
        case 5:
          message.humidity = reader.string();
          break;
        case 6:
          message.soilMoisture = reader.string();
          break;
        case 7:
          message.growthPercentage = reader.string();
          break;
        case 8:
          message.crop = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateLocationData {
    const message = { ...baseMsgUpdateLocationData } as MsgUpdateLocationData;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = String(object.timestamp);
    } else {
      message.timestamp = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = String(object.location);
    } else {
      message.location = "";
    }
    if (object.temperature !== undefined && object.temperature !== null) {
      message.temperature = String(object.temperature);
    } else {
      message.temperature = "";
    }
    if (object.humidity !== undefined && object.humidity !== null) {
      message.humidity = String(object.humidity);
    } else {
      message.humidity = "";
    }
    if (object.soilMoisture !== undefined && object.soilMoisture !== null) {
      message.soilMoisture = String(object.soilMoisture);
    } else {
      message.soilMoisture = "";
    }
    if (
      object.growthPercentage !== undefined &&
      object.growthPercentage !== null
    ) {
      message.growthPercentage = String(object.growthPercentage);
    } else {
      message.growthPercentage = "";
    }
    if (object.crop !== undefined && object.crop !== null) {
      message.crop = String(object.crop);
    } else {
      message.crop = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateLocationData): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.location !== undefined && (obj.location = message.location);
    message.temperature !== undefined &&
      (obj.temperature = message.temperature);
    message.humidity !== undefined && (obj.humidity = message.humidity);
    message.soilMoisture !== undefined &&
      (obj.soilMoisture = message.soilMoisture);
    message.growthPercentage !== undefined &&
      (obj.growthPercentage = message.growthPercentage);
    message.crop !== undefined && (obj.crop = message.crop);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateLocationData>
  ): MsgUpdateLocationData {
    const message = { ...baseMsgUpdateLocationData } as MsgUpdateLocationData;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    } else {
      message.location = "";
    }
    if (object.temperature !== undefined && object.temperature !== null) {
      message.temperature = object.temperature;
    } else {
      message.temperature = "";
    }
    if (object.humidity !== undefined && object.humidity !== null) {
      message.humidity = object.humidity;
    } else {
      message.humidity = "";
    }
    if (object.soilMoisture !== undefined && object.soilMoisture !== null) {
      message.soilMoisture = object.soilMoisture;
    } else {
      message.soilMoisture = "";
    }
    if (
      object.growthPercentage !== undefined &&
      object.growthPercentage !== null
    ) {
      message.growthPercentage = object.growthPercentage;
    } else {
      message.growthPercentage = "";
    }
    if (object.crop !== undefined && object.crop !== null) {
      message.crop = object.crop;
    } else {
      message.crop = "";
    }
    return message;
  },
};

const baseMsgUpdateLocationDataResponse: object = {};

export const MsgUpdateLocationDataResponse = {
  encode(
    _: MsgUpdateLocationDataResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateLocationDataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateLocationDataResponse,
    } as MsgUpdateLocationDataResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateLocationDataResponse {
    const message = {
      ...baseMsgUpdateLocationDataResponse,
    } as MsgUpdateLocationDataResponse;
    return message;
  },

  toJSON(_: MsgUpdateLocationDataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateLocationDataResponse>
  ): MsgUpdateLocationDataResponse {
    const message = {
      ...baseMsgUpdateLocationDataResponse,
    } as MsgUpdateLocationDataResponse;
    return message;
  },
};

const baseMsgDeleteLocationData: object = {
  creator: "",
  timestamp: "",
  location: "",
};

export const MsgDeleteLocationData = {
  encode(
    message: MsgDeleteLocationData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.timestamp !== "") {
      writer.uint32(18).string(message.timestamp);
    }
    if (message.location !== "") {
      writer.uint32(26).string(message.location);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteLocationData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteLocationData } as MsgDeleteLocationData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.timestamp = reader.string();
          break;
        case 3:
          message.location = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteLocationData {
    const message = { ...baseMsgDeleteLocationData } as MsgDeleteLocationData;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = String(object.timestamp);
    } else {
      message.timestamp = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = String(object.location);
    } else {
      message.location = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteLocationData): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.location !== undefined && (obj.location = message.location);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteLocationData>
  ): MsgDeleteLocationData {
    const message = { ...baseMsgDeleteLocationData } as MsgDeleteLocationData;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    } else {
      message.location = "";
    }
    return message;
  },
};

const baseMsgDeleteLocationDataResponse: object = {};

export const MsgDeleteLocationDataResponse = {
  encode(
    _: MsgDeleteLocationDataResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteLocationDataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteLocationDataResponse,
    } as MsgDeleteLocationDataResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteLocationDataResponse {
    const message = {
      ...baseMsgDeleteLocationDataResponse,
    } as MsgDeleteLocationDataResponse;
    return message;
  },

  toJSON(_: MsgDeleteLocationDataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteLocationDataResponse>
  ): MsgDeleteLocationDataResponse {
    const message = {
      ...baseMsgDeleteLocationDataResponse,
    } as MsgDeleteLocationDataResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateLocationData(
    request: MsgCreateLocationData
  ): Promise<MsgCreateLocationDataResponse>;
  UpdateLocationData(
    request: MsgUpdateLocationData
  ): Promise<MsgUpdateLocationDataResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteLocationData(
    request: MsgDeleteLocationData
  ): Promise<MsgDeleteLocationDataResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateLocationData(
    request: MsgCreateLocationData
  ): Promise<MsgCreateLocationDataResponse> {
    const data = MsgCreateLocationData.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.farmchain.farmchain.Msg",
      "CreateLocationData",
      data
    );
    return promise.then((data) =>
      MsgCreateLocationDataResponse.decode(new Reader(data))
    );
  }

  UpdateLocationData(
    request: MsgUpdateLocationData
  ): Promise<MsgUpdateLocationDataResponse> {
    const data = MsgUpdateLocationData.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.farmchain.farmchain.Msg",
      "UpdateLocationData",
      data
    );
    return promise.then((data) =>
      MsgUpdateLocationDataResponse.decode(new Reader(data))
    );
  }

  DeleteLocationData(
    request: MsgDeleteLocationData
  ): Promise<MsgDeleteLocationDataResponse> {
    const data = MsgDeleteLocationData.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.farmchain.farmchain.Msg",
      "DeleteLocationData",
      data
    );
    return promise.then((data) =>
      MsgDeleteLocationDataResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
