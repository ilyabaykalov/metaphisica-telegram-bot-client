import axios from 'axios';

const axiosConfig = axios.create({
	baseURL: `${process.env.TELEGRAM_API_URL}/bot${process.env.API_KEY_BOT}/`,
	responseType: 'json',
	headers: {
		'Access-Control-Allow-Origin': '*',
	},
});

export default axiosConfig;
