import { configureStore } from '@reduxjs/toolkit';

import productState from '@store/ProductsSlice';

const store = configureStore({
	reducer: {
		productState,
	},
});

export type AppDispatch = typeof store.dispatch;

export default store;
