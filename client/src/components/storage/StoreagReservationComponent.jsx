import React, { useState } from 'react';
import {
	Typography,
	Button,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Box,
	Divider,
	TextField,
} from '@mui/material';
import {
	ArrowBack as ArrowBackIcon,
	CalendarMonthOutlined as CalendarMonthOutlinedIcon,
	AccessTimeOutlined as AccessTimeOutlinedIcon,
	Star as StarIcon,
} from '@mui/icons-material';
import FixedBottomNavigation from '../FixBottomNavigation';

const StorageReservationComponent = ({ storage }) => {
	const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10)); // 현재 날짜로 초기화

	return (
		<Box style={{ maxHeight: '100vh', overflowY: 'auto' }}>
			<Card sx={{ width: '100%' }}>
				<Box display="flex">
					<Box width="40%" display="flex" alignItems="center" paddingLeft="10px">
						{storage && storage.images && storage.images[0] && (
							<CardMedia
								component="img"
								height="auto"
								image={storage.images[0].imagePath || 'https://via.placeholder.com/150'}
								alt="Placeholder Image"
								sx={{ boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)', borderRadius: '10%' }}
							/>
						)}
					</Box>
					<Box width="60%">
						<CardContent>
							<Typography variant="h6" sx={{ fontSize: '18px', fontWeight: 'bold' }}>
								{storage.storageName || 'Item Title'}
							</Typography>
							<Typography variant="body2" sx={{ marginTop: '8px' }}>
								{storage.storageDescription || '설명 쏼랄쏼라라라'}
							</Typography>
							<Typography variant="body2" sx={{ marginTop: '8px' }}>
								{storage.storageLocation || '위치'}
							</Typography>
							<Box display="flex" alignItems="center" mt={0}>
								<StarIcon sx={{ color: '#FFDC3C' }} />
								<Typography variant="h6" sx={{ fontSize: '14px', marginTop: '8px' }}>
									{storage.star || '4.54(15)'}
								</Typography>
							</Box>
						</CardContent>
					</Box>
				</Box>

				<Divider sx={{ margin: '0px 0px' }} />

				<CardContent>
					{/* 예약 날짜 선택 */}
					<Box mt={2}>
						<Typography variant="body1" gutterBottom>
							예약 날짜 선택
						</Typography>
						<TextField
							variant="outlined"
							type="date"
							fullWidth
							value={selectedDate}
							onChange={e => setSelectedDate(e.target.value)}
						/>
					</Box>
					{/* 보관 물품 선택 */}
					<Box mt={2} mb={2}>
						<Typography variant="body1" gutterBottom>
							보관 물품 사진 업로드
						</Typography>
						<Button
							variant="outlined"
							fullWidth
							component="label" // 이를 통해 버튼이 파일 입력을 위한 레이블 역할을 하게 됩니다.
							sx={{
								marginTop: '8px',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								color: 'black',
								borderColor: 'gray',
								boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.15)',
								borderRadius: '10px',
							}}
						>
							사진 업로드
							<input
								type="file"
								hidden
								multiple // 여러 파일을 한번에 선택할 수 있게 합니다.
								onChange={e => {
									const files = e.target.files;
									// 이곳에서 선택한 파일들을 처리할 수 있습니다.
									console.log(files);
								}}
							/>
						</Button>
					</Box>
				</CardContent>

				<Divider sx={{ margin: '0px 0px' }} />

				<CardContent>
					{/* 접근 정보 */}
					<Box mt={0}>
						<Typography variant="h6" sx={{ paddingBottom: '10px' }}>
							{'접근'}
						</Typography>
						<Box display="flex" alignItems="center">
							<CalendarMonthOutlinedIcon />
							<Typography variant="h6" sx={{ fontSize: '16px', marginLeft: '0px' }}>
								&nbsp;{storage.star || '매주 | 5시 이후'}
							</Typography>
						</Box>
						<Box display="flex" alignItems="center">
							<AccessTimeOutlinedIcon />
							<Typography variant="h6" sx={{ fontSize: '16px', marginLeft: '0px' }}>
								&nbsp;{storage.star || '방문 전 약속 필수'}
							</Typography>
						</Box>
					</Box>
				</CardContent>

				<Divider sx={{ margin: '0px 0px' }} />

				<CardContent>
					{/* 가격 정보 */}
					<Box mt={0}>
						<Typography variant="h6" sx={{ paddingBottom: '10px' }}>
							{'가격'}
						</Typography>
						<Box display="flex" justifyContent="space-between" alignItems="center">
							<Typography variant="body1">{'단기 보관'}</Typography>
							<Typography variant="body1">{'₩10,000/월'}</Typography>
						</Box>
						<Box display="flex" justifyContent="space-between" alignItems="center">
							<Typography variant="body1">{'장기 보관'}</Typography>
							<Typography variant="body1">{'₩25,000/월'}</Typography>
						</Box>
					</Box>
				</CardContent>

				<Divider sx={{ margin: '0px 0px' }} />

				<CardActions
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						padding: '20px 12px',
					}}
				>
					<Typography variant="h6" sx={{ fontSize: '18px', marginBottom: '0' }}>
						<b style={{ textDecoration: 'line-through', color: 'gray' }}>₩15,000</b>&nbsp; ₩10,000
						<b style={{ color: 'gray' }}>&nbsp;/월(단기)</b>
					</Typography>
					<Button
						size="medium"
						variant="contained"
						sx={{
							backgroundColor: '#1976d2',
							color: 'white',
							fontSize: '18px',
							boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.15)',
							'&:hover': {
								backgroundColor: '#1565c0',
							},
						}}
					>
						예약하기
					</Button>
				</CardActions>
			</Card>
			<FixedBottomNavigation />
		</Box>
	);
};

export default StorageReservationComponent;
