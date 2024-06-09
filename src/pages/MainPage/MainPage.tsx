import React, { useEffect } from 'react';

import { Header, Catalog } from '@components';

const tg = window.Telegram.WebApp;

const MainPage = () => {
	useEffect(() => {
		tg.ready();
	}, []);

	return (
		<>
			<Header/>

			<Catalog/>
		</>
	);
};

export default MainPage;
