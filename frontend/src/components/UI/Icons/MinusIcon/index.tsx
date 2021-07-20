import React, { FunctionComponent } from 'react';
import IconContainer, { IconContainerProps } from '../IconContainer';

const PlusIcon: FunctionComponent<IconContainerProps> = ({ ...iconContainerProps }) => {
	return (
		<IconContainer {...iconContainerProps}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-full w-full"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
			</svg>
		</IconContainer>
	);
};

export default PlusIcon;
