import React, { FunctionComponent } from 'react';

export interface IPopoverOption {
	id?: number;
	icon?: React.FunctionComponent<any>;
	primary: string;
	secondary?: string;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const PopoverOption: FunctionComponent<IPopoverOption> = ({ icon: Icon, primary, secondary, onClick }) => {
	return (
		<button
			className="cursor-pointer flex w-full items-center p-3 border-transparent border-l-2 relative hover:bg-green-100"
			onClick={onClick}
			type="button"
		>
			<div className="w-6 flex flex-col items-center  ">
				{Icon && (
					<div className="flex relative w-5 h-5 bg-orange-500 justify-center items-center m-1 w-4 h-4 mt-1 rounded-full ">
						<Icon />
					</div>
				)}
			</div>
			<div className="flex flex-col pl-3 ">
				{primary}
				{secondary && (
					<div className="mt-1">
						<div className="text-xs truncate w-full normal-case font-normal text-gray-500">{secondary}</div>
					</div>
				)}
			</div>
		</button>
	);
};

export default PopoverOption;
