import React, { useState, FunctionComponent, useEffect } from 'react';
import clsx from 'clsx';

interface Props {
	tabsNames: string[];
	tabsIcons?: FunctionComponent[];
	className?: string;
	tabLabelsClassName?: string;
	tabClassName?: string;
	activeTabIndex?: number;
	onChangeActiveTabIndex?: (activeTabIndex: number) => void;
}

export const Tabs: FunctionComponent<Props> = ({
	tabsNames,
	tabsIcons,
	className,
	tabClassName,
	tabLabelsClassName,
	activeTabIndex,
	onChangeActiveTabIndex,
	children
}) => {
	const [selectedTab, setSelectedTab] = useState(activeTabIndex || 0);
	useEffect(() => {
		setSelectedTab(activeTabIndex);
	}, [activeTabIndex]);

	const changeSelectedTab = (tabIndex: number) => {
		setSelectedTab(tabIndex);
		if (onChangeActiveTabIndex) onChangeActiveTabIndex(tabIndex);
	};

	if (!tabsNames) return <>{children}</>;
	const tabsLabels = React.Children.map(children, (_, index) => {
		const id = `input_${index}_${selectedTab}`;
		let TabIcon;
		if (tabsIcons) TabIcon = tabsIcons[index];
		return (
			<>
				<label
					htmlFor={id}
					className={clsx(
						`flex items-center py-4 px-2 w-28 cursor-pointer text-left border-b border-gray-300 w-full ${
							index === selectedTab ? 'text-black' : 'text-black'
						}`,
						index === selectedTab && 'text-blue-500'
					)}
				>
					{TabIcon && (
						<div
							className={clsx(
								'inline-flex justify-between items-center text-black w-8 h-8 bg-gray-300 rounded-full p-1.5 mr-3',
								index === selectedTab && 'text-blue-500'
							)}
						>
							<TabIcon />
						</div>
					)}
					{tabsNames[index]}
					<input
						id={id}
						name="Tabs"
						type="radio"
						className="hidden"
						defaultChecked={index === 0}
						onClick={() => changeSelectedTab(index)}
					/>
				</label>
			</>
		);
	});
	// wrap each child in separated component
	const wrappedChildren = React.Children.map(children, (child, index) => {
		return <div className={clsx(index !== selectedTab && 'hidden', tabClassName)}>{child}</div>;
	});

	return (
		<div className={clsx('w-full', className)}>
			<div className={clsx(tabLabelsClassName, '')}>{tabsLabels}</div>
			{wrappedChildren}
		</div>
	);
};
