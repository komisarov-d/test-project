import React, { FunctionComponent } from 'react';
import IconContainer, { IconContainerProps } from '../IconContainer';

const PersonIcon: FunctionComponent<IconContainerProps> = ({ ...iconContainerProps }) => {
	return (
		<IconContainer {...iconContainerProps}>
			<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 341.333 341.333">
				<g>
					<g>
						<g>
							<path d="M170.667,170.667c47.147,0,85.333-38.293,85.333-85.333C256,38.187,217.813,0,170.667,0S85.333,38.187,85.333,85.333     C85.333,132.373,123.52,170.667,170.667,170.667z" />
							<path d="M170.667,213.333C113.813,213.333,0,241.813,0,298.667v42.667h341.333v-42.667     C341.333,241.813,227.52,213.333,170.667,213.333z" />
						</g>
					</g>
				</g>
			</svg>
		</IconContainer>
	);
};

export default PersonIcon;
