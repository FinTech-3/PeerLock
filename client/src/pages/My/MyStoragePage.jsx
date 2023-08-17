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
	Divider,
	Button,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FixedBottomNavigation from '../../components/FixBottomNavigation';
import AddStorageCard from '../../components/my/AddStorageCard';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

const MyStoragePage = ({}) => {
	const [filter, setFilter] = useState('가격순');
	const [loading, setLoading] = useState(true);
	const [storageList, setStorageList] = useState([]);
	const [randStorage, setRandStorage] = useState([]);

	const handleFilterChange = event => {
		setFilter(event.target.value);
	};

	// 나의 창고 목록을 가져오는 코드로 바꾸기
	useEffect(() => {
		const fetch = async () => {
			const data = await getStorageList();
			setStorageList(data);
			setLoading(false);
		};
		fetch();
	}, []);

	// randStorage 가져오는 코드 짜기

	return (
		<div style={{ maxHeight: '100vh', overflowY: 'auto' }}>
			<Box mt={3} mb={1}>
				<Typography variant="h5" margin={3} mb={1} mt={4}>
					내 공간
				</Typography>
			</Box>
			<div style={{ paddingBottom: '50px' }}>
				{loading ? (
					<Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
						<CircularProgress />
					</Box>
				) : (
					<>
						<div>
							<Grid container spacing={3} sx={{ padding: '20px', paddingTop: '5px' }}>
								{storageList.length === 0 ? (
									<Grid item xs={12}>
										<AddStorageCard />
									</Grid>
								) : (
									storageList.map(item => (
										<Grid item xs={12} key={item.storageId}>
											<StorageList storage={item} />
										</Grid>
									))
								)}
							</Grid>
						</div>
						<div>
							<Box>
								<Button>
									<AddCircleOutlinedIcon />
								</Button>
							</Box>
						</div>
					</>
				)}
			</div>
			<div>
				{/* 호스트용으로 바꿔주기 */}
				<FixedBottomNavigation />
			</div>
		</div>
	);
};

export default MyStoragePage;
