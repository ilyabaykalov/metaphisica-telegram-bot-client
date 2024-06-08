import React from 'react';

import { useDispatch } from 'react-redux';

import { AppDispatch } from '@store';
import { confirmAction, dialogCallback } from '@store/ConfirmDialogSlice';

import { Button } from '@mui/material';

import styles from './Button.module.scss';

export const ScriptButton = ({ scriptFilename, callback }: Properties) => {
	const dispatch = useDispatch<AppDispatch>();

	const openDialogHandler = () => {
		dispatch(confirmAction({
			text: `Вы действительно собираетесь выполнить скрипт ${ scriptFilename.toUpperCase() }?`,
			buttonSubmitText: 'ДА',
			scriptFilename,
		}));

		if (callback) {
			dispatch(dialogCallback({ callback }));
		}
	};

	return (
		<Button
			variant="contained"
			className={ styles.button }
			onClick={ openDialogHandler }>
			{ scriptFilename }
		</Button>
	);
};

interface Properties {
	scriptFilename: string;
	callback?: () => void;
}
