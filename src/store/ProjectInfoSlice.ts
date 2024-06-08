import { createSlice } from '@reduxjs/toolkit';

import { ProjectInfoProperties } from '@interfaces';

const initValue: ProjectInfoProperties = {
	projectVersion: undefined,
	alfrescoWarDate: undefined,
	shareWarDate: undefined,
};

const projectInfoSlice = createSlice({
	name: 'project-info',
	initialState: initValue,
	reducers: {
		onProjectVersionReceive(state, { payload }) {
			state.projectVersion = payload.projectVersion;
		},
		onFileDatesReceive(state, { payload }) {
			state.alfrescoWarDate = payload.alfrescoWarDate;
			state.shareWarDate = payload.shareWarDate;
		},
	},
});

export const { onProjectVersionReceive, onFileDatesReceive } = projectInfoSlice.actions;

export default projectInfoSlice.reducer;
