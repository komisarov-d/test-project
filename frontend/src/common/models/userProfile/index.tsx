import { IUser } from '../user/IUser';

export interface UserProfileInputField {
	fieldType?: string;
	fieldLabel: string;
	fieldInactiveLabel: string;
	name: string;
	allowedSymbols?: RegExp;
}

// Record<string, unknown> is being used as type object here
export interface UserProfileDataRow {
	rowName: string;
	rowLabel: string;
	initialFieldsValues: Record<string, unknown>;
	fields: UserProfileInputField[];
	fieldsInfo?: string;
	onSubmit: (values: Record<string, unknown>) => void;
	onSetEditable: (rowName: string, isEditable: boolean) => void;
	isEditable: boolean;
	formikProps: Record<string, unknown>;
	errorText?: string;
	type?: string;
}

export interface UserInfo {
	user: IUser;
	userDataRows: UserProfileDataRow[];
}
