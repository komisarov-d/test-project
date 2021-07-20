import React, { FunctionComponent } from 'react';
import clsx from 'clsx';

interface OrderField {
	label: string;
	sortBy: string;
	sortDir: string;
}

interface OrderByProps {
	items: OrderField[];
	defaultField?: number;
	params: {
		[key: string]: any;
	};
	onChange: (name: string, direction: string) => void;
}

const FilterBlock: FunctionComponent<OrderByProps> = ({ items, params, defaultField = 0, onChange }) => {
	const activeField = params.sortBy
		? items.findIndex(({ sortBy, sortDir }) => params.sortBy === sortBy && params.sortDir === sortDir)
		: defaultField;

	return (
		<div className="flex py-2 mt-2 space-x-5 items-center">
			<div className="font-semibold">Sort by:</div>
			<div className="flex space-x-5">
				{items.map((field, index) => (
					<button
						className={clsx(
							'text-sm px-4 py-0.5 rounded-full border-2 border-green-600 focus:outline-none focus:bg-green-550 focus:ring-2',
							{
								'bg-green-500 text-white font-semibold shadow': index === activeField,
								'text-green-800': index !== activeField
							}
						)}
						type="button"
						key={field.label + field.sortDir}
						onClick={() => onChange(field.sortBy, field.sortDir)}
					>
						{field.label} {field.sortDir === 'DESC' ? <span> &#9660;</span> : <span> &#9650;</span>}
					</button>
				))}
			</div>
		</div>
	);
};
export default FilterBlock;
