import React, { FunctionComponent } from 'react';
import { matchPath } from 'react-router';
import { useLocation, Link } from 'react-router-dom';
import clsx from 'clsx';
import { ReactComponent as Logo } from 'assets/logo.svg';
import SearchForm from 'containers/domain/Properties/common/components/SearchForm';
import { AppRoute } from 'common/enums';
import { ChatWindow } from 'containers/domain/ChatWindow';
import { PersonOutlineWhiteIcon } from 'components/UI';

const Header: FunctionComponent = () => {
	const location = useLocation();
	const isMainPage = matchPath(location.pathname, {
		path: AppRoute.ROOT,
		exact: true
	});

	return (
		<header className={clsx({ 'min-h-header': !isMainPage })}>
			<div
				className={clsx('flex bg-cover bg-center px-4 md:px-10', {
					'flex-col min-h-screen md:min-h-auto pt-10 pb-9 bg-header': isMainPage,
					'shadow-md py-4 w-full z-20 bg-gradient-to-r from-pink-700 via-red-600 to-yellow-500': !isMainPage
				})}
			>
				<div className="flex justify-between w-full">
					<div>
						<Link to={AppRoute.ROOT}>
							<Logo />
						</Link>
					</div>
					<div className="flex space-x-10">
						<ChatWindow />
						<Link to={AppRoute.USER_PROFILE}>
							<PersonOutlineWhiteIcon size="md" />
						</Link>
					</div>
				</div>
				{isMainPage && (
					<div className="flex flex-col items-center mt-auto md:mt-16 xl:mt-36">
						<h1 className="text-3xl text-center font-semibold sm:font-normal sm:text-left sm:text-7xl tracking-widest md:tracking-title text-white leading-snug uppercase">
							book your place
						</h1>
						<div className="max-w-5xl mx-auto w-full mt-12 sm:mt-16">
							<SearchForm />
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
