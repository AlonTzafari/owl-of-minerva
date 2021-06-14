import axios from 'axios';
import { SocksProxyAgent } from 'socks-proxy-agent';
const proxyHost = process.env.TOR_PROXY_HOST || '127.0.0.1'; 
const agent = new SocksProxyAgent('socks5h://'+ proxyHost + ':9050');
const axiosTor = axios.create();

axiosTor.interceptors.request.use(config => {
    config.httpAgent = agent;
    return config;
})

export default axiosTor;