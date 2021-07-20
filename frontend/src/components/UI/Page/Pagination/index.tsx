/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Paginate from 'react-js-pagination';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

interface PaginationProps {
	page: number;
	total: number;
	perPage?: number;
	onChange: (page: any) => any;
}

const Pagination: React.FC<PaginationProps> = ({ page, total, perPage = 10, onChange }) => {
	if (Math.ceil(total / perPage) <= 1) {
		return null;
	}

	return (
		<div className="w-full flex justify-center mx-auto mt-6 py-4 border-t border-gray-200 bg-white rounded shadow">
			<Paginate
				activePage={page || 1}
				itemsCountPerPage={perPage}
				totalItemsCount={total}
				onChange={onChange}
				pageRangeDisplayed={window.innerWidth > 650 ? 5 : 3}
				prevPageText={<ChevronLeftIcon className="h-5 w-3" aria-hidden="true" />}
				nextPageText={<ChevronRightIcon className="h-5 w-3" aria-hidden="true" />}
				disabledClass="opacity-60"
				innerClass="relative z-0 inline-flex rounded-md -space-x-px"
				linkClass="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-green-200"
				breakClassName="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
				activeClass="bg-green-500"
			/>
		</div>
	);
};

export default Pagination;
