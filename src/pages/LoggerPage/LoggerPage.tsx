import React, { useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@store';
import { clearConsole, downloadLog, openLog } from '@store/LoggerSlice';

import { useScrollDirection } from 'react-use-scroll-direction';

import classNames from 'classnames';

import { Link, useLocation } from 'react-router-dom';
import { PATHS } from '@router';

import { Box, Button, CircularProgress, Switch } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CloseIcon from '@mui/icons-material/Close';

import { Notification } from '@components';

import { loggerNamespaceInit } from '@socket-namespaces';

import { State } from '@interfaces';

import styles from './LoggerPage.module.scss';

const LoggerPage = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { pathname } = useLocation();

	const namespace = pathname.replace('/logs/', '');

	const log = useSelector(({ logger }: State) => logger.log);
	const foundEOF = useSelector(({ logger }: State) => logger.eof);
	const isLoaded = useSelector(({ logger }: State) => logger.isLoaded);
	const downloadInProgress = useSelector(({ logger }: State) => logger.downloadInProgress);

	const logTextRef = useRef(null);

	const [ isAutoScrollEnabled, setAutoScrollEnabled ] = useState(true);
	const { isScrollingUp } = useScrollDirection(logTextRef.current);

	useEffect(() => {
		dispatch(openLog(namespace));

		const socket = loggerNamespaceInit(namespace, dispatch);

		return () => {
			socket.disconnect();
		};
	}, []);

	useEffect(() => {
		if (isAutoScrollEnabled) {
			logTextRef.current.scrollTo({
				top: logTextRef.current.scrollHeight,
			});
		}
	}, [ log, isAutoScrollEnabled ]);

	const onAutoScrollEnableChange = () => {
		setAutoScrollEnabled((prevState) => !prevState);
	};

	const onDownloadButtonClickHandler = () => {
		dispatch(downloadLog());
	};

	const onClearConsoleButtonClickHandler = () => {
		dispatch(clearConsole());

		setAutoScrollEnabled(true);
	};

	const onScrollUpTerminal = () => {
		if (foundEOF && isAutoScrollEnabled && isScrollingUp) {
			setAutoScrollEnabled(false);
		}
	};

	return (
		<>
			<div className={ styles.container }>
				<img className={ styles.logo } src={ '../logo.png' } alt="logo"/>

				<div className={ styles.workspace }>
					<div className={ styles.tools }>
						<Button
							className={ styles.toolButton }
							variant="contained"
							onClick={ onClearConsoleButtonClickHandler }>
							<DeleteForeverIcon sx={ {
								display: 'flex',
								fontSize: 40,
							} }/>
						</Button>

						<Button
							className={ styles.toolButton }
							variant="contained"
							onClick={ onDownloadButtonClickHandler }>
							<SaveIcon sx={ {
								display: downloadInProgress ? 'none' : 'flex',
								fontSize: 40,
							} }/>
							<Box sx={ {
								display: downloadInProgress ? 'flex' : 'none',
								alignItems: 'center',
								justifyContent: 'center',
								height: 'inherit',
							} }>
								<CircularProgress sx={ { color: 'white' } }/>
							</Box>
						</Button>

						<Switch
							checked={ isAutoScrollEnabled }
							onChange={ onAutoScrollEnableChange }
							inputProps={ { 'aria-label': 'controlled' } }/>
						<span>Auto-scroll</span>
					</div>

					<div className={ styles.terminal }>
						<div className={ styles.header }>
							<div className={ styles.buttons }>
								<Link className={ classNames(styles.button, styles.buttonRed) } to={ PATHS.root }>
									<CloseIcon sx={ { fontSize: '.8em' } }/>
								</Link>
								<span className={ classNames(styles.button, styles.buttonBlue) }/>
								<span className={ classNames(styles.button, styles.buttonGreen) }/>
							</div>
							{ namespace }.log
						</div>

						<div className={ styles.text } ref={ logTextRef } onScroll={ onScrollUpTerminal }>
							<Box sx={ {
								display: isLoaded ? 'none' : 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								height: 'inherit',
							} }>
								<CircularProgress/>
							</Box>
							{ log.map(({ key, logLevel, text }) =>
								<p
									className={ logLevel === 'warning' ? styles.warning : logLevel === 'error' ? styles.error : !logLevel ? styles.error : styles.info }
									id={ key.toString() }
									key={ key }
									dangerouslySetInnerHTML={ { __html: text }}/>)
							}
						</div>
					</div>
				</div>
			</div>

			<Notification/>
		</>
	);
};

export default LoggerPage;
