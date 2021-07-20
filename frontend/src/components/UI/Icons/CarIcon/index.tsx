import React, { FunctionComponent } from 'react';
import IconContainer, { IconContainerProps } from '../IconContainer';

const CheckmarkIcon: FunctionComponent<IconContainerProps> = ({ ...iconContainerProps }) => {
	return (
		<IconContainer {...iconContainerProps}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
				<g>
					<g>
						<path d="M468.4,198.8L410,62.1c-5-11.8-16.6-19.4-29.4-19.4H131.4c-12.8,0-24.3,7.6-29.4,19.4L43.6,198.8    C17.9,210.6,0,236.6,0,266.7V352c0,17.6,14.4,32,32,32h10.7v53.3c0,17.6,14.4,32,32,32h42.7c17.6,0,32-14.4,32-32V384h213.3v53.3    c0,17.6,14.4,32,32,32h42.7c17.6,0,32-14.4,32-32V384H480c17.6,0,32-14.4,32-32v-85.3C512,236.6,494.1,210.6,468.4,198.8z     M121.6,70.5c1.7-3.9,5.5-6.5,9.8-6.5h249.2c4.3,0,8.1,2.5,9.8,6.4l52,121.7c-1.7-0.1-3.4-0.2-5-0.2H74.7c-1.7,0-3.4,0.1-5,0.2    L121.6,70.5z M128,437.3c0,5.9-4.8,10.7-10.7,10.7H74.7c-5.9,0-10.7-4.8-10.7-10.7V384h64V437.3z M437.3,448h-42.7    c-5.9,0-10.7-4.8-10.7-10.7V384h64v53.3h0.1C448,443.2,443.2,448,437.3,448z M480,362.7h-21.3h-85.3H138.7H53.3H32    c-5.9,0-10.7-4.8-10.7-10.7v-85.3c0-29.4,23.9-53.3,53.3-53.3h362.7c29.4,0,53.3,23.9,53.3,53.3V352h0.1    C490.7,357.9,485.9,362.7,480,362.7z" />
					</g>
				</g>
				<g>
					<g>
						<path d="M96,234.7c-29.4,0-53.3,23.9-53.3,53.3c0,29.4,23.9,53.3,53.3,53.3s53.3-23.9,53.3-53.3C149.3,258.6,125.4,234.7,96,234.7    z M96,320c-17.6,0-32-14.4-32-32c0-17.6,14.4-32,32-32s32,14.4,32,32C128,305.6,113.6,320,96,320z" />
					</g>
				</g>
				<g>
					<g>
						<path d="M416,234.7c-29.4,0-53.3,23.9-53.3,53.3c0,29.4,23.9,53.3,53.3,53.3c29.4,0,53.3-23.9,53.3-53.3    C469.3,258.6,445.4,234.7,416,234.7z M416,320c-17.6,0-32-14.4-32-32c0-17.6,14.4-32,32-32c17.6,0,32,14.4,32,32    C448,305.6,433.6,320,416,320z" />
					</g>
				</g>
				<g>
					<g>
						<path d="M330.7,298.7H181.3c-5.9,0-10.7,4.8-10.7,10.7s4.8,10.7,10.7,10.7h149.3c5.9,0,10.7-4.8,10.7-10.7    S336.6,298.7,330.7,298.7z" />
					</g>
				</g>
				<g>
					<g>
						<path d="M330.7,256H181.3c-5.9,0-10.7,4.8-10.7,10.7s4.8,10.7,10.7,10.7h149.3c5.9,0,10.7-4.8,10.7-10.7S336.6,256,330.7,256z" />
					</g>
				</g>
			</svg>
		</IconContainer>
	);
};

export default CheckmarkIcon;
