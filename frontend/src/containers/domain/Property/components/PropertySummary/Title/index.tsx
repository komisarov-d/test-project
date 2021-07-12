import React, { FunctionComponent } from 'react';

import { Button } from 'components/UI/Buttons';
import { HeartIcon, ShareIcon, QualityCheckmarkIcon } from 'components';

import { title as titleTranslation } from '../../../en-CA.json';

interface Props {
	title: string;
	address: string;
}

const Title: FunctionComponent<Props> = ({ title, address }) => {
	const titleClasses = 'flex justify-between';
	const titleInfoClasses = 'flex flex-col';
	const titleActionsBook = 'flex justify-between items-center';
	const titleActionsActionIcon =
		'flex justify-between items-center text-white w-7 h-7 bg-blue-500 rounded-full p-1.5 ml-3 hover:bg-blue-600 cursor-pointer';
	const titleRateGuarantee = 'flex mt-5 items-center';
	const titleRateGuaranteeText = 'font-bold italic';

	const { priceMatch, btnReserve } = titleTranslation;

	return (
		<div className={titleClasses}>
			<div className={titleInfoClasses}>
				<h2 className="text-lg font-bold">{title}</h2>
				<span className="text-base">{address}</span>
			</div>
			<div>
				<div className={titleActionsBook}>
					<Button color="inherit" buttonStyle="booking">
						{btnReserve}
					</Button>
					<div className={titleActionsActionIcon}>
						<HeartIcon />
					</div>
					<div className={titleActionsActionIcon}>
						<ShareIcon />
					</div>
				</div>
				<div className={titleRateGuarantee}>
					<div className={`${titleActionsActionIcon} mr-3`}>
						<QualityCheckmarkIcon />
					</div>
					<span className={titleRateGuaranteeText}>{priceMatch}</span>
				</div>
			</div>
		</div>
	);
};

export default Title;
