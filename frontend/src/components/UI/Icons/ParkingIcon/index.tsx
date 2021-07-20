import React, { FunctionComponent } from 'react';
import IconContainer, { IconContainerProps } from '../IconContainer';

const ParkingIcon: FunctionComponent<IconContainerProps> = ({ ...iconContainerProps }) => {
	return (
		<IconContainer {...iconContainerProps}>
			<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
				<g>
					<path d="M374.612,228.283c0,28.97-23.568,52.542-52.542,52.542h-84.683v-105.08h84.683   C351.044,175.745,374.612,199.313,374.612,228.283z M612,82.423v447.153c0,45.45-36.974,82.423-82.423,82.423H82.423   C36.974,612,0,575.026,0,529.577V82.423C0,36.977,36.974,0,82.423,0h447.153C575.026,0,612,36.977,612,82.423z M456.437,228.283   c0-74.088-60.278-134.366-134.366-134.366H171.844c-8.99,0-16.281,7.291-16.281,16.281v391.6c0,8.99,7.291,16.281,16.281,16.281   h49.263c8.99,0,16.281-7.291,16.281-16.281V362.646h84.683C396.158,362.649,456.437,302.371,456.437,228.283z" />
				</g>
			</svg>
		</IconContainer>
	);
};

export default ParkingIcon;
