import React, { ReactNode } from 'react';
import { CardContainerStyled } from './card-base.component.style';

type CardProps = {
	children: ReactNode;
};

export const CardBase = ({ children }: CardProps) => {
	return (
		<CardContainerStyled
			style={{
				shadowColor: '#000',
				shadowOffset: {
					width: 0,
					height: 3,
				},
				shadowOpacity: 0.29,
				shadowRadius: 4.65,
				elevation: 7,
			}}>
			{children}
		</CardContainerStyled>
	);
};
