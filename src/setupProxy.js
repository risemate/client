const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
	app.use(
		'/api',
		createProxyMiddleware({
			target: process.env.VITE_API_URL,
			changeOrigin: true,
		}),
	);
};
