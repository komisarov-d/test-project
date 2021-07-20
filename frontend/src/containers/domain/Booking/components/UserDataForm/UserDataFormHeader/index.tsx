import React, { FunctionComponent } from 'react';

interface Props {
	firstName: string;
	lastName: string;
}

const UserDataFormHeader: FunctionComponent<Props> = ({ firstName, lastName }) => {
	return (
		<div className="flex justify-between items-center bg-white p-3">
			<span className="text-2xl font-bold">Enter your details</span>
			<span className="text-xl inline-flex items-center p-2">
				<span className="table-cell align-middle mr-2">{firstName}</span>
				<span className="table-cell align-middle mr-3">{lastName}</span>
				<img
					className="w-10 h-10 rounded-full"
					src="https://www.computerra.ru/wp-content/uploads/2020/09/1-2020-09-25T191424.380.jpg"
					alt="profile_img"
				/>
			</span>
		</div>
	);
};

export default UserDataFormHeader;
