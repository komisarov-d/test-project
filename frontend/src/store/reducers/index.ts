import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducerCreator } from 'common/helpers/';
import { viewer } from 'containers/domain/Auth/authReducer';
import { property } from 'containers/domain/Property/propertyReducer';
import { userProfile } from 'containers/domain/UserProfile/userProfileReducer';
import { fetchViewerRoutine } from 'containers/domain/Auth/authRoutines';
import { properties } from 'containers/domain/Properties/propertiesReducer';
import { getPropertiesRoutine } from 'containers/domain/Properties/propertiesRoutines';
import { booking } from 'containers/domain/Booking/bookingReducer';
import { review } from 'containers/domain/Review/reviewReducer';
import { messages } from 'containers/domain/ChatWindow/chatReducer';
import { userBookings } from 'containers/domain/UserProfile/components/UserBookings/userBookingReducer';
import { userReviews } from 'containers/domain/UserProfile/components/UserReviews/userReviewReducer';
import { history } from '../browserHistory';
import { reducer as toastrReducer } from 'react-redux-toastr';

const requests = combineReducers({
	viewer: reducerCreator([fetchViewerRoutine.TRIGGER]),
	properties: reducerCreator([getPropertiesRoutine.TRIGGER])
});

export default combineReducers({
	viewer,
	requests,
	property,
	properties,
	userProfile,
	booking,
	review,
	userBookings,
	userReviews,
	router: connectRouter(history),
	toastr: toastrReducer,
	messages
});
