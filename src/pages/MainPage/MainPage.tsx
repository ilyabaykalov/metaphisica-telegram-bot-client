import React, { useEffect } from 'react';

const tg = window.Telegram.WebApp;

import { useDispatch } from 'react-redux';
import { AppDispatch } from '@store';

import { projectInfoNamespaceInit } from '@socket-namespaces';
import { LogButtonSection, Notification, ProjectInfo, ScriptButtonSection } from '@components';

import { Button } from '@mui/material';
import JavaScriptIcon from '@mui/icons-material/Javascript';
import LanguageIcon from '@mui/icons-material/Language';

import styles from './MainPage.module.scss';
import { useNavigate } from 'react-router-dom';

const MainPage = ({ title }: Properties) => {
	// const dispatch = useDispatch<AppDispatch>();
	//
	// useEffect(() => {
	// 	const socket = projectInfoNamespaceInit(dispatch);
	//
	// 	return () => {
	// 		socket.disconnect();
	// 	};
	// }, []);
	//
	// const onJsConsoleButtonClickHandler = () => {
	// 	window.open(`${ process.env.PROTOCOL }://${ process.env.HOST }/share/page/console/admin-console/javascript-console`);
	// };
	//
	// const onSiteButtonClickHandler = () => {
	// 	window.open(`${ process.env.PROTOCOL }://${ process.env.HOST }/share/page/arm?code=SBER_NPF`);
	// };
	useEffect(() => {
		tg.ready();
	}, []);

	const onCloseButtonHandler = () => {
		tg.close();
	};

	return (
		<>
			<p>Test</p>
			<button onClick={onCloseButtonHandler}>Закрыть</button>
		</>
	);
};

interface Properties {
	title: string;
}

export default MainPage;
