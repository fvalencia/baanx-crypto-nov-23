import styled from 'styled-components/native';
import { Platform } from 'react-native';

import { BodySmall } from '@atomic/atoms';

export const Container = styled.View<{ hasLabel: boolean }>`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding-bottom: ${({ hasLabel }) => (hasLabel ? '40px' : '0px')};
`;

export const ViewCentered = styled.View`
	align-items: center;
`;

export const StyledBody = styled(BodySmall)<{ checked: boolean }>`
	position: absolute;
	top: 45px;
	text-align: center;
	width: 100px;
	color: ${({ theme, checked }) =>
		checked ? theme.color.callToAction : theme.color.gray};
`;

export const SeparatorLine = styled.View<{ nextChecked: boolean }>`
	flex: 1;
	border-top-width: 2px;
	border-top-color: ${({ theme, nextChecked }) =>
		nextChecked ? theme.color.success : theme.color.grayLight};
	border-style: ${({ nextChecked }) =>
		nextChecked ? 'solid' : Platform.OS ? 'solid' : 'dashed'};
`;
