import { Slider } from 'react-native-elements';
import styled from 'styled-components/native';

export const StyledSlider = styled(Slider).attrs(({ theme }) => ({
	trackStyle: { height: 8, backgroundColor: 'transparent' },
	thumbStyle: { height: 20, width: 20, backgroundColor: 'transparent' },
	minimumTrackTintColor: theme.color.primary,
	maximumTrackTintColor: theme.color.grayLight,
}))`
	width: 100%;
`;

export const StyledSpacedView = styled.View`
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
`;

export const StyledCenteredView = styled.View`
	align-items: center;
`;

export const StyledMainText = styled.Text`
	text-align: center;
	color: ${({ theme }) => theme.color.callToAction};
	font-family: ${({ theme }) => theme.fontFamily.bold};
	font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const StyledFooterText = styled.Text`
	color: ${({ theme }) => theme.color.gray};
	font-family: ${({ theme }) => theme.fontFamily.bold};
	font-size: ${({ theme }) => theme.fontSize.xSmall};
`;

export const ThumbButton = styled.View`
	border-radius: 100px;
	border-width: 4px;
	width: 24px;
	height: 24px;
	left: -2px;
	top: -2px;
	background-color: ${({ theme }) => theme.color.white};
	border-color: ${({ theme }) => theme.color.primary};
`;
