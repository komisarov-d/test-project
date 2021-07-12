import React, { FunctionComponent, useState } from 'react';
import { useSelector } from 'react-redux';

import UserInfo from './components/UserInfo';
import UserReviews from './components/UserReviews';
import UserBookings from './components/UserBookings';
import { Tabs, PageContainer, PersonOutlineIcon, ReviewIcon, CheckmarkIcon } from 'components';
import { RootState } from 'common/types';

import { tabsNames } from './en-US.json';

const UserProfile: FunctionComponent = () => {
	// tab indexes are equal to order of elements passed as children
	// which means that UserInfo will have tab index 0
	const [activeTab, setActiveTab] = useState(0);
	const user = useSelector((state: RootState) => state.userProfile.user);

	return (
		<PageContainer>
			<div className="w-full h-full">
				<div className="max-w-screen-lg p-0 my-0 mx-auto">
					<div>
						<Tabs
							tabsNames={tabsNames}
							tabsIcons={[PersonOutlineIcon, CheckmarkIcon, ReviewIcon]}
							className="flex justify-between"
							activeTabIndex={activeTab}
							tabLabelsClassName="flex flex-col px-4 w-3/12"
							tabClassName="w-9/12"
							onChangeActiveTabIndex={index => setActiveTab(index)}
						>
							<UserInfo user={user} />
							<UserBookings />
							<UserReviews />
						</Tabs>
					</div>
				</div>
			</div>
		</PageContainer>
	);
};

export default UserProfile;
