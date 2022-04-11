/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "cosmonaut.farmchain.farmchain";

export interface LocationData {
  timestamp: string;
  location: string;
  temperature: string;
  humidity: string;
  soilMoisture: string;
  growthPercentage: string;
  crop: string;
  creator: string;
}

const baseLocationData: object = {
  timestamp: "",
  location: "",
  temperature: "",
  humidity: "",
  soilMoisture: "",
  growthPercentage: "",
  crop: "",
  creator: "",
};

export const LocationData = {
  encode(message: LocationData, writer: Writer = Writer.create()): Writer {
    if (message.timestamp !== "") {
      writer.uint32(10).string(message.timestamp);
    }
    if (message.location !== "") {
      writer.uint32(18).string(message.location);
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
    if (message.crop !== "") {
      writer.uint32(58).string(message.crop);
    }
    if (message.creator !== "") {
      writer.uint32(66).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): LocationData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLocationData } as LocationData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = reader.string();
          break;
        case 2:
          message.location = reader.string();
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
        case 7:
          message.crop = reader.string();
          break;
        case 8:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LocationData {
    const message = { ...baseLocationData } as LocationData;
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: LocationData): unknown {
    const obj: any = {};
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
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<LocationData>): LocationData {
    const message = { ...baseLocationData } as LocationData;
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

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
