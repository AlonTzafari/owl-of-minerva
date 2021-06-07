const axios = require('axios');
const { SocksProxyAgent } = require('socks-proxy-agent');
const agent = new SocksProxyAgent('socks5h://127.0.0.1:9050');

const getPage = () => {
  axios.get('http://nzxj65x32vh2fkhk.onion/all?page=1', {httpAgent: agent})
  .then(({
    data
  }) => {
    console.log(data);
  });
}