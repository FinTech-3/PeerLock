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
	IconButton,
} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FixedBottomNavigation from '../../components/FixBottomNavigation';
import AddStorageCard from '../../components/my/AddStorageCard';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import AppHeader from '../../components/common/AppHeader';

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
			// setStorageList(data);
			setLoading(false);
		};
		fetch();
	}, []);

	// randStorage 가져오는 코드 짜기

	return (
		<div style={{ maxHeight: '100vh', overflowY: 'auto' }}>
			<AppHeader title={'내 공간'}>
				<Box mt={3} mb={1}>
					<Typography variant="h5" margin={3} mb={1} mt={4}>
						내 공간
					</Typography>
				</Box>
			</AppHeader>
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
						{/* 여기는 addStorage라면 출력안해야함 */}
						{storageList.length === 0 ? (
							<></>
						) : (
							<div>
								<Box margin={2} mb={3} mt={0} display="flex" justifyContent="flex-end">
									<IconButton
										sx={{
											backgroundColor: 'primary.light',
											boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)', // 여기에서 그림자의 크기, 방향, 색상 등을 조정하여 원하는 효과를 얻을 수 있습니다.
										}}
									>
										<AddCircleOutlineOutlinedIcon color="white" fontSize="large" />
									</IconButton>
								</Box>
							</div>
						)}
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
