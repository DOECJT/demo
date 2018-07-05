const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer();
http.createServer(function(req, res) {
    proxy.web(req, res, { target: 'http://10.176.168.241:8080' });
}).listen(8800);
console.log('Proxy server is running at http://localhost:8800');