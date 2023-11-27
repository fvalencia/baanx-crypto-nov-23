import { H6, Label } from '@atomic/atoms';
import styled from 'styled-components/native';

export const StyledWrapper = styled.View`
	flex: 1;
`;

export const StyledContainer = styled.View`
	justify-content: center;
	flex-direction: row;
	position: relative;
`;

export const StyledCenteredContainer = styled.View`
	position: absolute;
	top: 92px;
	width: 175px;
	height: 175px;
	flex: 1;
	align-items: center;
	justify-content: center;
	z-index: 0;
`;

export const StyledTitleText = styled.Text`
	position: absolute;
	top: 40px;
	color: ${({ theme }) => theme.color.grayDark};
	font-family: ${({ theme }) => theme.fontFamily.bold};
	font-size: ${({ theme }) => theme.fontSize.xxSmall};
`;

export const StyledValueText = styled.Text`
	font-family: ${({ theme }) => theme.fontFamily.bold};
	font-size: ${({ theme }) => theme.fontSize.small};
	color: ${({ theme }) => theme.color.callToAction};
	margin-bottom: 5px;
`;

export const AvgValueContainer = styled.View`
	width: 170px;
	position: absolute;
	top: 75px;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
`;

export const AvgValueItem = styled.View`
	width: 85px;
	height: 70px;
	align-items: center;
`;

export const AvgDomesticTitle = styled(H6)`
	color: ${({ theme }) => theme.color.secondary};
`;

export const AvgInternationsTitle = styled(H6)`
	color: ${({ theme }) => theme.color.primary};
`;

export const AvgDescriptionItem = styled(Label)`
	text-align: center;
	margin-top: 5px;
`;
