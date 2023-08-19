import API from './index';

export const registStorage = async body => {
	const res = await API.post('/api/storage', body);
	console.log(res);
	return res;
};
