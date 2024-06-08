import { ThunkDispatch } from '@reduxjs/toolkit';

import { closeNotification } from '@store/NotificationSlice';
import { onFileDatesReceive, onProjectVersionReceive } from '@store/ProjectInfoSlice';

import { socketManagerInit } from '@utils';

export const projectInfoNamespaceInit = (dispatch: ThunkDispatch<any, any, any>) => {
	const manager = socketManagerInit(dispatch);

	// TODO: поменять "project" на "project-info"
	const socket = manager.socket('/project');

	socket.on('connect', () => {
		dispatch(closeNotification());
	});

	socket.on('project-version', (projectVersion: string) => {
		dispatch(onProjectVersionReceive({ projectVersion }));
	});

	socket.on('project-file-dates', (alfrescoWarDate: string, shareWarDate: string) => {
		dispatch(onFileDatesReceive({
			alfrescoWarDate,
			shareWarDate,
		}));
	});

	return socket;
};
