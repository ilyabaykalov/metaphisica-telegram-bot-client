import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ScriptsProperties } from '@interfaces';

import { axios } from '@utils';

const initValue: ScriptsProperties = {
	scripts: [
		{ filename: 'stop' },
		{ filename: 'start' },
		{ filename: 'restart' },
		{ filename: 'redeploy' },
		{
			filename: 'copy war',
			callback: () => {
				setTimeout(() => {
					window.open('https://cloud.blogic.ru/index.php/apps/files/?dir=/sber-npf/release-builds', '_blank');
				}, 10000);
			},
		},
		{ filename: 'notify' } ],
};

export const execScript = createAsyncThunk(
	'scripts/exec',
	async (filename: string) => {
		const url = `${ process.env.PROTOCOL }://${ process.env.HOST }:${ process.env.SERVER_PORT }/exec`;

		await axios.post(url, { filename });
	},
);

const scriptsSlice = createSlice({
	name: 'scripts',
	initialState: initValue,
	reducers: {},
});

export default scriptsSlice.reducer;
