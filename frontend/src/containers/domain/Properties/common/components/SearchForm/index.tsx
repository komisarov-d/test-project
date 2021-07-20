import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { stringify, parse } from 'query-string';
import clsx from 'clsx';
import { Form, Submit, DatePicker, LocationIcon, CalendarIcon, PersonsIcon } from 'components';
import { getPropertiesRoutine } from 'containers/domain/Properties/propertiesRoutines';
import { AppRoute } from 'common/enums';
import DestinationField from '../DestinationField';
import SelectRoomsField from '../SelectRoomField';
import localization from './localization';

interface SearchFormProps {
	isSidebar?: boolean;
}

const initialValues = {
	date: [null, null],
	city: '',
	cityId: null,
	rooms: 1,
	adults: 2,
	children: 0
};

const SearchForm: FunctionComponent<SearchFormProps> = ({ isSidebar }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const queryParams = parse(history.location.search, { parseNumbers: true, arrayFormat: 'bracket' });

	const onSubmit = values => {
		const params = {
			...queryParams,
			...values,
			page: 1,
			date: values.date && values.date.map(d => new Date(d).getTime())
		};

		const search = stringify(params, { arrayFormat: 'bracket' });

		dispatch(getPropertiesRoutine.trigger(params));
		history.push({ pathname: AppRoute.PROPERTIES, search });
	};

	const validateCity = values =>
		!values.cityId || !values.city ? { city: localization.destinationError } : undefined;

	return (
		<Form
			className={clsx('flex flex-col text-sm', { 'md:flex-row': !isSidebar })}
			onSubmit={onSubmit}
			validate={validateCity}
			initialValues={{ ...initialValues, ...queryParams }}
		>
			<DestinationField
				name="city"
				label={isSidebar ? localization.destinationLabel : null}
				placeholder={localization.destinationPlaceholder}
				className="relative"
				inputClassName={clsx({ 'md:rounded-r-none shadow': !isSidebar })}
				helperClassName={clsx('text-center shadow', {
					'absolute bottom-0 z-10 transform translate-y-full rounded-b overflow-hidden': !isSidebar
				})}
				helper="contained"
				padding="md"
				icon={<LocationIcon />}
			/>
			<DatePicker
				name="date"
				label={isSidebar ? localization.checkInLabel : null}
				placeholder={localization.checkInPlaceholder}
				inputClassName={clsx('cursor-pointer', {
					'shadow md:rounded-none': !isSidebar
				})}
				helper="none"
				padding="md"
				selectsRange
				icon={<CalendarIcon />}
			/>
			<SelectRoomsField
				name="facilities"
				label={isSidebar ? localization.roomsOptionsLabel : null}
				inputClassName={clsx('cursor-pointer', {
					'shadow  md:rounded-none': !isSidebar
				})}
				helper="none"
				padding="md"
				icon={<PersonsIcon />}
				fields={['adults', 'children', 'rooms']}
				boundaries={{
					adults: [1, 30],
					children: [0, 10],
					rooms: [1, 30]
				}}
			/>
			<Submit
				content="search"
				className={clsx('flex-grow shadow', {
					'md:rounded-l-none mb-4 md:mt-0': !isSidebar,
					'mt-2': isSidebar
				})}
			/>
		</Form>
	);
};

export default SearchForm;
