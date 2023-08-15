import React, { useState, useEffect } from 'react';
import FixedBottomNavigation from '../FixBottomNavigation';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
	Typography,
	Button,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Box,
	Divider,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import StarIcon from '@mui/icons-material/Star';
import SmokeFreeOutlinedIcon from '@mui/icons-material/SmokeFreeOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import FireExtinguisherOutlinedIcon from '@mui/icons-material/FireExtinguisherOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

const StorageDetail = ({ storage }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	const [isFavorited, setIsFavorited] = useState(false);

	const favoriteClick = () => {
		setIsFavorited(prevState => !prevState);
	};

	// const dummyPrice = (storage.storagePrice * 1.5).toLocaleString();
	// const price = storage.storagePrice.toLocaleString();

	return (
		<div style={{ maxHeight: '100vh', overflowY: 'auto' }}>
			<Card sx={{ width: '100%' }}>
				<Slider {...settings}>
					{storage.images &&
						storage.images.map((img, idx) => (
							<Box position="relative" key={idx}>
								<CardMedia
									component="img"
									height="280"
									image={img.imagePath || 'https://via.placeholder.com/150'}
									alt={`Image ${idx}`}
									sx={{ objectFit: 'cover' }}
								/>
								{/* Icons */}
								<Box
									sx={{
										backgroundColor: 'white',
										borderRadius: '50%',
										display: 'inline-flex',
										alignItems: 'center',
										justifyContent: 'center',
										width: '40px',
										height: '40px',
										boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
									}}
									position="absolute"
									top={15}
									left={15}
								>
									<ArrowBackIcon color="Neutral" />
								</Box>
								<Box
									position="absolute"
									top={15}
									right={15}
									display="flex"
									alignItems="center"
									gap={1}
								>
									<Box
										sx={{
											backgroundColor: 'white',
											borderRadius: '50%',
											display: 'inline-flex',
											alignItems: 'center',
											justifyContent: 'center',
											width: '40px',
											height: '40px',
											boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
										}}
									>
										<ShareIcon color="Neutral" />
									</Box>
									<Box
										sx={{
											backgroundColor: 'white',
											borderRadius: '50%',
											display: 'inline-flex',
											alignItems: 'center',
											justifyContent: 'center',
											width: '40px',
											height: '40px',
											boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
										}}
										onClick={favoriteClick}
									>
										{isFavorited ? (
											<FavoriteIcon color="primary" />
										) : (
											<FavoriteBorderOutlinedIcon color="Neutral" />
										)}
									</Box>
								</Box>
							</Box>
						))}
				</Slider>

				<CardContent>
					<Box display="flex" justifyContent="space-between" alignItems="center">
						<Typography variant="h6" sx={{ fontSize: '18px', fontWeight: 'bold' }}>
							{storage.storageName || 'Item Title'}
						</Typography>

						<Box display="flex" alignItems="center" gap={2}>
							<Box
								sx={{
									backgroundColor: 'white',
									borderRadius: '50%',
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									width: '30px',
									height: '30px',
									boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
								}}
								onClick={favoriteClick}
							>
								{isFavorited ? (
									<FavoriteIcon color="primary" />
								) : (
									<FavoriteBorderOutlinedIcon color="Neutral" />
								)}
							</Box>

							<Box
								sx={{
									backgroundColor: 'white',
									borderRadius: '50%',
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									width: '30px',
									height: '30px',
									boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
								}}
							>
								<ShareIcon color="Neutral" />
							</Box>
						</Box>
					</Box>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<LocationOnIcon sx={{ color: 'blue' }} />
						<Typography
							variant="h6"
							sx={{ marginLeft: '0px', color: 'blue', fontSize: '14px' }} // 여기서 marginLeft 값을 조정하여 거리를 조절하세요.
						>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
								}}
							>
								<b>숙소 위치보기&nbsp;{storage.star || '1.2km'}</b>
								<ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
							</div>
						</Typography>
					</div>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<StarIcon sx={{ color: '#FFDC3C' }} />
						<Typography variant="h6" sx={{ fontSize: '14px', marginLeft: '0px' }}>
							{storage.star || '4.54 (후기 15개)'}
						</Typography>
					</div>
				</CardContent>

				<Divider sx={{ margin: '0px 15px' }} />

				<CardContent sx={{ paddingLeft: '15', paddingBottom: '0', paddingTop: '0' }}>
					<Typography
						variant="h6"
						sx={{ marginTop: '8px', paddingLeft: '10px', display: 'flex', gap: '1rem' }}
					>
						<Box display="flex" flexDirection="column" alignItems="center">
							<SmokeFreeOutlinedIcon />
							<Typography variant="caption">금연</Typography>
						</Box>
						<Box display="flex" flexDirection="column" alignItems="center">
							<FireExtinguisherOutlinedIcon />
							<Typography variant="caption">소화기</Typography>
						</Box>
						<Box display="flex" flexDirection="column" alignItems="center">
							<VideocamOutlinedIcon />
							<Typography variant="caption">카메라</Typography>
						</Box>
					</Typography>
				</CardContent>

				<Divider sx={{ margin: '0px 15px' }} />

				<CardContent>
					<Typography variant="h6">{storage.user?.username}</Typography>
					<Typography variant="body2" color="textSecondary">
						{storage.userDescription || '사용자 설명이 없습니다.'}
					</Typography>
					<Typography variant="body1" color="textSecondary" sx={{ marginTop: '8px' }}>
						{storage.storageDescription}
					</Typography>
					<Button
						variant="outlined"
						fullWidth
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
						<CommentOutlinedIcon sx={{ marginRight: '8px' }} />
						채팅 연결
					</Button>
				</CardContent>

				<Divider sx={{ margin: '0px 15px' }} />

				<CardContent>
					<Typography variant="h6" sx={{ paddingBottom: '10px' }}>
						{'접근'}
					</Typography>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<CalendarMonthOutlinedIcon />
						<Typography variant="h6" sx={{ fontSize: '16px', marginLeft: '0px' }}>
							&nbsp;{storage.star || '매주 | 5시 이후'}
						</Typography>
					</div>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<AccessTimeOutlinedIcon />
						<Typography variant="h6" sx={{ fontSize: '16px', marginLeft: '0px' }}>
							&nbsp;{storage.star || '방문 전 약속 필수'}
						</Typography>
					</div>
				</CardContent>

				<Divider sx={{ margin: '0px 15px' }} />

				<CardContent>
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
								backgroundColor: '#1565c0', // 이것은 버튼에 마우스를 올렸을 때의 배경색 변경을 위한 것입니다.
							},
						}}
					>
						신청하기
					</Button>
				</CardActions>
			</Card>
			<FixedBottomNavigation />
		</div>
	);
};

export default StorageDetail;
