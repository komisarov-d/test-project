/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FunctionComponent } from 'react';
import { IPropertyFilterSection } from '../../models';

interface FilterItemsProps extends IPropertyFilterSection {
	checked: string | number | (string | number)[];
	onChange?: (name: string, value: any[]) => void;
}

const FilterItems: FunctionComponent<FilterItemsProps> = ({ label, name, items, checked = [], onChange }) => {
	const checkedValues = Array.isArray(checked) ? checked : [checked];

	const handleChange = value => {
		const isFound = checkedValues.includes(value);
		const newChecked = isFound ? checkedValues.filter(item => item !== value) : [...checkedValues, value];

		if (onChange) {
			onChange(name, newChecked.length ? newChecked : undefined);
		}
	};

	return (
		<div className="flex flex-col items-start p-4 border-b border-gray-300 space-y-3">
			<span className="font-semibold">{label}</span>
			{items.map(item => (
				<label key={item.value} className="flex items-center cursor-pointer">
					<input
						className="mr-2 w-5 h-5 cursor-pointer"
						type="checkbox"
						checked={checkedValues.includes(item.value)}
						onChange={() => handleChange(item.value)}
					/>
					<span>{item.label}</span>
				</label>
			))}
		</div>
	);
};

export default FilterItems;
