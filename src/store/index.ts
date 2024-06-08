import { configureStore } from '@reduxjs/toolkit';

import notifications from '@store/NotificationSlice';
import projectInfo from '@store/ProjectInfoSlice';
import confirmDialog from '@store/ConfirmDialogSlice';
import logger from '@store/LoggerSlice';
import scripts from '@store/ScriptsSlice';

const store = configureStore({
	reducer: {
		notifications,
		projectInfo,
		confirmDialog,
		logger,
		scripts,
	},
});

export type AppDispatch = typeof store.dispatch;

export default store;
