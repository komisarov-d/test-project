// these functions create data required for using specific EditableField component
import { UserProfileInputField } from 'common/models';
import { editableFieldslabels } from '../../en-US.json';

export const createPasswordFieldsData = (isActive: boolean): UserProfileInputField[] => {
	let passwordFieldsData: UserProfileInputField[] = [
		{
			fieldLabel: '',
			fieldInactiveLabel: '',
			name: 'password',
			fieldType: ''
		}
	];

	if (isActive) {
		passwordFieldsData = [
			{
				fieldLabel: editableFieldslabels.newPassword,
				fieldInactiveLabel: ``,
				name: 'password',
				fieldType: 'password'
			},
			{
				fieldLabel: editableFieldslabels.repeatPassword,
				fieldInactiveLabel: ``,
				name: 'password_repeat',
				fieldType: 'password'
			}
		];
	}
	return passwordFieldsData;
};

export const createNameFieldsData = (
	isActive: boolean,
	inactiveLabel: string,
	activeFirstNameLabel: string,
	activeLastNamelabel: string
): UserProfileInputField[] => {
	let nameFieldsData = [
		{
			fieldLabel: '',
			fieldInactiveLabel: inactiveLabel,
			name: '',
			allowedSymbols: new RegExp('')
		}
	];

	if (isActive) {
		nameFieldsData = [
			{
				fieldLabel: editableFieldslabels.firstName,
				fieldInactiveLabel: activeFirstNameLabel,
				name: 'firstName',
				allowedSymbols: new RegExp('^[a-zA-Z]*$')
			},
			{
				fieldLabel: editableFieldslabels.lastName,
				fieldInactiveLabel: activeLastNamelabel,
				name: 'lastName',
				allowedSymbols: new RegExp('^[a-zA-Z]*$')
			}
		];
	}
	return nameFieldsData;
};

export const createPhoneFieldData = (inactiveLabel: string): UserProfileInputField[] => {
	const emailFieldsData = [
		{
			fieldLabel: editableFieldslabels.phone,
			fieldInactiveLabel: inactiveLabel,
			name: 'phone'
		}
	];
	return emailFieldsData;
};

export const createEmailFieldData = (activeLabel: string, inactiveLabel: string): UserProfileInputField[] => {
	const emailFieldsData = [
		{
			fieldLabel: editableFieldslabels.email,
			fieldInactiveLabel: inactiveLabel,
			name: 'email'
		}
	];
	return emailFieldsData;
};

export const createAddressFieldData = (activeLabel: string, inactiveLabel: string): UserProfileInputField[] => {
	const addressFieldsData = [
		{
			fieldLabel: editableFieldslabels.address,
			fieldInactiveLabel: inactiveLabel,
			name: 'address',
			allowedSymbols: new RegExp('^[a-zA-Z]*$')
		}
	];
	return addressFieldsData;
};

export const createBirthdateFieldData = (activeLabel: string, inactiveLabel: string): UserProfileInputField[] => {
	const birthdateFieldsData = [
		{
			fieldLabel: editableFieldslabels.birthDate,
			fieldInactiveLabel: inactiveLabel,
			name: 'birthdate',
			fieldType: 'datePicker'
		}
	];
	return birthdateFieldsData;
};
