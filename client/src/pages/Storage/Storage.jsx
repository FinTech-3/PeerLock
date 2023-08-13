import React, { useState, useEffect } from 'react';
import AppHeader from '../../components/common/AppHeader';
import StorageList from '../../components/storage/StorageList';
import { Grid } from '@mui/material';
import axios from 'axios';
import FixedBottomNavigation from '../../components/FixBottomNavigation';

const Storage = () => {
	const [storageList, setStorageList] = useState([]);

	useEffect(() => {
		getStorageList();
	}, []);

	const getStorageList = async () => {
		const option = {
			method: 'GET',
			url: `/api/storage`,
		};

		try {
			const { data } = await axios(option);
			console.log(data);
			console.log(data[0].storageDescription);
			console.log(data[0].storageId);
			setStorageList(data);
		} catch (error) {
			console.error('Failed to fetch storage list:', error);
		}
	};

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
