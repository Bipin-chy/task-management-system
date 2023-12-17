const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        './server/api',  // Specify the path you want to proxy
        createProxyMiddleware({
            target: 'http://localhost:8888',  // Specify the backend server
            changeOrigin: true,
        })
    );
};
