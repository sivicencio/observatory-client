import JsonRpcClient from 'react-jsonrpc-client';
import config from '../config';

export default {
  client: undefined,

  getClient: function getClient() {
    if (!this.client) {
      this.client = new JsonRpcClient({
        endpoint: config.apiUrl,
      });
    }
    return this.client;
  },

  request: function request(method, params = []) {
    return this.getClient()
      .request(method, ...params);
  },
};
