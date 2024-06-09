import { resolve } from 'path';

import DotenvPlugin from 'dotenv-webpack';

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';

export default (_, argv) => {
	const isDev = argv['mode'] === 'development';

	const filename = (ext) => (isDev ? `bundle.${ ext }` : `bundle.[hash].${ ext }`);

	const setupProxy = () => {
		const proxy = process.env.PROXY || argv['proxy'];

		const [ apiUrl, proxyUrl ] = (proxy && proxy.split('=>')) || [];

		if (apiUrl && proxyUrl) {
			return {
				[apiUrl]: {
					target: proxyUrl,
					changeOrigin: true,
				},
			};
		}
	};

	return {
		entry: './index.tsx',
		target: 'web',
		mode: argv['mode'],
		performance: {
			hints: false,
			maxEntrypointSize: 512000,
			maxAssetSize: 512000,
		},
		context: resolve('src'),
		output: {
			publicPath: '/',
			filename: filename('js'),
			path: resolve('dist'),
		},
		devtool: isDev ? 'source-map' : false,
		devServer: {
			host: process.env.HOST || 'localhost',
			port: process.env.PORT || 3000,
			open: argv['open'] || false,
			historyApiFallback: true,
			proxy: setupProxy(),
		},
		resolve: {
			extensions: [ '.ts', '.tsx', '.js', '.jsx', '.scss', '.css' ],
			alias: {
				'@pages': resolve('src/pages'),
				'@components': resolve('src/components'),
				'@interfaces': resolve('src/interfaces'),
				'@router': resolve('src/router'),
				'@socket-namespaces': resolve('src/socket-namespaces'),
				'@store': resolve('src/store'),
				'@store/*': resolve('src/store/*'),
				'@reducers': resolve('src/store/reducers'),
				'@utils': resolve('src/utils'),
				'@stylesheets': resolve('src/stylesheets'),
			},
		},
		plugins: [
			new DotenvPlugin({ path: './.env' }),
			new CleanWebpackPlugin(),
			new HTMLWebpackPlugin({
				template: resolve('public/index.html'),
				favicon: resolve('public/favicon.ico'),
				inject: true,
				minify: {
					removeComments: !isDev,
					collapseWhitespace: !isDev,
				},
			}),
		],
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				},
				{
					test: /\.s[ac]ss$/i,
					use: [
						'style-loader',
						'css-modules-typescript-loader',
						{
							loader: 'css-loader',
							options: {
								modules: true,
							},
						},
						'sass-loader',
					],
				},
			],
		},
	};
};
