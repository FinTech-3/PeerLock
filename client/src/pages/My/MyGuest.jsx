import React, { useEffect, useState } from 'react';
import { Typography, IconButton, Button, Avatar, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import FixedBottomNavigation from '../../components/FixBottomNavigation';
import { changeView } from '../../api/changeView';

function MyGuest() {
	const navigate = useNavigate();
	// get user_id from api
	const user_id = localStorage.getItem('userId');
	let user_status = localStorage.getItem('userStatus');
	user_status = user_status === 'USER' ? 'guest' : user_status;
	console.log(user_status);
	const user_name = localStorage.getItem('userName');

	const HandleButtonClick = async () => {
		try {
			// const view = await SwitchView(user_id, user_status); // Replace with the actual user ID
			const fetch = async () => {
				const data = await changeView(user_id, user_status);
				console.log(data);
				// Check if the user is a host or a guest
				if (data && data.status === 'HOST') {
					navigate('/MyHost');
					localStorage.setItem('userStatus', 'HOST');
				} else {
					navigate('/MyGuest');
					localStorage.setItem('userStatus', 'USER');
				}
			};
			fetch();
		} catch (error) {
			alert('Error:', error);
		}
	};

	return (
		<div style={{ maxHeight: '100vh', overflowX: 'hidden', overflowY: 'auto', marginLeft: '12px' }}>
			<div>
				{/* Settings Icon */}
				<IconButton
					aria-label="settings"
					sx={{
						marginTop: 2,
						marginLeft: 42,
						marginBottom: -5,
					}}
				>
					<SettingsIcon sx={{ fontSize: 32 }} />
				</IconButton>
			</div>
			{/* User Information */}
			<div
				sx={{
					display: 'flex',
					alignItems: 'center',
				}}
			>
				{/* User Avatar */}
				<Avatar
					alt="User PFP"
					src="https://kr.object.ncloudstorage.com/peerlock-image-storage/storage/profile3.png" // Replace with real image path
					sx={{
						marginTop: 5,
						width: 75,
						marginLeft: 1.5,
						height: 75,
					}}
				/>
				<Paper
					sx={{
						padding: 1.5,
						marginTop: -10,
						marginLeft: 11.5,
						width: '98%',
						display: 'flex',
						alignItems: 'flex-start',
						flexDirection: 'column',
						position: 'left',
						boxShadow: 0,
					}}
				>
					{/* Text content */}
					<Typography
						variant="h4"
						style={{
							fontFamily: 'SpoqaHanSansNeo-Bold',
						}}
					>
						{user_name}
					</Typography>
					<Typography
						variant="body1"
						color="grey"
						style={{
							fontFamily: 'SpoqaHanSansNeo-Bold',
						}}
					>
						Level 2
					</Typography>
					{/* Replace with real name and level */}
				</Paper>

				<Button
					variant="outlined"
					size="small"
					sx={{ marginTop: -12, marginLeft: 33 }}
					style={{
						fontFamily: 'SpoqaHanSansNeo-Medium',
					}}
					onClick={HandleButtonClick} // replace with real user id (TODO)
				>
					호스트로 전환
					{/* this is seriously messed up, fix only if needed. formatting is very broken, should work fine for iphone 12 pro */}
				</Button>
			</div>
			<Paper
				sx={{
					padding: 1.5,
					marginTop: -0.5,
					marginBottom: -0.5,
					width: '98%',
					display: 'flex',
					alignItems: 'flex-start',
					flexDirection: 'column',
					position: 'left',
					boxShadow: 0,
				}}
			>
				{/* Text content */}
				<Typography
					variant="h5"
					style={{
						fontFamily: 'SpoqaHanSansNeo-Bold',
					}}
				>
					예약 히스토리
				</Typography>
			</Paper>

			{/* Rectangular Box */}
			<Paper
				sx={{
					padding: 1.5,
					margin: 'auto',
					marginTop: 0.5,
					border: '2px solid lightblue',
					borderRadius: '10px',
					width: '93%',
					display: 'flex',
					alignItems: 'flex-start',
					flexDirection: 'column',
					position: 'relative',
				}}
			>
				{/* Small Picture */}
				<Typography
					variant="h6"
					style={{
						fontFamily: 'SpoqaHanSansNeo-Bold',
					}}
				>
					이용예정
				</Typography>
				<div
					style={{
						width: '35%',
						borderRadius: '10%', // Adjust the border radius as needed
						overflow: 'hidden', // Ensure image stays within rounded corners
						zIndex: 1,
						marginBottom: '8px',
						marginTop: '8px',
					}}
				>
					<img
						src="https://kr.object.ncloudstorage.com/peerlock-image-storage/storage/room1.jpg" // Replace with real image path
						alt="Small Picture"
						style={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
						}}
					/>
				</div>
				{/* Date, time info,, replace with real date and time */}
				<Typography
					variant="body1"
					style={{
						fontFamily: 'SpoqaHanSansNeo-Medium',
					}}
				>
					<strong>보관 시작</strong> | 2023.08.22(화), 오전 08:00
				</Typography>
				<Typography
					variant="body1"
					style={{
						fontFamily: 'SpoqaHanSansNeo-Medium',
					}}
				>
					<strong>보관 만료</strong> | 2023.08.22(화), 오후 12:00
				</Typography>
			</Paper>
			<Paper
				sx={{
					padding: 1.5,
					marginTop: 4,
					width: '98%',
					display: 'flex',
					alignItems: 'flex-start',
					flexDirection: 'column',
					position: 'left',
					boxShadow: 0,
				}}
			>
				{/* Text content */}
				<Typography
					variant="h6"
					style={{
						fontFamily: 'SpoqaHanSansNeo-Bold',
					}}
				>
					최근 본 이력
				</Typography>
			</Paper>
			<Paper
				sx={{
					padding: 1.5,
					marginTop: 4,
					width: '98%',
					display: 'flex',
					alignItems: 'flex-start',
					flexDirection: 'column',
					position: 'left',
					boxShadow: 0,
				}}
			>
				{/* Text content */}
				<Typography
					variant="h6"
					style={{
						fontFamily: 'SpoqaHanSansNeo-Bold',
					}}
				>
					호스트 뷰
				</Typography>
			</Paper>

			<Paper
				sx={{
					paddingLeft: 1.5,
					paddingTop: 1,
					paddingBottom: 3,
					paddingRight: 3,
					marginBottom: 0,
					width: '98%',
					display: 'flex',
					alignItems: 'center', // Center both horizontally and vertically
					flexDirection: 'row',
					position: 'left',
					boxShadow: 0,
				}}
			>
				{/* Emoji */}
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						paddingRight: '20px',
					}}
				>
					<span style={{ fontSize: '24px' }}>✅</span>
				</div>
				{/* Text content */}
				<div>
					<Typography
						variant="h6"
						style={{
							fontFamily: 'SpoqaHanSansNeo-Medium',
						}}
					>
						호스트 되기
					</Typography>
				</div>
			</Paper>
			<Paper
				sx={{
					padding: 1.5,
					marginTop: 4,
					width: '98%',
					display: 'flex',
					alignItems: 'flex-start',
					flexDirection: 'column',
					position: 'left',
					boxShadow: 0,
				}}
			>
				{/* Text content */}
				<Typography
					variant="h6"
					style={{
						fontFamily: 'SpoqaHanSansNeo-Bold',
					}}
				>
					계정관리
				</Typography>
			</Paper>
			<Paper
				sx={{
					paddingLeft: 1.5,
					paddingTop: 1,
					paddingBottom: 3,
					paddingRight: 3,
					marginBottom: 0,
					width: '98%',
					display: 'flex',
					alignItems: 'center', // Center both horizontally and vertically
					flexDirection: 'row',
					position: 'left',
					boxShadow: 0,
				}}
			>
				{/* Emoji */}
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						paddingRight: '20px',
					}}
				>
					<span style={{ fontSize: '24px' }}>ℹ️</span>
				</div>
				{/* Text content */}
				<div>
					<Typography
						variant="h6"
						style={{
							fontFamily: 'SpoqaHanSansNeo-Medium',
						}}
					>
						계정정보
					</Typography>
				</div>
			</Paper>

			<Paper
				sx={{
					paddingLeft: 1.5,
					paddingTop: 1,
					paddingBottom: 3,
					paddingRight: 3,
					marginBottom: 0,
					width: '98%',
					display: 'flex',
					alignItems: 'center', // Center both horizontally and vertically
					flexDirection: 'row',
					position: 'left',
					boxShadow: 0,
				}}
			>
				{/* Emoji */}
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						paddingRight: '20px',
					}}
				>
					<span style={{ fontSize: '24px' }}>＄</span>
				</div>
				{/* Text content */}
				<div>
					<Typography
						variant="h6"
						style={{
							fontFamily: 'SpoqaHanSansNeo-Medium',
						}}
					>
						계좌정보
					</Typography>
				</div>
			</Paper>
			<Paper
				sx={{
					paddingLeft: 1.5,
					paddingTop: 1,
					paddingBottom: 3,
					paddingRight: 3,
					marginBottom: 0,
					width: '98%',
					display: 'flex',
					alignItems: 'center', // Center both horizontally and vertically
					flexDirection: 'row',
					position: 'left',
					boxShadow: 0,
				}}
			>
				{/* Emoji */}
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						paddingRight: '20px',
					}}
				>
					<span style={{ fontSize: '24px' }}>🔔</span>
				</div>
				{/* Text content */}
				<div>
					<Typography
						variant="h6"
						style={{
							fontFamily: 'SpoqaHanSansNeo-Medium',
						}}
					>
						알림설정
					</Typography>
				</div>
			</Paper>

			<Paper
				sx={{
					padding: 1.5,
					marginTop: 4,
					width: '98%',
					display: 'flex',
					alignItems: 'flex-start',
					flexDirection: 'column',
					position: 'left',
					boxShadow: 0,
				}}
			>
				{/* Text content */}
				<Typography
					variant="h6"
					style={{
						fontFamily: 'SpoqaHanSansNeo-Bold',
					}}
				>
					고객센터
				</Typography>
			</Paper>
			{/* from here onwards, help centre */}
			{/* login help */}
			<Paper
				sx={{
					padding: 1.5,
					marginBottom: 0,
					width: '98%',
					display: 'flex',
					alignItems: 'center', // Center both horizontally and vertically
					flexDirection: 'row',
					position: 'left',
					boxShadow: 0,
				}}
			>
				{/* Emoji */}
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						paddingRight: '20px',
					}}
				>
					<span style={{ fontSize: '24px' }}>😀</span>
				</div>
				{/* Text content */}
				<div>
					<Typography
						variant="h6"
						style={{
							fontFamily: 'SpoqaHanSansNeo-Medium',
						}}
					>
						로그인 설정
					</Typography>
					<Typography
						variant="body2"
						sx={{ color: 'darkgrey' }}
						style={{
							fontFamily: 'SpoqaHanSansNeo-Medium',
						}}
					>
						평일 오전 9시 ~ 오후 6시 운영
					</Typography>
				</div>
			</Paper>
			{/* FAQ help */}
			<Paper
				sx={{
					paddingLeft: 1.5,
					paddingTop: 1,
					paddingBottom: 2,
					paddingRight: 3,
					marginBottom: 0,
					width: '98%',
					display: 'flex',
					alignItems: 'center', // Center both horizontally and vertically
					flexDirection: 'row',
					position: 'left',
					boxShadow: 0,
				}}
			>
				{/* Emoji */}
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						paddingRight: '20px',
					}}
				>
					<span style={{ fontSize: '24px' }}>❓</span>
				</div>
				{/* Text content */}
				<div>
					<Typography
						variant="h6"
						style={{
							fontFamily: 'SpoqaHanSansNeo-Medium',
						}}
					>
						자주 묻는 질문
					</Typography>
				</div>
			</Paper>
			{/* contact help */}
			<Paper
				sx={{
					padding: 1.5,
					paddingTop: 1,
					marginBottom: 0,
					width: '98%',
					display: 'flex',
					alignItems: 'center', // Center both horizontally and vertically
					flexDirection: 'row',
					position: 'left',
					boxShadow: 0,
				}}
			>
				{/* Emoji */}
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						paddingRight: '20px',
					}}
				>
					<span style={{ fontSize: '24px' }}>📞</span>
				</div>
				{/* Text content */}
				<div>
					<Typography
						variant="h6"
						style={{
							fontFamily: 'SpoqaHanSansNeo-Medium',
						}}
					>
						상담원 연결
					</Typography>
					<Typography
						variant="body2"
						sx={{ color: 'darkgrey' }}
						style={{
							fontFamily: 'SpoqaHanSansNeo-Medium',
						}}
					>
						평일 오전 9시 ~ 오후 6시 운영
					</Typography>
				</div>
			</Paper>

			{/* chatbot help */}
			<Paper
				sx={{
					padding: 1.5,
					paddingTop: 1,
					marginBottom: 7.5,
					width: '98%',
					display: 'flex',
					alignItems: 'center', // Center both horizontally and vertically
					flexDirection: 'row',
					position: 'left',
					boxShadow: 0,
				}}
			>
				{/* Emoji */}
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						paddingRight: '20px',
					}}
				>
					<span style={{ fontSize: '24px' }}>💬</span>
				</div>
				{/* Text content */}
				<div>
					<Typography
						variant="h6"
						style={{
							fontFamily: 'SpoqaHanSansNeo-Medium',
						}}
					>
						챗봇 1:1 질문하기
					</Typography>
					<Typography
						variant="body2"
						sx={{ color: 'darkgrey' }}
						style={{
							fontFamily: 'SpoqaHanSansNeo-Medium',
						}}
					>
						24시간 운영
					</Typography>
				</div>
			</Paper>

			{/* Fixed Bottom Navigation */}
			<FixedBottomNavigation />
		</div>
	);
}

export default MyGuest;
