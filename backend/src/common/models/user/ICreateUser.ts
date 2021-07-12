import { ManageUser } from '../../enums/user/ManageUser';

export interface ICreateUser {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

export interface ICreateUserRequest {
	[ManageUser.FirstName]: string;
	[ManageUser.LastName]: string;
	[ManageUser.Email]: string;
	[ManageUser.Password]: string;
	[ManageUser.RepeatPassword]: string;
}
