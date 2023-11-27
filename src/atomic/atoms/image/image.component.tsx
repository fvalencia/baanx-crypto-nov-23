import React, { FC } from 'react';
import { Image, ImageProps, useWindowDimensions } from 'react-native';

/**
 * Full Image Component
 * @returns A styled Button Component.
 */
export const ImageFullSize: FC<ImageProps> = ({ source }) => {
	const { width } = useWindowDimensions();
	const imgWidth = Image.resolveAssetSource(source).width;
	const imgHeight = Image.resolveAssetSource(source).height;

	return (
		<Image
			style={{
				width: width,
				height: (width * imgHeight) / imgWidth,
			}}
			source={source}
		/>
	);
};
