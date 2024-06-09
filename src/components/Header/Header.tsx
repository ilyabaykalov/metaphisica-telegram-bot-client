import React from 'react';

import styles from './Header.module.scss';

export const Header = () => (
	<header className={ styles.header }>
		<img src="/logo.png" alt="logo"/>
	</header>
);
