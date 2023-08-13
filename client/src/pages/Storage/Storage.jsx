import React, { useState, useEffect } from 'react';
import AppHeader from '../../components/common/AppHeader';
import StorageList from '../../components/storage/StorageList';
import { Grid } from '@mui/material';
import FixedBottomNavigation from '../../components/FixBottomNavigation';
import { getStorageList } from '../../api/getStorageList';

const Storage = () => {
	const [storageList, setStorageList] = useState([]);

	useEffect(() => {
		const fetch = async () => {
			const data = await getStorageList();
			setStorageList(data);
		};
		fetch();
	}, []);

	return (
		<div style={{ maxHeight: '100vh', overflowY: 'auto' }}>
			<AppHeader title={'Storage List'} />
			{/* Main Content */}
			<Grid container spacing={3} style={{ padding: '20px' }}>
				{storageList.map(item => (
					<Grid item xs={12} sm={6} md={3} key={item.storageId}>
						<StorageList storage={item} />
					</Grid>
				))}
			</Grid>
			<FixedBottomNavigation />
		</div>
	);
};

export default Storage;
