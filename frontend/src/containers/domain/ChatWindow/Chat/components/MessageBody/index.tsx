import React, { FunctionComponent } from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { RootState } from 'common/types';

interface Props {
	authorId: number;
	text: string;
	createdAt: string;
}

const MessageBody: FunctionComponent<Props> = ({ authorId, text, createdAt }) => {
	const userData = useSelector((state: RootState) => state.viewer.viewer);
	return (
		<div className="flex flex-col mx-3 mb-5 mt-3">
			<div
				className={clsx(
					'list-none flex items-center my-1 font-semibold space-x-2',
					authorId === userData.id ? 'ml-auto' : 'mr-auto'
				)}
			>
				<img
					className="w-8 h-8 rounded-full self-end my-1 mr-1"
					src="https://www.computerra.ru/wp-content/uploads/2020/09/1-2020-09-25T191424.380.jpg"
					alt="profile_img"
				/>
				{userData.firstName}
				<div className="text-gray-400 font-normal text-xs">{createdAt}</div>
			</div>
			<li
				className={clsx(
					'list-none  py-2 px-6 break-words max-w-sm',
					authorId === userData.id
						? 'ml-auto text-white  bg-blue-500 rounded-l-md rounded-br-md'
						: ' mr-auto bg-gray-200 rounded-r-md rounded-bl-md'
				)}
			>
				<span>{text}</span>
			</li>
		</div>
	);
};

export default MessageBody;
