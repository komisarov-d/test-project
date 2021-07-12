import React, { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { toastr } from 'react-redux-toastr';

import PageContainer from 'components/UI/Page/Container';
import PropertyItem from 'containers/domain/Properties/common/components/PropertyItem';
import { Form, Button } from 'components';
import UserDataFormInputs from './components/UserDataForm/UserDataFormInputs';
import UserDataFormHeader from './components/UserDataForm/UserDataFormHeader';
import FormBlock from './components/FormBlock';

import { fetchPropertyRoutine, postReviewRoutine } from './reviewRoutines';
import { IApiReviewParams, IApiReviewRoomParams, RootState } from 'common/types';
import { parse } from 'query-string';
import { IFacility } from '../Properties/common/models';
import NotFound from 'containers/shared/NotFound';

const validationSchema = Yup.object().shape({
	likeReview: Yup.string().min(15, 'Minimum 15 characters').required('Please, write what you did like'),
	dislikeReview: Yup.string().min(15, 'Minimum 15 characters').required('Please, write what you didn`t like'),
	generalImpressions: Yup.string().min(10, 'Minimum 10 characters').required('Write your general impressions')
});

const Review: FunctionComponent = () => {
	const location = useLocation();
	const history = useHistory();
	const dispatch = useDispatch();
	const propertyData = useSelector((state: RootState) => state.review.property);
	const [facilityData, setFacilityData] = useState<IFacility>(null);
	const userData = useSelector((state: RootState) => state.viewer.viewer);
	const isPropertyLoaded = useSelector((state: RootState) => state.review.loaded);
	const [formState] = useState({
		likeReview: '',
		dislikeReview: '',
		generalImpressions: ``,
		travel_reason: 'other',
		travel_expectation: 'Bad',
		travel_company: ''
	});
	const [userDataFormSubmitted, setUserDataFormSubmitted] = useState(false);
	const propertyId = location.pathname.split('/').pop();
	useEffect(() => {
		dispatch(fetchPropertyRoutine.trigger({ id: propertyId }));
	}, [propertyId, dispatch]);

	useEffect(() => {
		if (propertyData) {
			const facilityId = +parse(location.search).facility;
			const facility = propertyData.facilities.find(_facility => _facility.id === facilityId);
			setFacilityData(facility);
		}
	}, [isPropertyLoaded, propertyData, history, location.search]);

	const onSubmit = () => {
		if (userDataFormSubmitted) {
			const reviewData: IApiReviewParams = {
				user_id: userData.id
			};
			const reviewRoomData: IApiReviewRoomParams = {
				room_id: +facilityData.id,
				review: null
			};
			dispatch(postReviewRoutine.trigger({ reviewData, reviewRoomData }));
			toastr.success('Finished', 'Your review saved');
			history.push('/');
		} else setUserDataFormSubmitted(true);
	};

	if (!propertyData || (propertyData && !facilityData))
		return (
			<>
				<div className="w-100 text-center">
					<div className="absolute top-1/4 w-full">
						No facility found. Check if you provided facility id correctly: <br />
						<b>API /review/:reviewId?facility=:facilityId</b>
					</div>
					<NotFound />
				</div>
			</>
		);

	const formBody = (
		<>
			<FormBlock>
				<UserDataFormHeader firstName={userData.firstName} lastName={userData.lastName} />
				<UserDataFormInputs />
				<Button color="inherit" buttonStyle="booking" className="block w-full mb-3" type="submit">
					Complete review
				</Button>
			</FormBlock>
		</>
	);
	return (
		<div className="bg-review bg-fixed bg-cover">
			<div className="bg-opacity-50 bg-black">
				<PageContainer>
					<div className="max-w-screen-md flex justify-center my-0 mx-auto flex-col">
						{propertyData ? <PropertyItem {...propertyData} /> : <div>Loading...</div>}
						<div className="bg-transparent">
							<Form
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
			</div>
		</div>
	);
};

export default Review;
