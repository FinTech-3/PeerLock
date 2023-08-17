import React from 'react';
import { Typography, IconButton, Button, Avatar, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import FixedBottomNavigation from '../../components/FixBottomNavigation';

async function switchView(user_id) {
	try {
		// Make an API call to the server to get the user's status
		const response = await fetch(`api/user/host/${user_id}`);
		const data = await response.json();

		// Check if the user is a host or a guest
		if (data && data.status === 'HOST') {
			return 'MyHost'; // Return the view for the host
		} else {
			return 'MyGuest'; // Return the view for the guest
		}
	} catch (error) {
		alert('Error fetching user status:', error);
		return null;
	}
}

function MyHost() {
	const navigate = useNavigate();

	return (
		<div style={{ maxHeight: '100vh', overflowX: 'hidden', overflowY: 'auto' }}>
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
					src="/grahamroberts.jpeg" // Replace with real image path
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
					<Typography variant="h6">배승우</Typography>
					<Typography variant="body1" color={'lightgrey'}>
						Level 2
					</Typography>
					{/* Replace with real name and level */}
				</Paper>

				<Button
					variant="outlined"
					size="small"
					sx={{ marginTop: -12, marginLeft: 33 }}
					onClick={navigate(`/${switchView(1)}`)} // replace with real user id
				>
					게스트로 전환 &rarr;{' '}
					{/* this is seriously messed up, fix only if needed. formatting is very broken, should work fine for iphone 12 pro */}
				</Button>
			</div>
			<Paper
				sx={{
					padding: 1.5,
					marginTop: 2,
					width: '98%',
					display: 'flex',
					alignItems: 'flex-start',
					flexDirection: 'column',
					position: 'left',
					boxShadow: 0,
				}}
			>
				{/* Text content */}
				<Typography variant="h6">계정관리</Typography>
			</Paper>
			<Paper
				sx={{
					paddingLeft: 1.5,
					paddingTop: 3,
					paddingBottom: 3,
					paddingRight: 3,
					marginBottom: 0,
					width: '98%',
					display: 'flex',
					alignItems: 'center', // Center both horizontally and vertically
					flexDirection: 'row',
					position: 'left',
					boxShadow: 0,
					borderTop: '1px solid lightgrey',
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
					<Typography variant="h6">계정정보</Typography>
				</div>
			</Paper>

			<Paper
				sx={{
					paddingLeft: 1.5,
					paddingTop: 3,
					paddingBottom: 3,
					paddingRight: 3,
					marginBottom: 0,
					width: '98%',
					display: 'flex',
					alignItems: 'center', // Center both horizontally and vertically
					flexDirection: 'row',
					position: 'left',
					boxShadow: 0,
					borderTop: '1px solid lightgrey',
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
					<Typography variant="h6">계좌정보</Typography>
				</div>
			</Paper>
			<Paper
				sx={{
					paddingLeft: 1.5,
					paddingTop: 3,
					paddingBottom: 3,
					paddingRight: 3,
					marginBottom: 0,
					width: '98%',
					display: 'flex',
					alignItems: 'center', // Center both horizontally and vertically
					flexDirection: 'row',
					position: 'left',
					boxShadow: 0,
					borderTop: '1px solid lightgrey',
					borderBottom: '1px solid lightgrey',
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
					<Typography variant="h6">알림설정</Typography>
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
				<Typography variant="h6">고객센터</Typography>
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
					borderTop: '1px solid lightgrey',
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
					<Typography variant="h6">로그인 설정</Typography>
					<Typography variant="body2" sx={{ color: 'grey' }}>
						평일 오전 9시 ~ 오후 6시 운영
					</Typography>
				</div>
			</Paper>
			{/* FAQ help */}
			<Paper
				sx={{
					paddingLeft: 1.5,
					paddingTop: 3,
					paddingBottom: 3,
					paddingRight: 3,
					marginBottom: 0,
					width: '98%',
					display: 'flex',
					alignItems: 'center', // Center both horizontally and vertically
					flexDirection: 'row',
					position: 'left',
					boxShadow: 0,
					borderTop: '1px solid lightgrey',
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
					<Typography variant="h6">자주 묻는 질문</Typography>
				</div>
			</Paper>
			{/* contact help */}
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
					borderTop: '1px solid lightgrey',
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
					<Typography variant="h6">상담원 연결</Typography>
					<Typography variant="body2" sx={{ color: 'grey' }}>
						평일 오전 9시 ~ 오후 6시 운영
					</Typography>
				</div>
			</Paper>

			{/* chatbot help */}
			<Paper
				sx={{
					padding: 1.5,
					marginBottom: 7.5,
					width: '98%',
					display: 'flex',
					alignItems: 'center', // Center both horizontally and vertically
					flexDirection: 'row',
					position: 'left',
					boxShadow: 0,
					borderTop: '1px solid lightgrey',
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
					<Typography variant="h6">챗봇 1:1 질문하기</Typography>
					<Typography variant="body2" sx={{ color: 'grey' }}>
						24시간 운영
					</Typography>
				</div>
			</Paper>

			{/* Fixed Bottom Navigation */}
			<FixedBottomNavigation />
		</div>
	);
}

export default MyHost;
