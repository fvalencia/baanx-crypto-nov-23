import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import { Icon } from '../icon/icon.component';
import { BodySmall } from '../typography/typography.component.style';
import { SectionProps } from './section.component';

export const Container = styled.View<Partial<SectionProps>>`
	width: 100%;
	border-bottom-width: ${({ theme, view }) => (view ? '0px' : '2px')};
	background-color: ${({ theme, background }) =>
		background
			? background === 'primary'
				? theme.color.primary
				: theme.color.grayXLight
			: 'transparent'};
	border-bottom-color: ${({ theme }) => theme.color.primary};
	align-items: center;
	justify-content: ${({ theme, view }) => (view ? 'space-between' : 'center')};
	flex-direction: row;
	padding: 5px 12px;
	height: 44px;
`;

export const TouchableViewContainer = styled(TouchableWithoutFeedback)`
	flex-direction: row;
	align-items: center;
	padding: 4px 0px;
`;

export const StyledSmallBody = styled(BodySmall)<Partial<SectionProps>>`
	color: ${({ theme, background }) =>
		background === 'primary' ? theme.color.white : theme.color.grayDark};
	font-family: ${({ theme }) => theme.fontFamily.regular};
	font-size: 14px;
`;

export const StyledText = styled(StyledSmallBody)<Partial<SectionProps>>`
	font-family: ${({ theme, view }) =>
		view ? theme.fontFamily.regular : theme.fontFamily.regular};
`;

export const StyledIcon = styled(Icon).attrs<Partial<SectionProps>>(
	({ theme, color }) => ({
		color: color === 'primary' ? theme.color.white : theme.color.secondary,
		size: 22,
	}),
)`
	margin-left: 6px;
`;
