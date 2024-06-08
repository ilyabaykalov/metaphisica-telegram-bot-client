import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@store';
import { closeNotification } from '@store/NotificationSlice';

import { State } from '@interfaces';

import { Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const Notification = () => {
	const dispatch = useDispatch<AppDispatch>();

	const status = useSelector(({ notifications }: State) => notifications.status);
	const message = useSelector(({ notifications }: State) => notifications.message);
	const isShowed = useSelector(({ notifications }: State) => notifications.isShowed);

	useEffect(() => {
		if (status) {
			dispatch(closeNotification());
		}
	}, [status]);

	return (<Alert
		variant="filled"
		severity={ status ? 'success' : 'error' }
		icon={ status ? <CheckIcon fontSize="inherit"/> : <WarningAmberIcon fontSize="inherit"/> }
		sx={ {
			opacity: isShowed ? '0' : '1',
			position: 'fixed',
			bottom: '20px',
			right: '20px',
			width: 'max-content',
			transition: 'opacity .5s ease-in-out',
			fontFamily: 'Jura',
			fontWeight: 'normal',
		} }>
		{ message }
	</Alert>);
};

export default Notification;
