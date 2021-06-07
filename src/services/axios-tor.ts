import axios from 'axios';
import { SocksProxyAgent } from 'socks-proxy-agent';
const agent = new SocksProxyAgent('socks5h://127.0.0.1:9050');
const axiosTor = axios.create();

axiosTor.interceptors.request.use(config => {
    config.httpAgent = agent;
    return config;
})

export default axiosTor;