/* eslint-disable react/button-has-type */
import React, { FunctionComponent, SyntheticEvent } from 'react';
import clsx from 'clsx';

export interface IBookButtonProps {
	classes?: string;
	font?: string;
	color?: string;
	fullWidth?: boolean;
	disabled?: boolean;
	invertColors?: boolean;
	onClick?: (event: SyntheticEvent) => void;
}

const Button: FunctionComponent<IBookButtonProps> = ({
	classes,
	children,
	disabled,
	font,
	color,
	invertColors,
	onClick,
	...restProps
}) => {
	return (
		<button
			onClick={onClick}
			className={clsx(
				classes,
				`${color ? `text-${color}-600` : 'text-darkblue'} hover:underline focus:outline-none font-${
					font || 'bold'
				}`
			)}
			{...restProps}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default Button;
