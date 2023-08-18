import React, { useState } from 'react';
import {
	Typography,
	Button,
	Card,
	CardMedia,
	CardContent,
	Box,
	Divider,
	TextField,
} from '@mui/material';
import {
	ArrowBack as ArrowBackIcon,
	Star as StarIcon,
	SmokeFree as SmokeFreeIcon,
	CameraIndoor as CameraIndoorIcon,
	FireExtinguisher as FireExtinguisherIcon,
} from '@mui/icons-material';
import SelectComponent from '../../components/common/SelectComponent';

const StorageRegist = ({ storage }) => {
	const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10)); // 현재 날짜로 초기화

	const names = ['방', '창고', '상권', '기타'];

	return (
		<Box style={{ maxHeight: '100vh', overflowY: 'auto', paddingBottom: '60px' }}>
			<Box display="flex" alignItems="center" p={1}>
				<Button
					startIcon={<ArrowBackIcon />}
					onClick={() => {
						window.history.back();
					}}
				/>
				<Typography>내 공간 등록</Typography>
			</Box>
			<Box
				display="flex"
				justifyContent="center"
				flexDirection="column"
				alignItems="center"
				minWidth="120"
			>
				<Typography
					variant="h5"
					sx={{ marginLeft: 6, fontWeight: 'bold', alignSelf: 'flex-start' }}
				>
					공간 타입
				</Typography>
				<SelectComponent names={names} />
			</Box>
			<Box
				display="flex"
				justifyContent="center"
				flexDirection="column"
				alignItems="center"
				minWidth="120"
			>
				<Typography
					variant="h5"
					sx={{ marginLeft: 6, fontWeight: 'bold', alignSelf: 'flex-start' }}
				>
					공간 특징
				</Typography>
				<div style={{ display: 'flex', flexDirection: 'row' }}>
					<Box
						display="flex"
						justifyContent="center"
						alignItems="center"
						border="2px solid"
						borderColor="lightgray"
						borderRadius="5px"
						width="80px"
						height="80px"
					>
						<SmokeFreeIcon sx={{ fontSize: 70 }} />
					</Box>
					<Box
						display="flex"
						justifyContent="center"
						alignItems="center"
						border="2px solid"
						borderColor="lightgray"
						borderRadius="5px"
						width="80px"
						height="80px"
					>
						<CameraIndoorIcon sx={{ fontSize: 70 }} />
					</Box>
					<Box
						display="flex"
						justifyContent="center"
						alignItems="center"
						border="2px solid"
						borderColor="lightgray"
						borderRadius="5px"
						width="80px"
						height="80px"
					>
						<FireExtinguisherIcon sx={{ fontSize: 70 }} />
					</Box>
				</div>
			</Box>
		</Box>
	);
};

export default StorageRegist;
