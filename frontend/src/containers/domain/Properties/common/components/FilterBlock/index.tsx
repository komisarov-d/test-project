import React, { FunctionComponent } from 'react';

interface FilterBlockProps {
	title: string;
}

const FilterBlock: FunctionComponent<FilterBlockProps> = ({ title, children }) => (
	<div className="bg-white rounded shadow text-sm">
		<div className="py-2 px-4 text-lg font-semibold border-b border-gray-300">{title}</div>
		{children}
	</div>
);
export default FilterBlock;
