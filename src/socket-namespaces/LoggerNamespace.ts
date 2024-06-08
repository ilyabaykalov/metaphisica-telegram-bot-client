import { ThunkDispatch } from '@reduxjs/toolkit';

import { onMessageReceive } from '@store/NotificationSlice';
import { isEOF, isLoaded, onLogLineReceive } from '@store/LoggerSlice';

import { LogLineProperties } from '@interfaces';

import { socketManagerInit } from '@utils';

export const loggerNamespaceInit = (socketNamespace: string, dispatch: ThunkDispatch<any, any, any>) => {
	const manager = socketManagerInit(dispatch);

	const socket = manager.socket(`/${ socketNamespace }`);

	socket.on('new-log-line', (logLine: LogLineProperties) => {
		dispatch(isLoaded());

		dispatch(onLogLineReceive(logLine));
	});

	socket.on('response', ({ status, message }: { status: boolean, message: string }) => {
		dispatch(onMessageReceive({
			status,
			message,
		}));
	});

	socket.on('eof', () => dispatch(isEOF()));

	return socket;
};
