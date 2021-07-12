import React, { FunctionComponent } from 'react';
import IconContainer, { IconContainerProps } from '../IconContainer';

const SendMessageIcon: FunctionComponent<IconContainerProps> = ({ ...iconContainerProps }) => {
	return (
		<IconContainer size="md" {...iconContainerProps}>
			<svg id="Capa_1" viewBox="0 0 465.882 465.882" xmlns="http://www.w3.org/2000/svg">
				<path
					fill="lightgray"
					d="m465.882 0-465.882 262.059 148.887 55.143 229.643-215.29-174.674 235.65.142.053-.174-.053v128.321l83.495-97.41 105.77 39.175z"
				/>
			</svg>
		</IconContainer>
	);
};

export default SendMessageIcon;