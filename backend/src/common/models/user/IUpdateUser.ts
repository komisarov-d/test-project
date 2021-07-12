export interface IUpdateUser {
	email?: string;
	firstName?: string;
	middleName?: string;
	lastName?: string;
	password?: string;
	phone?: string;
	groupId?: number;
	externalId?: number;
	originPlatform?: string;
}

export interface IUpdateUserPayload {
	userId: number;
	userData: IUpdateUser;
}
