import React, { FunctionComponent } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

interface PageContainerProps {
	classes?: string;
	title?: string;
	sidebar?: React.ReactNode;
}

const PageContainer: FunctionComponent<PageContainerProps> = ({ children, sidebar, title, classes = '' }) => {
	return (
		<div className={clsx('w-full flex-grow max-w-screen-2xl mx-auto relative', classes)}>
			<div className="flex h-full w-full">
				{sidebar && (
					<aside className="w-sidebar mr-4 relative flex-shrink-0">
						<div
							className={`${styles.scrollbar} w-sidebar py-5 pl-2 pr-6 fixed top-16 bottom-0 overflow-visible overflow-y-auto 
              scrollbar scrollbar-thin scrollbar scrollbar-thumb-rounded scrollbar-thumb-gray-400 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-500`}
						>
							{sidebar}
						</div>
					</aside>
				)}
				<main className="p-5 flex flex-col flex-grow">
					{title && <h1 className="text-2xl font-semibold">{title}</h1>}
					{children}
				</main>
			</div>
		</div>
	);
};

export default PageContainer;
