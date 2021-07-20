/* eslint-disable react-hooks/exhaustive-deps */
import React, { FunctionComponent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { stringify, parse } from 'query-string';
import { PageContainer, Pagination } from 'components';
import { RootState } from 'common/types';
import {
	getPropertiesRoutine,
	getPropertyItemMaxPriceRoutine,
	getPropertyItemMinPriceRoutine
} from '../propertiesRoutines';
import PropertyItem from '../common/components/PropertyItem';
import Sidebar from '../common/components/Sidebar';
import Sort from '../common/components/Sort';
import filters from './filters';
import sortItems from './sort';

const DEFAULT_SORT_FIELD_ID = 3;

const Properties: FunctionComponent = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const queryParams = parse(history.location.search, { parseNumbers: true, arrayFormat: 'bracket' });
	const properties = useSelector((state: RootState) => state.properties.items);
	const cheapestProperty = useSelector((state: RootState) => state.properties.cheapestProperty);
	const pricestProperty = useSelector((state: RootState) => state.properties.pricestProperty);
	const total = useSelector((state: RootState) => state.properties.total);

	const fetchPropertiesList = params => {
		const newParams = { ...queryParams, ...params };
		const search = stringify(newParams, { arrayFormat: 'bracket' });

		dispatch(getPropertiesRoutine.trigger(newParams));
		dispatch(getPropertyItemMinPriceRoutine.trigger());
		dispatch(getPropertyItemMaxPriceRoutine.trigger());
		history.push({ search });
		window.scrollTo(0, 0);
	};

	const handleChangeFilters = (name: string, value: any) => {
		fetchPropertiesList({ ...queryParams, [name]: value, page: 1 });
	};

	const handleChangeSort = (sortBy: string, sortDir: string) => {
		fetchPropertiesList({ ...queryParams, page: 1, sortBy, sortDir });
	};

	const onChangePage = page => fetchPropertiesList({ ...queryParams, page });

	useEffect(() => {
		const { sortBy, sortDir } = sortItems[DEFAULT_SORT_FIELD_ID];
		fetchPropertiesList({ page: 1, sortBy, sortDir, ...queryParams });
	}, []);

	let range: { min: number; max: number } | undefined;

	if (cheapestProperty && pricestProperty) {
		range = { min: cheapestProperty.averagePrice, max: pricestProperty.averagePrice };
	}

	return (
		<PageContainer
			title={total ? `Found ${total} results` : 'There is no results for your query'}
			sidebar={<Sidebar filters={filters} params={queryParams} onChange={handleChangeFilters} range={range} />}
		>
			<Sort
				items={sortItems}
				params={queryParams}
				onChange={handleChangeSort}
				defaultField={DEFAULT_SORT_FIELD_ID}
			/>
			<div className="mx-auto flex flex-col flex-grow">
				<div className="flex flex-col flex-grow">
					{properties.map(property => (
						<PropertyItem key={property.id} {...property} />
					))}
				</div>
				<Pagination page={+queryParams.page} total={total} onChange={page => onChangePage(page)} />
			</div>
		</PageContainer>
	);
};

export default Properties;
