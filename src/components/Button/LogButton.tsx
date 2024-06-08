import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';

import styles from './Button.module.scss';

export const LogButton = ({ path }: Properties) => {
	const navigate = useNavigate();

	const namespace = path.replace('/logs/', '');
	const filename = `${namespace}.log`;

	const onLogButtonClickHandler = () => {
		navigate(path);
	};

	return (
		<Button
			className={ styles.button }
			variant="contained"
			onClick={ onLogButtonClickHandler }>
			{ filename }
		</Button>
	);
};

interface Properties {
	path: string;
}
