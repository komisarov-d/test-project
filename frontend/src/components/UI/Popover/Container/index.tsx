/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { FunctionComponent } from 'react';

export interface IPopoverProps {
	isOpen: boolean;
	popoverPosition?: 'top' | 'bottom';
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const PopoverContainer: FunctionComponent<IPopoverProps> = ({
	isOpen,
	children,
	onClick,
	popoverPosition = 'bottom'
}) => {
	if (!isOpen) {
		return null;
	}

	const popoverPositionClasses = {
		top: 'bottom-full',
		bottom: 'top-full'
	};

	return (
		<div
			className={`absolute shadow bg-white ${popoverPositionClasses[popoverPosition]} z-40 w-full lef-0 rounded mt-2 py-1 max-h-select overflow-y-auto max-h-52`}
			onClick={onClick}
		>
			<div className="flex flex-col w-full">
				<div className="w-full rounded-t ">
					<div className="flex w-full items-center ">
						<div className="w-full items-center flex flex-col">{children}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PopoverContainer;
