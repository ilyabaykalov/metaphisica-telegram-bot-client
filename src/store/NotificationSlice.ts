import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { NotificationProperties } from '@interfaces';

export const closeNotification = createAsyncThunk('notifications/close', () =>
	new Promise((resolve) => {
		setTimeout(resolve, 3000);
	}));

const initValue: NotificationProperties = {
	status: undefined,
	isShowed: true,
	message: '',
};

const notificationSlice = createSlice({
	name: 'notifications',
	initialState: initValue,
	reducers: {
		onMessageReceive(state, { payload }) {
			state.status = payload.status;
			state.message = payload.message;
			state.isShowed = false;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(closeNotification.fulfilled, (state: any) => {
			state.isShowed = true;
		});
	},
});

export const { onMessageReceive } = notificationSlice.actions;

export default notificationSlice.reducer;
