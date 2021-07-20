import React, { FunctionComponent } from 'react';

type NavItem = {
	text: string;
	href: string;
};

interface Props {
	navItems: NavItem[];
}

const NavigationBar: FunctionComponent<Props> = ({ navItems }) => {
	const listItemClasses = 'text-center table-cell border-solid border-white border-r-2 last:border-r-0';
	const listItemHrefClasses = 'block text-blue-700 p-1';

	return (
		<div className="table w-full mt-2 mb-5 border-solid border-blue-700 border-b-2">
			<ul className="bg-blue-100 table-row p-0 list-none text-lg font-bold">
				{navItems.map(navItem => (
					<li key={navItem.text} className={listItemClasses}>
						<a className={listItemHrefClasses} href={navItem.href}>
							{navItem.text}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default NavigationBar;
