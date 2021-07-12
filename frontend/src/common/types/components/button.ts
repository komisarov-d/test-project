import { ReactNode } from 'react';
import { ComponentRounded, ComponentPadding, ComponentBackground } from 'common/types/components/baseComponent';

interface CommonButton {
	content?: string | ReactNode;
	className?: string;
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	onClick?: (e?: React.MouseEvent<HTMLInputElement>) => void;
}

interface Button extends CommonButton {
	fullWidth?: boolean;
	buttonStyle?: 'default' | 'booking' | 'booking-invert';
}

export type IconButtonProps = CommonButton;

export type ButtonProps = Button & ComponentRounded & ComponentPadding & ComponentBackground;
