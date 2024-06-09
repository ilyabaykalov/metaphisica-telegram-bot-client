import { useNavigate } from 'react-router-dom';

const telegram = window.Telegram.WebApp;

export const useTelegram = () => {
	const navigate = useNavigate();

	const onReady = () => {
		telegram.ready();

		telegram.BackButton.hide();
	};

	const onClose = () => {
		telegram.close();
	};

	const onToggleButton = () => {
		if (telegram.MainButton.isVisible) {
			telegram.MainButton.hide();
		} else {
			telegram.MainButton.show();
		}
	};

	const setBackButton = (path: string) => {
		telegram.BackButton.show();

		telegram.onEvent('backButtonClicked', () => {
			navigate(path);
		});
	};

	return {
		telegram,
		onReady,
		onClose,
		setBackButton,
		onToggleButton,
		user: telegram.initDataUnsafe?.user,
	};
};
