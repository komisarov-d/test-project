import React, { FunctionComponent } from 'react';
import IconContainer, { IconContainerProps } from '../IconContainer';

const UnlockIcon: FunctionComponent<IconContainerProps> = ({ ...iconContainerProps }) => {
	return (
		<IconContainer {...iconContainerProps}>
			<svg
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
				id="Layer_1"
				data-name="Layer 1"
				viewBox="0 0 96.11 122.88"
			>
				<path
					fillRule="evenodd"
					d="M2.89,56h9V37.12a37,37,0,0,1,10.9-26.21h0a37,37,0,0,1,52.42,0h0a37,37,0,0,1,10.9,26.21V38H71.66V36.91a22.68,22.68,0,0,0-6.66-16h0a22.69,22.69,0,0,0-38.72,16V56h67a2.9,2.9,0,0,1,2.89,2.89V120a2.9,2.9,0,0,1-2.89,2.89H2.89A2.9,2.9,0,0,1,0,120V58.93A2.9,2.9,0,0,1,2.89,56ZM49.15,89.45l4.58,21.14-12.56,0,3.69-21.42a8.51,8.51,0,1,1,4.29.23Z"
				/>
			</svg>
		</IconContainer>
	);
};

export default UnlockIcon;
