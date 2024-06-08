import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { LoggerProperties, LogLineProperties } from '@interfaces';

import JsFileDownloader from 'js-file-downloader';

const initValue: LoggerProperties = {
	namespace: '',
	log: [],
	isLoaded: false,
	eof: false,
	downloadInProgress: false,
};

export const downloadLog = createAsyncThunk<void, void, { state: {logger: LoggerProperties} }>(
	'logger/download',
	(_, { getState }) => {
		const { logger } = getState();

		return new JsFileDownloader({
			url: `${ process.env.PROTOCOL }://${ process.env.HOST }:${ process.env.SERVER_PORT }/download/${ logger.namespace }`,
			filename: `${ logger.namespace }.log`,
		});
	},
);

const loggerSlice = createSlice({
	name: 'logger',
	initialState: initValue,
	reducers: {
		openLog(state, { payload }) {
			state.namespace = payload;
			state.log = [];
		},
		isLoaded(state) {
			state.isLoaded = true;
		},
		isEOF(state) {
			state.eof = true;
		},
		onLogLineReceive(state, { payload: logLine }: { payload: LogLineProperties }) {
			const nodeRefRegExp = /(workspace:\/\/SpacesStore\/([a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}))/;

			const nodeRefLinkTemplate = `${ process.env.PROTOCOL }://${ process.env.HOST }/share/page/console/admin-console/node-browser#state=panel%3Dview%26nodeRef%3Dworkspace%253A%252F%252FSpacesStore%252F$2%26search%3Dworkspace%253A%252F%252FSpacesStore%252F$2%26lang%3Dnoderef%26store%3Dworkspace%253A%252F%252FSpacesStore`;
			const nodeRefLinkHTMLTemplate = `<a style="color: #f8f85a; text-decoration: none" href="${nodeRefLinkTemplate}" target="_blank">$1</a>`;

			const containsNodeRef = logLine.text.match(nodeRefRegExp);

			if (containsNodeRef) {
				logLine.text = logLine.text.replace(nodeRefRegExp, nodeRefLinkHTMLTemplate);
			}

			state.log.push(logLine);
		},
		clearConsole(state) {
			state.log = [];
		},
	},
	extraReducers: (builder) => {
		builder.addCase(downloadLog.pending, (state) => {
			state.downloadInProgress = true;
		}).addCase(downloadLog.fulfilled, (state) => {
			state.downloadInProgress = false;
		}).addCase(downloadLog.rejected, (state) => {
			state.downloadInProgress = false;
		});
	},
});

export const { openLog, isLoaded, isEOF, onLogLineReceive, clearConsole } = loggerSlice.actions;

export default loggerSlice.reducer;
