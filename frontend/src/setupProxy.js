const { createProxyMiddleware } = require('http-proxy-middleware');

const { REACT_APP_PROXY_SERVER_URL, REACT_APP_API_ORIGIN_URL } = process.env;

module.exports = app => {
	app.use(
		REACT_APP_API_ORIGIN_URL,
		createProxyMiddleware({
			target: REACT_APP_PROXY_SERVER_URL,
			changeOrigin: true
		})
	);
};
