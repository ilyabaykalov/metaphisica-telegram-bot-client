import React from 'react';

import { createBrowserRouter } from 'react-router-dom';

import { MainPage, ProductDetailsPage } from '@pages';

import { PATHS } from './paths';

const BrowserRouter = createBrowserRouter([
	{ path: PATHS.catalog, element: <MainPage/> },
	{ path: PATHS.product, element: <ProductDetailsPage/> },
]);

export default BrowserRouter;
