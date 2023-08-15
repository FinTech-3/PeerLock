import React, { useState, useEffect } from 'react';
import { getStorageList } from '../../api/getStorageList';
import StorageList from '../../components/storage/StorageList';
import {
	Grid,
	Typography,
	Box,
	Select,
	MenuItem,
	FormControl,
	InputLabel,
	TextField,
	InputAdornment,
	Divider,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FixedBottomNavigation from '../../components/FixBottomNavigation';
import SearchComponent from '../../components/common/SearchComponent';

const Storage = () => {
	const [storageList, setStorageList] = useState([]);
	const [filter, setFilter] = useState('가격순');

	const handleFilterChange = event => {
		setFilter(event.target.value);
		// You can implement further logic here, e.g., sort the storageList based on the selected filter.
	};

	useEffect(() => {
		const fetch = async () => {
			const data = await getStorageList();
			setStorageList(data);
			console.log(data);
		};
		fetch();
	}, []);

	return (
		<div style={{ maxHeight: '100vh', overflowY: 'auto' }}>
			<SearchComponent />
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				sx={{ paddingTop: '10px', paddingLeft: '20px', paddingRight: '20px' }}
			>
				<Typography variant="h6" gutterBottom sx={{ fontSize: '14px', marginBottom: '0' }}>
					<Box component="span" fontWeight="bold">
						{storageList?.length}
					</Box>
					개의 검색결과
				</Typography>

				<FormControl variant="outlined" size="small" sx={{ fontSize: '14px' }}>
					<InputLabel>필터</InputLabel>
					<Select
						value={filter}
						onChange={handleFilterChange}
						label="필터"
						sx={{ fontSize: 'inherit' }}
					>
						<MenuItem value="최신순">최신순</MenuItem>
						<MenuItem value="인기도순">인기도순</MenuItem>
						<MenuItem value="가격순">가격순</MenuItem>
					</Select>
				</FormControl>
			</Box>
			<Divider sx={{ margin: '10px 20px' }} />

			<Grid container spacing={3} sx={{ padding: '20px', paddingTop: '5px' }}>
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
