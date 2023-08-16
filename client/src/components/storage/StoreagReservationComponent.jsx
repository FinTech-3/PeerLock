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
	Grid,
} from '@mui/material';
import {
	ArrowBack as ArrowBackIcon,
	CalendarMonthOutlined as CalendarMonthOutlinedIcon,
	AccessTimeOutlined as AccessTimeOutlinedIcon,
	Star as StarIcon,
} from '@mui/icons-material';

const StorageReservationComponent = ({ storage }) => {
	const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10)); // 현재 날짜로 초기화
	const [selectedPayment, setSelectedPayment] = useState(null);

	return (
		<Box style={{ maxHeight: '100vh', overflowY: 'auto' }}>
			<Box display="flex" alignItems="center" p={1}>
				<Button
					startIcon={<ArrowBackIcon />}
					onClick={() => {
						// 뒤로 가기 로직을 추가합니다. 예를 들면, 브라우저의 뒤로가기 기능을 호출할 수 있습니다.
						window.history.back();
					}}
				>
					뒤로가기
				</Button>
			</Box>
			<Divider sx={{ margin: '0px 0px' }} />
			<Card sx={{ width: '100%' }}>
				<Box display="flex">
					<Box width="40%" display="flex" alignItems="stretch" padding="15px" paddingRight="0px">
						{storage && storage.images && storage.images[0] && (
							<CardMedia
								component="img"
								height="100%"
								image={storage.images[0].imagePath || 'https://via.placeholder.com/150'}
								alt="Placeholder Image"
								sx={{
									boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
									borderRadius: '10%',
									objectFit: 'cover',
								}}
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
						<Typography variant="h5" sx={{ paddingBottom: '10px', fontWeight: 'bold' }}>
							{'예약 정보 입력'}
						</Typography>
						<Typography variant="h6" gutterBottom>
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
						<Typography variant="h6" gutterBottom>
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
								'&:hover': {
									backgroundColor: '#1565c0',
								},
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
					<Typography variant="h5" sx={{ paddingBottom: '10px', fontWeight: 'bold' }}>
						{'요금 세부정보'}
					</Typography>
					<Box display="flex" justifyContent="space-between" alignItems="center">
						<Typography variant="body1" style={{ color: 'gray' }}>
							{'₩10,000 X 2달'}
						</Typography>
						<Typography variant="body1" style={{ color: 'gray' }}>
							{'₩20,000'}
						</Typography>
					</Box>
					<Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
						<Typography variant="body1" style={{ color: 'gray' }}>
							{'보험 플랜'}
							<br />
							{'최대 20만원 보장'}
						</Typography>
						<Typography variant="body1" style={{ color: 'gray' }}>
							{'₩5,000'}
						</Typography>
					</Box>
					<Divider sx={{ margin: '15px 0px' }} />
					<Box display="flex" justifyContent="space-between" alignItems="center">
						<Typography variant="h6">{'총 합계(KRW)'}</Typography>
						<Typography variant="h6" color={'primary'}>
							{'₩25,000/월'}
						</Typography>
					</Box>
				</CardContent>

				<Divider sx={{ margin: '0px 0px' }} />

				<CardContent>
					{/* 결제 수단 선택 */}
					<Box mt={0}>
						<Typography variant="h5" sx={{ paddingBottom: '10px', fontWeight: 'bold' }}>
							{'결제 수단 선택'}
						</Typography>
						<Grid container spacing={2}>
							{['카카오페이', '네이버페이', '삼성페이', '신용카드', '계좌이체', '기타 결제'].map(
								(paymentMethod, index) => (
									<Grid item xs={4} key={index}>
										<Button
											fullWidth
											variant="outlined"
											sx={{
												flexBasis: '33.33%',
												textAlign: 'center',
												borderColor:
													paymentMethod === selectedPayment ? 'primary.main' : 'grey.500',
												color: paymentMethod === selectedPayment ? 'primary.main' : 'black',
												backgroundColor:
													paymentMethod === selectedPayment ? '#E0F2F1' : 'transparent',
											}}
											onClick={() => setSelectedPayment(paymentMethod)}
										>
											{paymentMethod}
										</Button>
									</Grid>
								),
							)}
						</Grid>
					</Box>
				</CardContent>

				<Divider sx={{ margin: '0px 0px' }} />

				<CardActions
					style={{
						display: 'flex',
						flexDirection: 'column', // 버튼과 텍스트를 수직으로 배치하기 위해 추가
						justifyContent: 'center',
						alignItems: 'center',
						padding: '20px 12px',
					}}
				>
					<Box display="flex" justifyContent="center" alignItems="center" mb={2}>
						{' '}
						{/* marginBottom 추가 */}
						<Typography variant="body2">
							{
								'아래 버튼을 선택하면 호스트가 설정한 공간 이용규칙, 사용자에게 적용되는 기본 규칙, 환불 정책에 동의하며, 피해에 대한 책임이 본인에게 있을 경우 피어락이 결제수단으로 청구의 조치를 취할 수 있다는 사실에 동의하는 것입니다'
							}
						</Typography>
					</Box>
					<Button
						variant="outlined"
						fullWidth
						component="label"
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							color: 'black',
							borderColor: 'gray',
							boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.15)',
							borderRadius: '10px',
							'&:hover': {
								backgroundColor: '#1565c0',
							},
						}}
					>
						확인 및 결제
					</Button>
				</CardActions>
			</Card>
		</Box>
	);
};

export default StorageReservationComponent;
