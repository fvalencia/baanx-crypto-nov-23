import { getStatusBarHeight } from '@utils/StatusBarUtils';
import styled from 'styled-components/native';

const statusBarHeight = getStatusBarHeight();

export const FakeStatusBar = styled.View`
	width: 100%;
	height: ${statusBarHeight}px;
	background-color: ${({ theme }) => theme.color.black};
`;
