// @ts-check
const { resolve } = require('path');
const project = require('./project');

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
	trailingSlash: true,
	webpack: (config) => {
		config.resolve.alias['@'] = resolve(__dirname, 'src');
		return config;
	},
	env: {
		API_BASE_URL: process.env.API_BASE_URL,
	},
	publicRuntimeConfig: {
		project,
	},
};
module.exports = nextConfig;
