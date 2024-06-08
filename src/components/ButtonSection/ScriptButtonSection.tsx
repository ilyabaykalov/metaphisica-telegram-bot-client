import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '@store';
import { execScript } from '@store/ScriptsSlice';

import { State } from '@interfaces';

import { ConfirmDialog, ScriptButton } from '@components';

import styles from './ButtonSection.module.scss';

export const ScriptButtonSection = () => {
	const dispatch = useDispatch<AppDispatch>();

	const scripts = useSelector(({ scripts }: State) => scripts.scripts);

	const confirmedScript = useSelector(({ confirmDialog }: State) => confirmDialog.scriptFilename);
	const isConfirm = useSelector(({ confirmDialog }: State) => confirmDialog.isConfirm);

	useEffect(() => {
		if (confirmedScript && isConfirm) dispatch(execScript(confirmedScript));
	}, [ isConfirm ]);

	return (
		<>
			<div className={ styles.buttons }>{
				scripts.map(({ filename, callback }) => (
					<ScriptButton key={ filename } scriptFilename={ filename } callback={callback}/>
				))
			}</div>

			<ConfirmDialog/>
		</>
	);
};
