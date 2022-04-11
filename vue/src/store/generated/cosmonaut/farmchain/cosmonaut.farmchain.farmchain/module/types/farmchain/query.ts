/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../farmchain/params";
import { LocationData } from "../farmchain/location_data";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "cosmonaut.farmchain.farmchain";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetLocationDataRequest {
  timestamp: string;
  location: string;
}

export interface QueryGetLocationDataResponse {
  locationData: LocationData | undefined;
}

export interface QueryAllLocationDataRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllLocationDataResponse {
  locationData: LocationData[];
  pagination: PageResponse | undefined;
}

export interface QueryGetLocationByDataRequest {
  timestamp: string;
  crop: string;
  temperature: string;
  humidity: string;
  soilMoisture: string;
  growthPercentage: string;
}

export interface QueryGetLocationByDataResponse {}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetLocationDataRequest: object = { timestamp: "", location: "" };

export const QueryGetLocationDataRequest = {
  encode(
    message: QueryGetLocationDataRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.timestamp !== "") {
      writer.uint32(10).string(message.timestamp);
    }
    if (message.location !== "") {
      writer.uint32(18).string(message.location);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetLocationDataRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetLocationDataRequest,
    } as QueryGetLocationDataRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = reader.string();
          break;
        case 2:
          message.location = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetLocationDataRequest {
    const message = {
      ...baseQueryGetLocationDataRequest,
    } as QueryGetLocationDataRequest;
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

  toJSON(message: QueryGetLocationDataRequest): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.location !== undefined && (obj.location = message.location);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetLocationDataRequest>
  ): QueryGetLocationDataRequest {
    const message = {
      ...baseQueryGetLocationDataRequest,
    } as QueryGetLocationDataRequest;
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

const baseQueryGetLocationDataResponse: object = {};

export const QueryGetLocationDataResponse = {
  encode(
    message: QueryGetLocationDataResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.locationData !== undefined) {
      LocationData.encode(
        message.locationData,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetLocationDataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetLocationDataResponse,
    } as QueryGetLocationDataResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locationData = LocationData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetLocationDataResponse {
    const message = {
      ...baseQueryGetLocationDataResponse,
    } as QueryGetLocationDataResponse;
    if (object.locationData !== undefined && object.locationData !== null) {
      message.locationData = LocationData.fromJSON(object.locationData);
    } else {
      message.locationData = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetLocationDataResponse): unknown {
    const obj: any = {};
    message.locationData !== undefined &&
      (obj.locationData = message.locationData
        ? LocationData.toJSON(message.locationData)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetLocationDataResponse>
  ): QueryGetLocationDataResponse {
    const message = {
      ...baseQueryGetLocationDataResponse,
    } as QueryGetLocationDataResponse;
    if (object.locationData !== undefined && object.locationData !== null) {
      message.locationData = LocationData.fromPartial(object.locationData);
    } else {
      message.locationData = undefined;
    }
    return message;
  },
};

const baseQueryAllLocationDataRequest: object = {};

export const QueryAllLocationDataRequest = {
  encode(
    message: QueryAllLocationDataRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllLocationDataRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllLocationDataRequest,
    } as QueryAllLocationDataRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllLocationDataRequest {
    const message = {
      ...baseQueryAllLocationDataRequest,
    } as QueryAllLocationDataRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllLocationDataRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllLocationDataRequest>
  ): QueryAllLocationDataRequest {
    const message = {
      ...baseQueryAllLocationDataRequest,
    } as QueryAllLocationDataRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllLocationDataResponse: object = {};

export const QueryAllLocationDataResponse = {
  encode(
    message: QueryAllLocationDataResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.locationData) {
      LocationData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllLocationDataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllLocationDataResponse,
    } as QueryAllLocationDataResponse;
    message.locationData = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locationData.push(
            LocationData.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllLocationDataResponse {
    const message = {
      ...baseQueryAllLocationDataResponse,
    } as QueryAllLocationDataResponse;
    message.locationData = [];
    if (object.locationData !== undefined && object.locationData !== null) {
      for (const e of object.locationData) {
        message.locationData.push(LocationData.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllLocationDataResponse): unknown {
    const obj: any = {};
    if (message.locationData) {
      obj.locationData = message.locationData.map((e) =>
        e ? LocationData.toJSON(e) : undefined
      );
    } else {
      obj.locationData = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllLocationDataResponse>
  ): QueryAllLocationDataResponse {
    const message = {
      ...baseQueryAllLocationDataResponse,
    } as QueryAllLocationDataResponse;
    message.locationData = [];
    if (object.locationData !== undefined && object.locationData !== null) {
      for (const e of object.locationData) {
        message.locationData.push(LocationData.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetLocationByDataRequest: object = {
  timestamp: "",
  crop: "",
  temperature: "",
  humidity: "",
  soilMoisture: "",
  growthPercentage: "",
};

export const QueryGetLocationByDataRequest = {
  encode(
    message: QueryGetLocationByDataRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.timestamp !== "") {
      writer.uint32(10).string(message.timestamp);
    }
    if (message.crop !== "") {
      writer.uint32(18).string(message.crop);
    }
    if (message.temperature !== "") {
      writer.uint32(26).string(message.temperature);
    }
    if (message.humidity !== "") {
      writer.uint32(34).string(message.humidity);
    }
    if (message.soilMoisture !== "") {
      writer.uint32(42).string(message.soilMoisture);
    }
    if (message.growthPercentage !== "") {
      writer.uint32(50).string(message.growthPercentage);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetLocationByDataRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetLocationByDataRequest,
    } as QueryGetLocationByDataRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = reader.string();
          break;
        case 2:
          message.crop = reader.string();
          break;
        case 3:
          message.temperature = reader.string();
          break;
        case 4:
          message.humidity = reader.string();
          break;
        case 5:
          message.soilMoisture = reader.string();
          break;
        case 6:
          message.growthPercentage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetLocationByDataRequest {
    const message = {
      ...baseQueryGetLocationByDataRequest,
    } as QueryGetLocationByDataRequest;
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = String(object.timestamp);
    } else {
      message.timestamp = "";
    }
    if (object.crop !== undefined && object.crop !== null) {
      message.crop = String(object.crop);
    } else {
      message.crop = "";
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
    return message;
  },

  toJSON(message: QueryGetLocationByDataRequest): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.crop !== undefined && (obj.crop = message.crop);
    message.temperature !== undefined &&
      (obj.temperature = message.temperature);
    message.humidity !== undefined && (obj.humidity = message.humidity);
    message.soilMoisture !== undefined &&
      (obj.soilMoisture = message.soilMoisture);
    message.growthPercentage !== undefined &&
      (obj.growthPercentage = message.growthPercentage);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetLocationByDataRequest>
  ): QueryGetLocationByDataRequest {
    const message = {
      ...baseQueryGetLocationByDataRequest,
    } as QueryGetLocationByDataRequest;
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = "";
    }
    if (object.crop !== undefined && object.crop !== null) {
      message.crop = object.crop;
    } else {
      message.crop = "";
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
    return message;
  },
};

const baseQueryGetLocationByDataResponse: object = {};

export const QueryGetLocationByDataResponse = {
  encode(
    _: QueryGetLocationByDataResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetLocationByDataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetLocationByDataResponse,
    } as QueryGetLocationByDataResponse;
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

  fromJSON(_: any): QueryGetLocationByDataResponse {
    const message = {
      ...baseQueryGetLocationByDataResponse,
    } as QueryGetLocationByDataResponse;
    return message;
  },

  toJSON(_: QueryGetLocationByDataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetLocationByDataResponse>
  ): QueryGetLocationByDataResponse {
    const message = {
      ...baseQueryGetLocationByDataResponse,
    } as QueryGetLocationByDataResponse;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a LocationData by index. */
  LocationData(
    request: QueryGetLocationDataRequest
  ): Promise<QueryGetLocationDataResponse>;
  /** Queries a list of LocationData items. */
  LocationDataAll(
    request: QueryAllLocationDataRequest
  ): Promise<QueryAllLocationDataResponse>;
  /** Queries a list of GetLocationByData items. */
  GetLocationByData(
    request: QueryGetLocationByDataRequest
  ): Promise<QueryGetLocationByDataResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.farmchain.farmchain.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  LocationData(
    request: QueryGetLocationDataRequest
  ): Promise<QueryGetLocationDataResponse> {
    const data = QueryGetLocationDataRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.farmchain.farmchain.Query",
      "LocationData",
      data
    );
    return promise.then((data) =>
      QueryGetLocationDataResponse.decode(new Reader(data))
    );
  }

  LocationDataAll(
    request: QueryAllLocationDataRequest
  ): Promise<QueryAllLocationDataResponse> {
    const data = QueryAllLocationDataRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.farmchain.farmchain.Query",
      "LocationDataAll",
      data
    );
    return promise.then((data) =>
      QueryAllLocationDataResponse.decode(new Reader(data))
    );
  }

  GetLocationByData(
    request: QueryGetLocationByDataRequest
  ): Promise<QueryGetLocationByDataResponse> {
    const data = QueryGetLocationByDataRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.farmchain.farmchain.Query",
      "GetLocationByData",
      data
    );
    return promise.then((data) =>
      QueryGetLocationByDataResponse.decode(new Reader(data))
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
