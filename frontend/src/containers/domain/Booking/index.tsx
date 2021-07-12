import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { toastr } from 'react-redux-toastr';

import PageContainer from 'components/UI/Page/Container';
import PropertyItem from 'containers/domain/Properties/common/components/PropertyItem';
import { Form, Button } from 'components';
import UserDataFormInputs from './components/UserDataForm/UserDataFormInputs';
import UserDataFormAddons from './components/UserDataForm/UserDataFormAddons';
import UserContactsFormInputs from './components/ContactsForm/ContactsFormInputs';
import UserDataFormHeader from './components/UserDataForm/UserDataFormHeader';
import FormBlock from './components/FormBlock';

import { fetchPropertyRoutine, postBookingRoutine } from './bookingRoutines';
import { IApiBookingParams, IApiBookingRoomParams, RootState } from 'common/types';
import { parse } from 'query-string';
import { IFacility } from '../Properties/common/models';
import NotFound from 'containers/shared/NotFound';

const phoneRegExp = /^\+[0-9]{12}$/;

const validationSchema = Yup.object().shape({
	firstname: Yup.string().min(2, 'Minimum 2 characters').required('First name is required'),
	lastname: Yup.string().min(2, 'Minimum 2 characters').required('Last name is required'),
	country: Yup.string(),
	phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
	email: Yup.string().email('Invalid email').required('Email is required'),
	repeat_email: Yup.string()
		.required('Email is required')
		.oneOf([Yup.ref('email'), null], 'Emails must match')
});

const Booking: FunctionComponent = () => {
	const location = useLocation();
	const history = useHistory();
	const dispatch = useDispatch();
	const propertyData = useSelector((state: RootState) => state.booking.property);
	const [facilityData, setFacilityData] = useState<IFacility>(null);
	const userData = useSelector((state: RootState) => state.viewer.viewer);
	const isPropertyLoaded = useSelector((state: RootState) => state.booking.loaded);
	const inputValues = useRef(null);
	const [formState, setformState] = useState({
		email: userData.email,
		repeat_email: userData.email,
		firstname: userData.firstName,
		lastname: userData.lastName,
		fullname: `${userData.firstName} ${userData.lastName}`,
		phone: '',
		country: '',
		travel_reason: 'other',
		booking_for: 'current_user',
		paperless_confirmation: false,
		booking_for_me: false,
		rent_car: false,
		airport_shuttle: false,
		private_taxi: false,
		promotions: false
	});
	const [userDataFormSubmitted, setUserDataFormSubmitted] = useState(false);
	const propertyId = location.pathname.split('/').pop();
	useEffect(() => {
		dispatch(fetchPropertyRoutine.trigger({ id: propertyId }));
	}, [propertyId, dispatch]);
	// redirect to main page if property or facility with provided id doesn't exist
	useEffect(() => {
		if (isPropertyLoaded && !propertyData) {
			// history.push('/');
		} else if (propertyData) {
			const facilityId = +parse(location.search).facility; // facility id should be a number
			const facility = propertyData.facilities.find(_facility => _facility.id === facilityId);
			// set facility if exists
			// if (!facility) history.push('/');
			// else setFacilityData(facility);
			setFacilityData(facility);
		}
	}, [isPropertyLoaded, propertyData, history, location.search]);

	const onSubmit = () => {
		if (userDataFormSubmitted) {
			const { values } = inputValues.current;
			const today = new Date();
			const finishDate = new Date();
			finishDate.setDate(today.getDate() + 7);
			const bookingData: IApiBookingParams = {
				user_id: userData.id,
				first_name: values.firstname,
				last_name: values.lastname,
				email: values.email,
				phone: values.phone,
				property_id: propertyData.id,
				city_id: propertyData.cityId,
				start_date: today.toISOString(),
				finish_date: finishDate.toISOString(),
				price: propertyData.averagePrice,
				travell_for_work: values.travel_reason === 'work',
				booking_for_me: values.booking_for_me === 'booking_for_me',
				rent_car: values.rent_car,
				airport_shuttle: values.airport_shuttle,
				private_taxi: values.private_taxi,
				paperless_confirmation: values.paperless_confirmation,
				send_promotions: values.promotions,
				is_active: 'Booked'
			};

			const bookingRoomData: IApiBookingRoomParams = {
				room_id: +facilityData.id,
				booking_id: null
			};
			dispatch(postBookingRoutine.trigger({ bookingData, bookingRoomData }));
			toastr.success('Finished', 'Your booking saved');
			history.push('/');
		} else setUserDataFormSubmitted(true);
	};

	const onResetUserData = () => {
		setUserDataFormSubmitted(false);
	};
	// should render 404 page
	if (!propertyData || (propertyData && !facilityData))
		return (
			<>
				<div className="w-100 text-center">
					<div className="absolute top-1/4 w-full">
						No facility found. Check if you provided facility id correctly: <br />
						<b>API /booking/:bookingId?facility=:facilityId</b>
					</div>
					<NotFound />
				</div>
			</>
		);

	let formBody = (
		<>
			<FormBlock>
				<UserDataFormHeader firstName={userData.firstName} lastName={userData.lastName} />
				<UserDataFormInputs />
			</FormBlock>
			<FormBlock>
				{facilityData && <UserDataFormAddons facility={facilityData} />}
				<Button color="inherit" buttonStyle="booking" className="float-right" type="submit">
					Final details
				</Button>
			</FormBlock>
		</>
	);
	if (userDataFormSubmitted)
		formBody = (
			<FormBlock>
				<UserContactsFormInputs
					initialCountryFilter={formState.country}
					handleClickOption={country => setformState({ ...formState, country })}
					fullName={`${userData.firstName} ${userData.lastName}`}
					email={userData.email}
					onResetUserData={onResetUserData}
				/>
			</FormBlock>
		);
	return (
		<PageContainer>
			<div className="max-w-screen-md flex justify-center my-0 mx-auto flex-col">
				{propertyData ? <PropertyItem {...propertyData} /> : <div>Loading...</div>}
				<div className="bg-transparent">
					<Form
						innerRef={inputValues}
						initialValues={formState}
						onSubmit={onSubmit}
						enableReinitialize
						validationSchema={validationSchema}
					>
						{formBody}
					</Form>
				</div>
			</div>
		</PageContainer>
	);
};

export default Booking;
