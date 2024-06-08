import { Manager } from 'socket.io-client';
import { ThunkDispatch } from '@reduxjs/toolkit';

import { onMessageReceive } from '@store/NotificationSlice';

export const socketManagerInit = (dispatch: ThunkDispatch<any, any, any>) => {
	const socketManager = new Manager(`${ process.env.PROTOCOL }://${ process.env.HOST }:${ process.env.SERVER_PORT }`, {
		reconnectionDelay: 5000,
	});

	socketManager.on('error', (exception) => {
		if (exception.message === 'xhr poll error') {
			const errorMessage = 'Не удалось подключиться к серверу';

			console.error(errorMessage);

			dispatch(onMessageReceive({
				status: false,
				message: errorMessage,
			}));
		}
	});

	return socketManager;
};
