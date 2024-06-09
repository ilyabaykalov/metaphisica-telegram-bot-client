import { createSlice } from '@reduxjs/toolkit';

// import { ConfirmDialogProperties } from '@interfaces';
//
// const initValue: ConfirmDialogProperties = {
// 	isOpen: false,
// 	title: 'Вы уверены?',
// 	text: 'Подтвердите свое действие',
// 	buttonCancelText: 'Отменить',
// 	buttonSubmitText: 'Выполнить',
// 	isConfirm: false,
// 	scriptFilename: '',
// };

// const confirmDialogSlice = createSlice({
// 	name: 'confirm-dialog',
// 	initialState: initValue,
// 	reducers: {
// 		confirmAction(state, { payload }) {
// 			state.isOpen = true;
// 			state.title = payload.title;
// 			state.text = payload.text;
// 			state.buttonCancelText = payload.buttonCancelText;
// 			state.buttonSubmitText = payload.buttonSubmitText;
// 			state.isConfirm = false;
// 			state.scriptFilename = payload.scriptFilename;
// 		},
// 		cancelDialog(state) {
// 			state.isOpen = false;
// 			state.isConfirm = false;
// 			state.scriptFilename = '';
// 		},
// 		submitDialog(state) {
// 			state.isOpen = false;
// 			state.isConfirm = true;
// 		},
//
// 		dialogCallback(_, { payload }) {
// 			payload.callback();
// 		},
// 	},
// });

// export const { confirmAction, cancelDialog, submitDialog, dialogCallback } = confirmDialogSlice.actions;

// export default confirmDialogSlice.reducer;
