import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import AppHeader from '../../components/common/AppHeader';
import StorageReservationComponent from '../../components/storage/StoreagReservationComponent';
import { getStorageDetail } from '../../api/getStorageDetail';

const StoreagReservationPage = () => {
	const [storageDetail, setStorageDetail] = useState([]);
	const { storageId } = useParams();

	useEffect(() => {
		const fetch = async () => {
			const data = await getStorageDetail(storageId);
			setStorageDetail(data);
		};
		fetch();
	}, []);

	return (
		<div>
			<StorageReservationComponent storage={storageDetail} />
		</div>
	);
};

export default StoreagReservationPage;
