/* eslint-disable react/button-has-type */
import React, { FunctionComponent } from 'react';
import clsx from 'clsx';
import { IconButtonProps } from 'common/types';

const Button: FunctionComponent<IconButtonProps> = ({
	className,
	content,
	children,
	type = 'button',
	...restProps
}) => {
	const commonStyles = `text-sm inline-block rounded-full p-2 mx-1 tracking-widest shadow transition duration-200 
    hover:bg-green-100 hover:shadow-md active:bg-green-300 focus:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed`;

	return (
		<button className={clsx([commonStyles, className])} type={type} {...restProps}>
			{content}
		</button>
	);
};

export default Button;
