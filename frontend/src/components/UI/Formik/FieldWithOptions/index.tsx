import React, { FunctionComponent, useState, useRef } from 'react';
import { useClickOutside } from 'common/hooks/';
import { FieldWithOptionsProps } from 'common/types/';
import { PopoverContainer, Field } from 'components';

const FieldWithOptions: FunctionComponent<FieldWithOptionsProps> = ({
	popover,
	hideOnClick,
	onClick,
	popoverPosition = 'bottom',
	...props
}) => {
	const ref = useRef(null);
	const [isOpen, setIsOpen] = useState(false);
	const shouldShow = !!popover && isOpen;

	const handleClick = e => {
		setIsOpen(true);

		if (onClick) {
			onClick(e);
		}
	};

	const handleClickPopover = e => {
		e.stopPropagation();
		e.preventDefault();

		setIsOpen(false);
	};

	useClickOutside(ref, () => setIsOpen(false));

	return (
		<Field {...props} disableError={shouldShow} onClick={handleClick} ref={ref}>
			{shouldShow && (
				<PopoverContainer
					popoverPosition={popoverPosition}
					isOpen={isOpen}
					onClick={hideOnClick ? handleClickPopover : null}
				>
					{popover}
				</PopoverContainer>
			)}
		</Field>
	);
};

export default FieldWithOptions;
