// import React from 'react';

// import { useDispatch, useSelector } from 'react-redux';

// import { State } from '@interfaces';

// import { AppDispatch } from '@store';
// import { cancelDialog, submitDialog } from '@store/ConfirmDialogSlice';

// import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

// export const ConfirmDialog = () => {
// 	const dispatch = useDispatch<AppDispatch>();
//
// 	const isOpen = useSelector(({ confirmDialog }: State) => confirmDialog.isOpen);
// 	const title = useSelector(({ confirmDialog }: State) => confirmDialog.title);
// 	const text = useSelector(({ confirmDialog }: State) => confirmDialog.text);
// 	const buttonCancelText = useSelector(({ confirmDialog }: State) => confirmDialog.buttonCancelText);
// 	const buttonSubmitText = useSelector(({ confirmDialog }: State) => confirmDialog.buttonSubmitText);
//
// 	const onCloseDialogHandler = () => {
// 		dispatch(cancelDialog());
// 	};
//
// 	const onSubmitDialogHandler = () => {
// 		dispatch(submitDialog());
// 	};
//
// 	return (
// 		<Dialog
// 			open={ isOpen }
// 			onClose={ onCloseDialogHandler }
// 			aria-labelledby="alert-dialog-title"
// 			aria-describedby="alert-dialog-description">
// 			<DialogTitle id="alert-dialog-title">
// 				{ title || 'Вы уверены?' }
// 			</DialogTitle>
// 			<DialogContent>
// 				<DialogContentText id="alert-dialog-description">
// 					{ text }
// 				</DialogContentText>
// 			</DialogContent>
// 			<DialogActions>
// 				<Button onClick={ onCloseDialogHandler }>{ buttonCancelText || 'Отменить' }</Button>
// 				<Button onClick={ onSubmitDialogHandler } autoFocus>
// 					{ buttonSubmitText || 'Уверен' }
// 				</Button>
// 			</DialogActions>
// 		</Dialog>
// 	);
// };
