import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import AppHeader from '../../components/common/AppHeader';
import StorageDetail from '../../components/storage/StorageDetail';
import { getStorageDetail } from '../../api/getStorageDetail';
import FixedBottomNavigation from '../../components/FixBottomNavigation';

const StorageDetailPage = () => {
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
			<StorageDetail storage={storageDetail} />
			<FixedBottomNavigation />
		</div>
	);
};

export default StorageDetailPage;
