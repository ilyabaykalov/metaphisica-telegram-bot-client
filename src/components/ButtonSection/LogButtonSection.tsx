import React from 'react';

import { LogButton } from '@components';

import { PATHS } from '@router';

import styles from './ButtonSection.module.scss';

export const LogButtonSection = () => (
	<div className={ styles.buttons }>
		<LogButton path={ PATHS.catalina }/>
		<LogButton path={ PATHS.localhost_access }/>
		<LogButton path={ PATHS.alfresco }/>
		<LogButton path={ PATHS.share }/>
		<LogButton path={ PATHS.businessjournal }/>
		<LogButton path={ PATHS.notificationstore }/>
	</div>
);
