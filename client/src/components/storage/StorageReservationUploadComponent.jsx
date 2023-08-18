import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
	Select,
	FormControl,
	InputLabel,
	MenuItem,
	Radio,
	FormControlLabel,
	RadioGroup,
	FormLabel,
	FormHelperText,
} from '@mui/material';
import {
	ArrowBack as ArrowBackIcon,
	Share as ShareIcon,
	Favorite as FavoriteIcon,
	FavoriteBorderOutlined as FavoriteBorderOutlinedIcon,
	LocationOn as LocationOnIcon,
	ArrowForwardIos as ArrowForwardIosIcon,
	Star as StarIcon,
	SmokeFreeOutlined as SmokeFreeOutlinedIcon,
	VideocamOutlined as VideocamOutlinedIcon,
	FireExtinguisherOutlined as FireExtinguisherOutlinedIcon,
	CommentOutlined as CommentOutlinedIcon,
	CalendarMonthOutlined as CalendarMonthOutlinedIcon,
	AccessTimeOutlined as AccessTimeOutlinedIcon,
} from '@mui/icons-material';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';

const StorageReservationUploadComponent = ({ storageId }) => {
	const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
	const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);
	const [selectedPayment, setSelectedPayment] = useState(null);
	const [uploadedImages, setUploadedImages] = useState([]);
	const [size, setSize] = useState(''); // 선택된 값의 상태

	const navigate = useNavigate(); // React Router v6의 useNavigate 훅을 사용

	const handleChange = event => {
		setSize(event.target.value);
	};

	const handleButtonClick = () => {
		const reservationData = generateReservationJSON();
		// console.log(reservationData);
		navigate(`/storage/reservation/confirm/${storageId}`, { state: { reservationData } });
	};

	const handleImageChange = e => {
		const files = Array.from(e.target.files);
		const fileURLs = files.map(file => URL.createObjectURL(file));
		setUploadedImages(prevState => [...prevState, ...fileURLs]);
	};

	const generateReservationJSON = () => {
		const jsonData = {
			startDate: startDate,
			endDate: endDate,
			itemSize: size,
			uploadedImages: uploadedImages,
			insurancePlan: selectedPayment,
			paymentDetails: {
				monthlyPayment: '₩10,000', // 이 부분은 예시로 넣었습니다.
				totalPayment: '₩25,000/월', // 이 부분도 예시입니다. 실제 값을 가져오려면 해당 값을 상태로 관리하거나 계산해야 합니다.
			},
		};

		return jsonData; // JSON 데이터 반환
	};

	return (
		<div>
			<div>
				<Box style={{ maxHeight: '100vh', overflowY: 'auto', paddingBottom: '70px' }}>
					<Box display="flex" alignItems="center" p={1}>
						<Button
							startIcon={<ArrowBackIcon />}
							onClick={() => {
								window.history.back();
							}}
						>
							뒤로가기
						</Button>
					</Box>
					<Divider sx={{ margin: '0px 0px', borderTop: '1px solid lightgray' }} />
					<Card elevation={0} sx={{ width: '100%' }}>
						{/* 기간 설정 -> 날짜 */}
						<CardContent>
							{/* 예약 날짜 선택 */}
							<Box mt={2}>
								<Typography variant="h5" sx={{ paddingBottom: '10px', fontWeight: 'bold' }}>
									{'예약 정보 입력'}
								</Typography>
								<Typography variant="h6" gutterBottom mb={2}>
									예약 기간 설정
								</Typography>
								<Grid container spacing={2}>
									{/* 시작일 */}
									<Grid item xs={6}>
										<TextField
											label="시작일"
											variant="outlined"
											type="date"
											fullWidth
											value={startDate}
											onChange={e => setStartDate(e.target.value)}
											InputLabelProps={{
												shrink: true,
											}}
										/>
									</Grid>

									{/* 종료일 */}
									<Grid item xs={6}>
										<TextField
											label="종료일"
											variant="outlined"
											type="date"
											fullWidth
											value={endDate}
											onChange={e => setEndDate(e.target.value)}
											InputLabelProps={{
												shrink: true,
											}}
										/>
									</Grid>
								</Grid>
							</Box>
						</CardContent>
						<Divider sx={{ margin: '0px 15px' }} />
						{/* 보관 물품 정보 -> select Box 소형/중형/대형 */}
						<CardContent>
							<Typography variant="h6" gutterBottom mb={1}>
								보관 물품 정보
							</Typography>
							<FormControl fullWidth variant="outlined">
								<Select
									value={size}
									onChange={handleChange}
									displayEmpty
									placeholder="크기 선택"
									sx={{
										borderRadius: '10px',
										'& fieldset': {
											borderRadius: '10px',
										},
									}}
								>
									<MenuItem value="small">소형</MenuItem>
									<MenuItem value="medium">중형</MenuItem>
									<MenuItem value="large">대형</MenuItem>
								</Select>
							</FormControl>
						</CardContent>

						{/* <Divider sx={{ margin: '0px 15px' }} /> */}
						{/* 물품 설명 -> 이거 왜 필요한거임?*/}
						{/* <CardContent>
							<Typography variant="h6" gutterBottom mb={1}>
								보관 물품 설명
							</Typography>
						</CardContent> */}

						<Divider sx={{ margin: '0px 15px' }} />
						{/* 물품 사진 등록 -> 최대 4개의 사진 등록할 수 있게 */}
						<CardContent>
							<Box mt={2} mb={2}>
								<Box>
									<Typography variant="h6" gutterBottom>
										물품 사진 등록
									</Typography>
									<Typography variant="body1" gutterBottom mt={0} sx={{ color: '#5a5a5a' }}>
										최대 4개의 사진을 등록해주세요.
									</Typography>
									<Box mt={2} mb={2} pl={1}>
										<Box display="flex" alignItems="center" gap={1}>
											<Typography variant="body1" gutterBottom mt={0} sx={{ color: '#5a5a5a' }}>
												<WbSunnyOutlinedIcon
													color="primary"
													sx={{ verticalAlign: 'middle', marginRight: '8px' }}
												/>
												충분한 밝기를 유지해주세요.
											</Typography>
										</Box>
										<Box display="flex" alignItems="center" gap={1}>
											<Typography variant="body1" gutterBottom mt={0} sx={{ color: '#5a5a5a' }}>
												<CleaningServicesOutlinedIcon
													color="primary"
													sx={{ verticalAlign: 'middle', marginRight: '8px' }}
												/>
												주변 물건들을 정리해주세요.
											</Typography>
										</Box>
										<Box display="flex" alignItems="center" gap={1}>
											<Typography variant="body1" gutterBottom mt={0} sx={{ color: '#5a5a5a' }}>
												<Inventory2OutlinedIcon
													color="primary"
													sx={{ verticalAlign: 'middle', marginRight: '8px' }}
												/>
												실제로 물건을 보관할 장소를 찍으면 좋아요!
											</Typography>
										</Box>
									</Box>
									<Button
										variant="contained"
										fullWidth
										component="label"
										sx={{
											marginTop: '8px',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											fontSize: '18px',
											color: 'white',
											backgroundColor: 'primary.light', // 배경색을 primary로 설정
											borderColor: 'gray',
											boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.15)',
											borderRadius: '10px',
											'&:hover': {
												backgroundColor: '#1565c0',
											},
										}}
									>
										사진 등록하기
										<input type="file" hidden multiple onChange={handleImageChange} />
									</Button>
									{/* Uploaded images preview */}
									<Box
										mt={2}
										display="flex"
										flexDirection="row"
										gap={2}
										overflowx="auto" // 슬라이드를 위한 속성
										whiteSpace="nowrap" // 슬라이드를 위한 속성
									>
										{uploadedImages.map((image, index) => (
											<img
												key={index}
												src={image}
												alt={`uploaded-img-${index}`}
												style={{
													width: '100px',
													height: '100px',
													objectFit: 'cover',
													boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.15)',
												}}
											/>
										))}
									</Box>
								</Box>
							</Box>
						</CardContent>
						<Divider sx={{ margin: '0px 15px' }} />
						{/* 보험 플랜 선택 -> 두개의 박스 */}
						<CardContent>
							<Typography variant="h6" gutterBottom mb={1}>
								보험 플랜 선택
							</Typography>
							<Box>
								<RadioGroup defaultValue="standard">
									<FormControl
										sx={{
											p: 2,
											flexDirection: 'row',
											gap: 2,
											border: '1px solid gray',
											borderRadius: '10px',
											marginBottom: '10px',
										}}
									>
										<Radio value="standard" />
										<div>
											<FormLabel>스탠다드</FormLabel>
											<Divider sx={{ margin: '0px 0px' }} />
											<FormHelperText>보험료 최대 5,000원/월</FormHelperText>
										</div>
									</FormControl>
									<FormControl
										sx={{
											p: 2,
											flexDirection: 'row',
											gap: 2,
											border: '1px solid gray',
											borderRadius: '10px',
											marginBottom: '10px',
										}}
									>
										<Radio value="premium" />
										<div>
											<FormLabel>프리미엄</FormLabel>
											<Divider sx={{ margin: '0px 0px' }} />
											<FormHelperText>보험료 최대 50,000원/월</FormHelperText>
										</div>
									</FormControl>
									<FormControl
										sx={{
											p: 2,
											flexDirection: 'row',
											gap: 2,
											border: '1px solid gray',
											borderRadius: '15px',
											marginBottom: '10px',
										}}
									>
										<Radio value="none" />
										<div>
											<FormLabel>미선택</FormLabel>
										</div>
									</FormControl>
								</RadioGroup>
							</Box>
						</CardContent>
						<Divider sx={{ margin: '0px 15px' }} />
						{/* 요금 세부정보 */}
						<CardContent>
							<Typography variant="h6" gutterBottom mb={1}>
								요금 세부정보
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

						<Box display="flex" justifyContent="flex-end" m={2}>
							{/* 다음 버튼 -> StorageResrvationPage.jsx로  */}
							<Button
								size="medium"
								variant="contained"
								onClick={handleButtonClick} // 버튼 클릭 시 handleButtonClick 함수 호출
								sx={{
									alignItems: 'center',
									justifyContent: 'center',
									color: 'white', // 텍스트 색상을 하얀색으로 설정
									fontSize: '20px',
									boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.15)',
									borderRadius: '10px',
									paddingLeft: '25px',
									paddingRight: '25px',
									backgroundColor: 'primary.light', // 배경색을 primary로 설정
									'&:hover': {
										backgroundColor: 'primary.dark', // hover 시에는 어두운 primary 색상으로 변경
									},
								}}
							>
								다음
							</Button>
						</Box>
					</Card>
				</Box>
			</div>
		</div>
	);
};

export default StorageReservationUploadComponent;
