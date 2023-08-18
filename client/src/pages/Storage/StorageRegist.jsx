import React, { useState } from 'react';
import {
	Typography,
	Button,
	Box,
	TextField,
	FormControlLabel,
	FormGroup,
	Checkbox,
	Input,
	InputAdornment,
	RadioGroup,
	Radio,
	Divider,
	Grid,
	Paper,
} from '@mui/material';
import {
	ArrowBack as ArrowBackIcon,
	SmokeFree as SmokeFreeIcon,
	CameraIndoor as CameraIndoorIcon,
	FireExtinguisher as FireExtinguisherIcon,
	Search as SearchIcon,
	GpsFixed as GpsFixedIcon,
	LocalAtm as LocalAtmIcon,
} from '@mui/icons-material';
import SelectComponent from '../../components/common/SelectComponent';

const StorageRegist = ({}) => {
	const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10)); // 현재 날짜로 초기화

	const storageType = ['방', '창고', '상권', '기타'];
	const storageSize = ['소형', '중형', '대형'];

	const [value, setValue] = React.useState('option1');

	const handleChange = event => {
		setValue(event.target.value);
	};

	return (
		<Box style={{ maxHeight: '100vh', overflowY: 'auto', paddingBottom: '60px' }}>
			<Paper
				sx={{
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					backgroundColor: 'white',
					zIndex: 1000,
				}}
			>
				<Box display="flex" alignItems="center" p={1}>
					<Button
						startIcon={<ArrowBackIcon />}
						onClick={() => {
							window.history.back();
						}}
					/>
					<Typography>내 공간 등록</Typography>
				</Box>
			</Paper>
			<Box
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					minWidth: '120',
					paddingTop: '60px',
				}}
			>
				<Box style={{ width: 300, marginBottom: 10 }}>
					<Typography
						variant="h5"
						sx={{ paddingLeft: 1, fontWeight: 'bold', alignSelf: 'flex-start' }}
					>
						공간 타입
					</Typography>
					<SelectComponent names={storageType} />
				</Box>
				<Box style={{ width: 300, marginBottom: 25 }}>
					<Typography
						variant="h5"
						sx={{ paddingLeft: 1, fontWeight: 'bold', alignSelf: 'flex-start' }}
					>
						공간 특징
					</Typography>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-around',
							alignItems: 'center',
							width: '100%',
							marginTop: '10px',
						}}
					>
						<Box
							display="flex"
							justifyContent="center"
							alignItems="center"
							border="2px solid"
							borderColor="#1976d2"
							borderRadius="5px"
							width="80px"
							height="80px"
							margin="0 10px"
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
							margin="0 10px"
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
							margin="0 10px"
						>
							<FireExtinguisherIcon sx={{ fontSize: 70 }} />
						</Box>
					</div>
				</Box>
				<Box style={{ width: 300, marginBottom: 25 }}>
					<Typography
						variant="h5"
						sx={{ paddingLeft: 1, fontWeight: 'bold', alignSelf: 'flex-start' }}
					>
						공간 위치
					</Typography>
					<Button
						sx={{
							width: '100%',
							height: '50px',
							marginTop: '10px',
							borderColor: 'lightgray',
							color: 'gray',
						}}
						variant="outlined"
						startIcon={<SearchIcon />}
					>
						공간 위치를 검색하세요
					</Button>
					<Button
						sx={{ width: '100%', height: '50px', marginTop: '10px', backgroundColor: '#8DB4FF' }}
						variant="contained"
						startIcon={<GpsFixedIcon />}
					>
						현재 위치 사용
					</Button>
					{/* <TextField
						style={{ width: '100%', marginTop: '10px' }}
						placeholder="상세 주소를 입력하세요"
					/> */}
				</Box>
				<Box style={{ width: 300, marginBottom: 25 }}>
					<Typography
						variant="h5"
						sx={{ paddingLeft: 1, fontWeight: 'bold', alignSelf: 'flex-start' }}
					>
						공간 크기
					</Typography>
					<SelectComponent names={storageSize} />
				</Box>
				<Box style={{ width: 300, marginBottom: 25 }}>
					<Typography
						variant="h5"
						sx={{ paddingLeft: 1, fontWeight: 'bold', alignSelf: 'flex-start' }}
					>
						가격 설정
					</Typography>
					<Box>
						<RadioGroup
							aria-label="options"
							name="controlled-radio-buttons-group"
							value={value}
							onChange={handleChange}
						>
							<Box
								sx={{
									width: '100%',
									border: '1px solid',
									borderColor: '#8DB4FF',
									borderRadius: 2,
									padding: 1,
									marginBottom: 1,
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
								}}
							>
								<Box
									sx={{
										width: '100%',
										display: 'flex',
										justifyContent: 'flex-start',
										marginLeft: 3,
									}}
								>
									<FormControlLabel value="option1" control={<Radio />} label="고정 가격 설정" />
								</Box>
								<Input
									id="standard-adornment-amount"
									endAdornment={<InputAdornment position="end">₩</InputAdornment>}
									sx={{
										width: '90%',
										marginTop: 1,
										marginBottom: 1,
									}}
								/>
							</Box>
							<Box
								sx={{
									width: '100%',
									border: '1px solid',
									// borderColor: '#8DB4FF',
									borderColor: 'lightgray',
									borderRadius: 2,
									padding: 1,
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
								}}
							>
								<Box
									sx={{
										width: '100%',
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'flex-start',
										marginLeft: 3,
									}}
								>
									<FormControlLabel value="option2" control={<Radio />} label="스마트 가격 추천" />

									<Box sx={{ width: '100%', paddingRight: '20px' }}>
										<Box sx={{ my: 1 }}>
											<Grid container alignItems="center">
												<Grid item xs>
													<Typography gutterBottom variant="h6" component="div">
														단기 보관
													</Typography>
												</Grid>
												<Grid item>
													<Typography gutterBottom variant="subtitle1" component="div">
														1,000원/일
													</Typography>
												</Grid>
											</Grid>
											<Divider />
											<Grid sx={{ mt: 1 }} container alignItems="center">
												<Grid item xs>
													<Typography gutterBottom variant="h6" component="div">
														장기 보관
													</Typography>
												</Grid>
												<Grid item>
													<Typography gutterBottom variant="subtitle1" component="div">
														20,000원/월
													</Typography>
												</Grid>
											</Grid>
										</Box>
									</Box>
								</Box>
							</Box>
						</RadioGroup>
					</Box>
				</Box>
				<Box style={{ width: 300, marginBottom: 25 }}>
					<Typography
						variant="h5"
						sx={{ paddingLeft: 1, fontWeight: 'bold', alignSelf: 'flex-start' }}
					>
						공간 설명
					</Typography>
					<Typography
						variant="body2"
						sx={{ paddingLeft: 1, fontWeight: 'light', alignSelf: 'flex-start' }}
					>
						대여자들이 공간에 대해 알기 쉽게 설명해주세요
					</Typography>
					<TextField
						multiline
						rows={5}
						variant="outlined"
						fullWidth
						sx={{ width: '100%', marginTop: '10px' }}
					/>
				</Box>
				<Box style={{ width: 300, marginBottom: 25 }}>
					<Typography
						variant="h5"
						sx={{ paddingLeft: 1, fontWeight: 'bold', alignSelf: 'flex-start' }}
					>
						공간 사진 등록
					</Typography>
					<Typography
						variant="body2"
						sx={{ paddingLeft: 1, fontWeight: 'light', alignSelf: 'flex-start' }}
					>
						최대 4개의 사진을 등록할 수 있어요.
					</Typography>
					<Button
						sx={{ width: '100%', height: '50px', marginTop: '10px', backgroundColor: '#8DB4FF' }}
						variant="contained"
					>
						사진 등록하기
					</Button>
				</Box>
			</Box>
			<Paper
				sx={{
					display: 'flex',
					justifyContent: 'center',
					position: 'fixed',
					bottom: 0,
					left: 0,
					right: 0,
				}}
				elevation={3}
			>
				<Button
					sx={{ width: '90%', height: '50px', margin: '10px', backgroundColor: '#8DB4FF' }}
					variant="contained"
				>
					완료
				</Button>
			</Paper>
		</Box>
	);
};

export default StorageRegist;
