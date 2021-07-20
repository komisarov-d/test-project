import React, { FunctionComponent } from 'react';
import SearchForm from '../SearchForm';
import FilterBlock from '../FilterBlock';
import FilterItems from '../FilterItems';
import { IPropertyFilterSection } from '../../models';
import Slider from './Slider';

interface SidebarFiltersProps {
	filters: IPropertyFilterSection[];
	onChange: (name: string, value: any) => void;
	params: {
		[key: string]: any;
	};
	range?: { min: number; max: number };
}

const SidebarFilters: FunctionComponent<SidebarFiltersProps> = ({ filters, params, range, onChange }) => {
	return (
		<div className="space-y-6">
			<FilterBlock title="Search">
				<div className="p-4">
					<SearchForm isSidebar />
				</div>
			</FilterBlock>
			<FilterBlock title="Filters">
				{range && <Slider onChange={onChange} range={range} />}
				{filters.map(filter => (
					<FilterItems key={filter.name} checked={params[filter.name]} onChange={onChange} {...filter} />
				))}
			</FilterBlock>
		</div>
	);
};

export default SidebarFilters;
