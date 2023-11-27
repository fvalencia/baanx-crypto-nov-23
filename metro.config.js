const { getDefaultConfig } = require('metro-config');
const exclusionList = require('metro-config/src/defaults/exclusionList');

module.exports = (async () => {
	const {
		resolver: { sourceExts, assetExts },
	} = await getDefaultConfig();
	return {
		transformer: {
			getTransformOptions: async () => ({
				transform: {
					experimentalImportSupport: false,
					inlineRequires: true,
				},
			}),
			babelTransformerPath: require.resolve('react-native-svg-transformer'),
		},
		resolver: {
			assetExts: assetExts.filter(ext => ext !== 'svg'),
			sourceExts: [...sourceExts, 'svg'],
			blockList: exclusionList([/^(?!.*node_modules).*\/dist\/.*/]),
		},
	};
})();
