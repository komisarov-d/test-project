import React, { FunctionComponent } from 'react';
import { CreditcardIcon, UnlockIcon } from 'components';

interface Props {
	icon?: string;
	title: string;
	subtitle: string;
}

const Card: FunctionComponent<Props> = ({ icon, title, subtitle }) => {
	const iconTypes = {
		unlock: <UnlockIcon />,
		creditcard: <CreditcardIcon />
	};

	const availabilityItem = 'flex items-center border-2 border-green-600 p-3 bg-green-100 mt-3';
	const availabilityItemTitle = 'font-bold';
	const availabilityItemSubtitle = 'text-green-700';
	const availabilityItemIcon =
		'flex justify-between items-center text-green-700 w-8 h-8 bg-transparent rounded-full p-1 mr-3';

	return (
		<div className={availabilityItem}>
			{icon && <div className={availabilityItemIcon}>{iconTypes[icon]}</div>}
			<div className="description">
				<div className={availabilityItemTitle}>{title}</div>
				<div className={availabilityItemSubtitle}>{subtitle}</div>
			</div>
		</div>
	);
};

export default Card;
