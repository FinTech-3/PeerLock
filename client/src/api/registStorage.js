import API from './index';

export const registStorage = async body => {
	const res = await API.post('/storage/regist', body);
	return res.data;
};
