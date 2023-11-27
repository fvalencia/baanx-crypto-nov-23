import { Check } from '@atomic/atoms';
import React, { FC, Fragment } from 'react';

import {
	Container,
	SeparatorLine,
	StyledBody,
	ViewCentered,
} from './progress-step.component.style';

interface Step {
	label?: string;
	checked: boolean;
}

export interface ProgressStepProps {
	steps: Step[];
}

/**
 * ProgressStep Component
 *
 * steps - a valid list of steps to be displayed
 *
 * @returns Styled ProgressStep
 */
export const ProgressStep: FC<ProgressStepProps> = ({ steps }) => {
	const hasLabel = steps.some(step => !!step.label);
	return (
		<Container hasLabel={hasLabel}>
			{steps.map((step, i) => (
				<Fragment key={i}>
					<ViewCentered>
						<Check
							kind="radio"
							value={step.checked}
							controlled
							color={step.checked ? 'success' : 'neutral'}
						/>
						{step.label ? (
							<StyledBody checked={step.checked}>{step.label}</StyledBody>
						) : null}
					</ViewCentered>
					{i !== steps.length - 1 ? (
						<SeparatorLine nextChecked={steps[i + 1].checked} />
					) : null}
				</Fragment>
			))}
		</Container>
	);
};
