/* eslint-disable react/button-has-type */
import React, { FunctionComponent } from 'react';
import clsx from 'clsx';
import { ButtonProps } from 'common/types';
import { getClassesFromProps } from 'common/helpers/components';

const Button: FunctionComponent<ButtonProps> = ({
	className,
	content,
	children,
	color = 'primary',
	buttonStyle = 'default',
	type = 'button',
	rounded = 'md',
	padding = 'md',
	...restProps
}) => {
	const buttonStylesMapping = {
		default: `uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed
					transition duration-200 focus:shadow-sm focus:ring-4 focus:ring-opacity-50 
					rounded-md text-sm shadow-sm hover:shadow-md font-semibold text-center text-white inline-block`,
		booking: `border-0 inline-flex align-center justify-center items-center text-left pt-3
					pb-3 pl-5 pr-5 no-underline box-border align-middle relative text-white text-lg
					font-bold leading-4 hover:bg-blue-600 text-center focus:outline-none
					rounded-md bg-blue-500`,
		'booking-invert': `border-2 text-blue-600 inline-flex border-blue-500 text-blue-600 
					align-center justify-center text-left pt-3 pb-3 pl-5 pr-5 no-underline box-border 
					align-middle relative text-white font-bold leading-4 rounded-md 
					bg-transparent hover:bg-blue-600 hover:text-white text-center focus:outline-none`
	};

	const styles = [getClassesFromProps({ color, rounded, padding }), buttonStylesMapping[buttonStyle], className];

	return (
		<button className={clsx(styles)} type={type} {...restProps}>
			{content ?? children}
		</button>
	);
};

export default Button;
