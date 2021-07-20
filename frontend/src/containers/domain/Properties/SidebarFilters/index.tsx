import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { stringify, parse } from 'query-string';
import { getPropertiesRoutine } from '../propertiesRoutines';
import SearchForm from '../common/components/SearchForm';
import FilterBlock from '../common/components/FilterBlock';
import FilterItems from '../common/components/FilterItems';
import filters from '../PropertiesList/filters';

const SidebarFilters: FunctionComponent = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { page, ...restQuery } = parse(history.location.search, { parseNumbers: true, arrayFormat: 'bracket' });

	const handleChange = (name, value) => {
		const filter = { ...restQuery, [name]: value };
		dispatch(getPropertiesRoutine.trigger({ filter }));
		history.push({ search: stringify(filter, { arrayFormat: 'bracket' }) });
		window.scrollTo(0, 0);
	};

	return (
		<div className="space-y-6">
			<FilterBlock title="Search">
				<div className="p-4">
					<SearchForm isSidebar />
				</div>
			</FilterBlock>
			<FilterBlock title="Filters">
				{filters.map(filter => (
					<FilterItems
						key={filter.name}
						checked={restQuery[filter.name]}
						onChange={handleChange}
						{...filter}
					/>
				))}
			</FilterBlock>
		</div>
	);
};

export default SidebarFilters;
