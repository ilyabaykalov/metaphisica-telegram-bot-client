import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { LoggerPage, MainPage } from '@pages';

import { PATHS } from './paths';

const BrowserRouter = createBrowserRouter([
	{ path: PATHS.root, element: <MainPage/> },
	{ path: PATHS.catalina, element: <LoggerPage/> },
	{ path: PATHS.localhost_access, element: <LoggerPage/> },
	{ path: PATHS.alfresco, element: <LoggerPage/> },
	{ path: PATHS.share, element: <LoggerPage/> },
	{ path: PATHS.businessjournal, element: <LoggerPage/> },
	{ path: PATHS.notificationstore, element: <LoggerPage/> },
]);

export default BrowserRouter;
