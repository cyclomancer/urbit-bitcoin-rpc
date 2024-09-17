const walletMethods = [
  "abandontransaction",
  "abortrescan",
  "addmultisigaddress",
  "backupwallet",
  "bumpfee",
  "createwallet",
  "dumpprivkey",
  "dumpwallet",
  "encryptwallet",
  "getaddressesbylabel",
  "getaddressinfo",
  "getbalance",
  "getbalances",
  "getnewaddress",
  "getrawchangeaddress",
  "getreceivedbyaddress",
  "getreceivedbylabel",
  "gettransaction",
  "getunconfirmedbalance",
  "getwalletinfo",
  "importaddress",
  "importdescriptors",
  "importmulti",
  "importprivkey",
  "importprunedfunds",
  "importpubkey",
  "importwallet",
  "keypoolrefill",
  "listaddressgroupings",
  "listlabels",
  "listlockunspent",
  "listreceivedbyaddress",
  "listreceivedbylabel",
  "listsinceblock",
  "listtransactions",
  "listunspent",
  "listwalletdir",
  "listwallets",
  "loadwallet",
  "lockunspent",
  "psbtbumpfee",
  "removeprunedfunds",
  "rescanblockchain",
  "send",
  "sendmany",
  "sendtoaddress",
  "sethdseed",
  "setlabel",
  "settxfee",
  "setwalletflag",
  "signmessage",
  "signrawtransactionwithwallet",
  "unloadwallet",
  "upgradewallet",
  "walletcreatefundedpsbt",
  "walletlock",
  "walletpassphrase",
  "walletpassphrasechange",
  "walletprocesspsbt",
];

const isWalletMethod = method => walletMethods.includes(method);

const RPC_NOT_ALLOWED = { code: 405, msg: "bad btc-rpc call" };

const contentTypeHeaders = {
  JSON: { "content-type": "application/json" },
  PLAIN_TEXT: { "content-type": "text/plain" },
};

const rpc = {
  filters: {
    isWalletMethod,
  },
  RESPONSES: {
    RPC_NOT_ALLOWED,
  },
  headers: {
    contentType: contentTypeHeaders,
  },
  flags: {
    USE_WALLET_METHOD_FILTER: true,
  },
};

module.exports = {
  rpcConfig: rpc,
  rpcFilters: rpc.filters,
  rpcResponses: rpc.RESPONSES,
  rpcHeaders: rpc.headers,
};
