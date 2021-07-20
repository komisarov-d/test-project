import { ComponentSize, ComponentColor } from 'common/types';
import clsx from 'clsx';

enum PaddingClasses {
	none = 'p-0',
	sm = 'p-2.5',
	md = 'p-4',
	lg = 'p-6'
}

const classesMapping = {
	padding: (size: ComponentSize) => PaddingClasses[size],

	rounded: (size: ComponentSize) => `rounded-${size}`,

	color: (color: ComponentColor, interactive = true): string => {
		const backgroundClasses = {
			primary: clsx('bg-green-500', {
				'hover:bg-green-600 focus:bg-green-550 focus:ring-green-500': interactive
			}),
			secondary: clsx('bg-blue-500', {
				'hover:bg-blue-600 focus:bg-blue-550 text-white focus:ring-blue-500': interactive
			})
		};

		return backgroundClasses[color];
	}
};

export const getClassesFromProps = (props = {}): string[] =>
	Object.keys(props).map(key => {
		return key in classesMapping ? classesMapping[key](props[key]) : undefined;
	});
