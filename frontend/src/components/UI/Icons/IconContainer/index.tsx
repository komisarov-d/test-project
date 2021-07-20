import React, { FunctionComponent } from 'react';
import { ComponentSize } from 'common/types';
import clsx from 'clsx';

export interface IconContainerProps {
	className?: string;
	size?: ComponentSize;
}

const IconContainer: FunctionComponent<IconContainerProps> = ({ children, className, size = 'none' }) => {
	const sizes = {
		none: 'h-6 w-6',
		sm: 'h-4 w-4',
		md: 'h-8 w-8',
		lg: 'h-12 w-12'
	};

	return (
		<span
			className={clsx(
				'flex items-center justify-center rounded-tl rounded-bl z-10 text-lg',
				className,
				sizes[size]
			)}
		>
			{children}
		</span>
	);
};

export default IconContainer;
