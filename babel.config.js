module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		['react-native-reanimated/plugin'],
		[
			'module-resolver',
			{
				root: ['./src'],
				extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
				alias: {
					'@app': './src/app',
					'@assets': './src/assets',
					'@atomic': './src/atomic',
					'@scenes': './src/app/scenes',
					'@hooks': './src/app/core/hooks',
					'@utils': './src/app/core/utils',
				},
			},
		],
	],
};
