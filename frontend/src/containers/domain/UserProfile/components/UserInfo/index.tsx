/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FunctionComponent, useState, useMemo } from 'react';

import { IUser } from 'common/models';
import ImageUpload from 'components/ImageUpload';
import DataRow from './DataRow';
import * as Yup from 'yup';
import {
	createAddressFieldData,
	createBirthdateFieldData,
	createEmailFieldData,
	createNameFieldsData,
	createPasswordFieldsData,
	createPhoneFieldData
} from './utils';

import { userInfo as userInfoTranslations } from '../../en-US.json';
import { useSelector } from 'react-redux';
import { RootState } from 'common/types';

interface Props {
	user: IUser;
}

const UserInfo: FunctionComponent<Props> = ({ user }) => {
	const [profileImageUrl, setProfileImageUrl] = useState(user.profileImage);
	const userDataBase = useSelector((state: RootState) => state.viewer.viewer);
	const [userData, setUserData] = useState({
		firstName: userDataBase.firstName,
		lastName: userDataBase.lastName,
		birthdate: '',
		address: userDataBase.city,
		email: userDataBase.email,
		password: '',
		password_repeat: '',
		phone: ''
	});
	const [editableFields, setEditableFields] = useState({
		name: false,
		email: false,
		birthdate: false,
		address: false,
		password: false,
		phone: false
	});

	const { DataRowsLabels, title, dataRowsYupErrors } = userInfoTranslations;

	const formikProps = useMemo(
		() => ({
			initialValues: { ...userData, password_repeat: '' },
			validationSchema: Yup.object().shape({
				email: Yup.string().email(dataRowsYupErrors.email.invalid).required(dataRowsYupErrors.email.required),
				password: Yup.string().required(dataRowsYupErrors.password.required),
				password_repeat: Yup.string()
					.required(dataRowsYupErrors.password.required)
					.oneOf([Yup.ref('password'), null], dataRowsYupErrors.password.match),
				firstName: Yup.string().required(dataRowsYupErrors.name.firstName),
				lastName: Yup.string().required(dataRowsYupErrors.name.lastName),
				address: Yup.string().required(dataRowsYupErrors.address)
			})
		}),
		[userData, dataRowsYupErrors]
	);

	const onSubmit = (values: any) => {
		let { birthdate } = userData;
		if ('birthdate' in values) {
			birthdate = (values.birthdate as Date)?.toDateString() || userData.birthdate;
		}
		setUserData(currentUserData => ({
			...currentUserData,
			...values,
			birthdate
		}));
	};

	const dataRowsProps = [
		{
			rowName: 'name',
			rowLabel: DataRowsLabels.name,
			fields: createNameFieldsData(
				editableFields.name,
				`${userData.firstName} ${userData.lastName}`,
				userData.firstName,
				userData.lastName
			)
		},
		{
			rowName: 'email',
			rowLabel: DataRowsLabels.email,
			fields: createEmailFieldData(DataRowsLabels.email, userData.email)
		},
		{
			rowName: 'phone',
			rowLabel: DataRowsLabels.phone,
			fields: createPhoneFieldData(userData.phone)
		},
		{
			rowName: 'birthdate',
			rowLabel: DataRowsLabels.birthDate,
			fields: createBirthdateFieldData(DataRowsLabels.birthDate, `${userData.birthdate || ''}`),
			fieldType: 'datePicker'
		},
		{
			rowName: 'address',
			rowLabel: DataRowsLabels.address,
			fields: createAddressFieldData(DataRowsLabels.address, userData.address)
		},
		{
			rowName: 'password',
			rowLabel: DataRowsLabels.password,
			fields: createPasswordFieldsData(editableFields.password),
			fieldType: 'password'
		}
	];

	return (
		<div className="px-4 flex flex-col w-full bg-white pb-2 pt-5">
			<div className="border-b pb-5 px-4 mt-2 border-gray-300">
				<div className="flex justify-between w-full">
					<div className="flex flex-col justify-between">
						<h2 className="font-bold text-2xl">{title.main}</h2>
						<h3 className="text-xl">{title.sub}</h3>
					</div>
					<ImageUpload onInput={() => {}} onLoadPreview={fileUrl => setProfileImageUrl(fileUrl)}>
						<div
							className={`w-24 h-24 border float-left rounded-full flex items-center transform hover:scale-105 transition-transform
				justify-center overflow-hidden hover:border-blue-500 hover:border-4 cursor-pointer focus:outline-none`}
						>
							<img className="h-full w-auto" src={profileImageUrl} alt="profile_img" />
						</div>
					</ImageUpload>
				</div>
			</div>
			{dataRowsProps.map(dataRowProps => (
				<DataRow
					{...dataRowProps}
					formikProps={formikProps}
					key={dataRowProps.rowName}
					initialFieldsValues={userData}
					onSubmit={values => onSubmit(values as typeof userData)}
					isEditable={editableFields[dataRowProps.rowName]}
					onSetEditable={(rowName: string, value: boolean) =>
						setEditableFields({ ...editableFields, [rowName]: value })
					}
				/>
			))}
		</div>
	);
};

export default UserInfo;
