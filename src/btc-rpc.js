const { contentTypeHeaders, errors, rpcMethods } = require("./rpcConstants");

const isWalletMethod = method => rpcMethods.wallet.includes(method);

const getContentType = req => {
  return req?.headers["content-type"] || contentTypeHeaders.JSON;
};

const containsValidRpcCall = req => {
  return req.body && req.body.method && req.body.jsonrpc;
  // && req.body.id;
};

const rpc = {
  headers: { contentType: contentTypeHeaders },
  filters: { isWalletMethod },
  RESPONSES: { ...errors },
  handlers: {
    connectionError(error) {
      const { syscall, address, port, code } = error;
      return {
        ...errors.CONNECTION_ERROR,
        _code: code,
        syscall,
        address,
        port,
      };
    },
  },
  utils: { getContentType, containsValidRpcCall },
  flags: {
    USE_WALLET_METHOD_FILTER: true,
  },
};

module.exports = {
  rpcConfig: rpc,
  rpcFilters: rpc.filters,
  rpcResponses: rpc.RESPONSES,
  rpcHeaders: rpc.headers,
  rpcHandlers: rpc.handlers,
  rpcUtils: rpc.utils,
};
