/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { forwardRef } from 'react';
import { useField, FieldInputProps } from 'formik';
import clsx from 'clsx';
import { FieldProps, InputProps } from 'common/types/';
import { getClassesFromProps } from 'common/helpers/';

const FieldBase = forwardRef<HTMLLabelElement, FieldProps>(
	(
		{
			children,
			label,
			fullWidth = true,
			disableMargin,
			className,
			inputClassName,
			helperClassName,
			disableError,
			id,
			allowedSymbols,
			markRequired,
			value,
			labelTextClassName = 'text-gray-600 text-xs sm:text-sm ',
			helper = 'regular',
			padding = 'sm',
			rounded = 'md',
			autoComplete = 'off',
			flexDirection = 'col',
			type,
			onClick,
			onChange,
			onBlur,
			renderInput,
			modifyDisplayedValue,
			...props
		},
		ref
	) => {
		const { name } = props;
		const [field, meta] = useField(props);
		const isError = !!meta.touched && !!meta.error && !disableError;
		const providedValue: string | undefined = modifyDisplayedValue
			? modifyDisplayedValue(value || field.value)
			: value || field.value;
		const handleChange = (e: React.ChangeEvent<any>) => {
			if (allowedSymbols && !new RegExp(allowedSymbols).test(e.target.value)) return;
			if (onChange) onChange(e);
			field.onChange(e);
		};

		const handleClick = (e: React.MouseEvent<any>) => {
			if (onClick) onClick(e);
		};

		const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
			if (onBlur) onBlur(e);
			field.onBlur(e);
		};

		const inputStyles = clsx(
			getClassesFromProps({ padding, rounded }),
			inputClassName,
			`placeholder-gray-400 border border-gray-300 focus:border-indigo-400 focus:outline-none`,
			{
				'w-full': fullWidth,
				'border-red-500': isError,
				'rounded-b-none': helper === 'contained' && isError
			}
		);

		const labelClasses = clsx(`tracking-wide ${labelTextClassName}`, {
			'mb-1': flexDirection === 'col'
		});

		const inputProps: FieldInputProps<typeof value> & InputProps = {
			...props,
			...field,
			value: providedValue,
			autoComplete,
			id: id || field.name,
			className: inputStyles,
			onChange: handleChange,
			onBlur: handleBlur
		};
		return (
			<label
				className={clsx(className, `flex flex-${flexDirection} flex-grow`, { 'mb-4': !disableMargin })}
				htmlFor={id ?? name}
				onClick={handleClick}
				ref={ref}
			>
				{Boolean(label) && (
					<span className={labelClasses}>
						{label} {markRequired && <span className="text-red-600">*</span>}
					</span>
				)}
				<div className="relative flex">
					{renderInput ? renderInput(inputProps) : <textarea {...inputProps} />}
					{children}
				</div>
				{helper !== 'none' && (
					<div className={clsx(helperClassName, 'w-full font-medium tracking-wide text-xs')}>
						{isError && (
							<div
								className={clsx({
									'text-red-500 ml-1 mt-1': helper === 'regular',
									'bg-red-500 text-white p-1 rounded-b': helper === 'contained'
								})}
							>
								{meta.error}
							</div>
						)}
					</div>
				)}
			</label>
		);
	}
);

export default FieldBase;
