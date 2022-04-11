// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteLocationData } from "./types/farmchain/tx";
import { MsgCreateLocationData } from "./types/farmchain/tx";
import { MsgUpdateLocationData } from "./types/farmchain/tx";


const types = [
  ["/cosmonaut.farmchain.farmchain.MsgDeleteLocationData", MsgDeleteLocationData],
  ["/cosmonaut.farmchain.farmchain.MsgCreateLocationData", MsgCreateLocationData],
  ["/cosmonaut.farmchain.farmchain.MsgUpdateLocationData", MsgUpdateLocationData],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgDeleteLocationData: (data: MsgDeleteLocationData): EncodeObject => ({ typeUrl: "/cosmonaut.farmchain.farmchain.MsgDeleteLocationData", value: MsgDeleteLocationData.fromPartial( data ) }),
    msgCreateLocationData: (data: MsgCreateLocationData): EncodeObject => ({ typeUrl: "/cosmonaut.farmchain.farmchain.MsgCreateLocationData", value: MsgCreateLocationData.fromPartial( data ) }),
    msgUpdateLocationData: (data: MsgUpdateLocationData): EncodeObject => ({ typeUrl: "/cosmonaut.farmchain.farmchain.MsgUpdateLocationData", value: MsgUpdateLocationData.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
