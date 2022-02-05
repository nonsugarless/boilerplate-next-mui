const { resolve } = require('path');

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		{
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss'),
				},
			},
		},
	],
	staticDirs: ['../public'],
	babel: async (options) => {
		// make terminal warn silenced
		options.plugins.push(
			...[['@babel/plugin-proposal-private-property-in-object', { loose: true }]]
		);
		return options;
	},
	webpackFinal: async (config) => {
		config.resolve.alias = {
			...config.resolve.alias,
			'@': resolve(__dirname, '../src'),
		};
		return config;
	},
	features: {
		// apply mui theme
		emotionAlias: false,
	},
};
