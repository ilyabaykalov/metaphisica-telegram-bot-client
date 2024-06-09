import React, { useEffect } from 'react';

import { useTelegram } from '@hooks';

import { Catalog, Header } from '@components';

const MainPage = () => {
	const { onReady } = useTelegram();

	useEffect(() => {
		onReady();
	}, []);

	return (
		<>
			<Header/>

			<Catalog/>
		</>
	);
};

export default MainPage;
