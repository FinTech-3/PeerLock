import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import AppHeader from '../../components/common/AppHeader';
import StorageDetail from '../../components/storage/StorageDetail';
import axios from 'axios';

const StorageDetailPage = () => {
	const [storageDetail, setStorageDetail] = useState([]);

	const { storageId } = useParams();
	console.log('id : ', storageId);

	useEffect(() => {
		getStorageDetail();
	}, []);

	const getStorageDetail = () => {
		const option = {
			method: 'GET',
			url: `/api/storage/${storageId}`,
		};

		axios(option).then(({ data }) => {
			console.log(data);
			setStorageDetail(data);
		});
	};

	return (
		<div>
			<AppHeader title={'Storage Detail'} />
			<StorageDetail storage={storageDetail} />
		</div>
	);
};

export default StorageDetailPage;
