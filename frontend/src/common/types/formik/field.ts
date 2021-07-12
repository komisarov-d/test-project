import { ReactElement, MouseEvent } from 'react';
import { ComponentRounded, ComponentPadding, InputProps } from 'common/types/';

interface BaseFieldProps {
	children?: React.ReactNode;
	rows?: number;
	icon?: ReactElement;
	iconPosition?: 'left' | 'right';
	fullWidth?: boolean;
	disableMargin?: boolean;
	inputClassName?: string;
	helperClassName?: string;
	disableError?: boolean;
	errorText?: string;
	defaultChecked?: boolean;
	helper?: 'none' | 'regular' | 'contained';
	allowedSymbols?: RegExp;
	markRequired?: boolean;
	labelTextClassName?: string;
	flexDirection?: 'col' | 'row' | 'row-reverse';
	onClick?: (e?: MouseEvent) => void;
	onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (e?: React.FocusEvent<HTMLInputElement>) => void;
	modifyDisplayedValue?: (value: any) => string;
	renderInput?: (props: InputProps) => ReactElement;
}

export type FieldProps = BaseFieldProps & InputProps & ComponentRounded & ComponentPadding;

export interface FieldWithOptionsProps extends FieldProps {
	popover?: React.ReactNode;
	popoverPosition?: 'top' | 'bottom';
	hideOnClick?: boolean;
}
