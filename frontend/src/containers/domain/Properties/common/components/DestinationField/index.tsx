/* eslint-disable react-hooks/exhaustive-deps */
import React, { FunctionComponent, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';
import { useFormikContext } from 'formik';
import { FieldWithOptions, PopoverOption, LocationIcon } from 'components';
import { RootState, FieldProps } from 'common/types/';
import { getCitiesRoutine } from 'containers/domain/Properties/propertiesRoutines';

const DestinationField: FunctionComponent<FieldProps> = props => {
	const dispatch = useDispatch();
	const { setFieldValue, values, setValues } = useFormikContext();

	const cities = useSelector((state: RootState) => state.properties.cities) || [];
	const { name } = props;
	const cityId = values[`${name}Id`];
	const cityName = values[name];

	const fetchCities = (byName: string) =>
		dispatch(
			getCitiesRoutine.trigger({
				name: byName,
				limit: 8,
				sortBy: 'name',
				sortDir: 'ASC'
			})
		);

	const handleChange = useMemo(
		() =>
			debounce(e => {
				if (e.target.value) {
					fetchCities(e.target.value);
				}
			}, 200),
		[fetchCities]
	);

	const handleBlur = () => {
		if (cityId) {
			const currentCityName = cities.find(city => city.id === cityId)?.name;

			if (currentCityName) {
				setFieldValue(name, currentCityName);
			}
		}
	};

	const handleClickOption = (id: number, text: string) =>
		setValues({
			...(values as React.SetStateAction<any>),
			[name]: text,
			[`${name}Id`]: id
		});

	useEffect(() => {
		if (!cities.length && cityName) {
			fetchCities(cityName);
		}
	}, []);

	return (
		<FieldWithOptions
			{...props}
			hideOnClick
			onChange={handleChange}
			onBlur={handleBlur}
			popover={
				!!cities.length &&
				cities.map(city => (
					<PopoverOption
						key={city.id}
						primary={city.name}
						icon={LocationIcon}
						onClick={() => handleClickOption(city.id, city.name)}
					/>
				))
			}
		/>
	);
};

export default DestinationField;
