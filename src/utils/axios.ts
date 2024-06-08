import axios from 'axios';

const axiosConfig = axios.create({
	baseURL: `${process.env.PROTOCOL}://${process.env.HOST}:${process.env.SERVER_PORT}/api/`,
	responseType: 'json',
	headers: {
		'Access-Control-Allow-Origin': '*',
	},
});

export default axiosConfig;
