const {createProxyMiddleware}  = require("http-proxy-middleware");
module.exports = function(app) {
    app.use(
        createProxyMiddleware("/api", {
            target: 'http://47.52.137.175',
            changeOrigin: true,
            secure: false,
            pathRewrite: {
                "^/api": "/"
            }
        })
    );
};
