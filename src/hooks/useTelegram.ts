import { useNavigate } from 'react-router-dom';

import { ProductProperties } from '@interfaces';
import { axios } from '@utils';

const telegram = window.Telegram.WebApp;

export const useTelegram = () => {
	const navigate = useNavigate();

	const onReady = () => {
		telegram.ready();
		telegram.expand();

		telegram.BackButton.hide();
		telegram.MainButton.hide();
	};

	const onClose = () => {
		telegram.close();
	};

	const getUserData = () => telegram.initDataUnsafe?.user;

	const setEventMainButtonClick = (text: string, event: () => void) => {
		telegram.MainButton.show();

		telegram.MainButton.setParams({
			text,
		});

		telegram.MainButton.onClick(event);
	};

	const offEventMainButtonClick = (event: () => void) => telegram.offEvent('mainButtonClicked', event);

	const openLink = (link: string) => telegram.openTelegramLink(link);

	const setBackButton = (path: string) => {
		telegram.BackButton.show();

		telegram.onEvent('backButtonClicked', () => {
			navigate(path);
		});
	};

	return {
		onReady,
		onClose,
		openLink,
		getUserData,
		setBackButton,
		setEventMainButtonClick,
		offEventMainButtonClick,
	};
};
