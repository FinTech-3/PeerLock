import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, TextField, Button, Avatar, Paper } from '@mui/material';
import { login } from '../../api/login';
import Home from './HomeHost';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [user, setUser] = useState('');

	const navigate = useNavigate();

	const handleLogin = (username, password) => {
		const fetch = async () => {
			const data = await login(username, password);
			setUser(data);
			console.log(data);
			localStorage.setItem('userId', data.userId);
			localStorage.setItem('userStatus', data.status);
			if (data.status === 'HOST') {
				// navigate(`/homehost/${data.userId}`);
				navigate(`/homehost`);
			} else if (data.status === 'USER') {
				navigate(`/homeuser`);
				// navigate(`/homeuser/${data.userId}`);
			} else {
				navigate(`/`);
			}
		};
		fetch();
	};

	return (
		<div
			style={{
				minHeight: '100vh',
				maxHeight: '100vh',
				overflowX: 'hidden',
				overflowY: 'auto',
				background: 'linear-gradient(to bottom, #FFFFFF, #BDD7FE)', // Adjust gradient colors
			}}
		>
			<div
				sx={{
					display: 'flex',
					flexDirection: 'column', // To stack the elements vertically
					alignItems: 'center', // Center content horizontally
				}}
			>
				<Paper
					sx={{
						padding: 2,
						marginTop: 20,
						marginBottom: 0,
						width: '100%',
						display: 'flex',
						alignItems: 'center',
						flexDirection: 'column',
						boxShadow: 0,
						backgroundColor: 'transparent', // Override white background
					}}
				>
					<Typography variant="h3" fontWeight="bold">
						<strong>PeerLock</strong>
					</Typography>
				</Paper>
				<Paper
					sx={{
						padding: 2,
						marginBottom: 0,
						paddingLeft: 3.5,
						paddingRight: 3.5,
						width: '100%',
						display: 'flex',
						alignItems: 'center',
						flexDirection: 'column',
						boxShadow: 0,
						backgroundColor: 'transparent', // Override white background
					}}
				>
					<TextField
						label="아이디"
						variant="outlined"
						margin="dense"
						fullWidth
						value={username}
						onChange={event => setUsername(event.target.value)}
					/>
					<TextField
						label="비밀번호"
						type="password"
						variant="outlined"
						margin="dense"
						fullWidth
						value={password}
						onChange={event => setPassword(event.target.value)}
					/>

					{/* Login Button */}
					<Button
						variant="contained"
						sx={{
							marginTop: 2,
							borderRadius: 2,
							backgroundColor: '#000000',
							'&:hover': {
								backgroundColor: '#A9A9A9', // Set the same color as default
							},
						}}
						fullWidth
						onClick={() => handleLogin(username, password)}
						// onClick={() => navigate('/HomeHost')}
					>
						Login (바로 Storage 감)
					</Button>
				</Paper>
				<Paper
					sx={{
						padding: 2,
						display: 'flex',
						textDecoration: 'underline',
						boxShadow: 0,
						alignItems: 'center',
						backgroundColor: 'transparent', // Override white background
					}}
				>
					<Typography variant="body1" color={'black'} sx={{ marginLeft: 1.5 }}>
						<a href="#" style={{ textDecoration: 'none', color: 'black' }}>
							회원가입
						</a>{' '}
						{/* Replace with real link */}
					</Typography>
					<Typography variant="body1" color={'black'} sx={{ marginLeft: 16.5 }}>
						<a href="#" style={{ textDecoration: 'none', color: 'black' }}>
							아이디 / 비밀번호 찾기
						</a>{' '}
						{/* Replace with real link */}
					</Typography>
				</Paper>
				{/* Thin Line */}
				<div
					style={{
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: '16px',
					}}
				>
					<div
						style={{
							width: '85%',
							height: 1,
							backgroundColor: '#000000',
						}}
					/>
				</div>
				<div>
					<Paper
						sx={{
							padding: 1,
							boxShadow: 0,
							backgroundColor: 'transparent', // Override white background
						}}
					>
						<Typography variant="h6" fontSize={15} textAlign={'center'}>
							<strong>간편 로그인</strong>
						</Typography>
					</Paper>
					<span
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-evenly',
							alignItems: 'center',
							marginTop: 5,
						}}
					>
						<Avatar>
							<a href="#">
								<img
									src="/naver.png"
									alt="Naver"
									style={{ width: '100%', height: '100%', objectFit: 'contain' }}
								/>
							</a>
						</Avatar>
						<Avatar>
							<a href="#">
								<img
									src="/kakao.png"
									alt="Kakao"
									style={{ width: '100%', height: '100%', objectFit: 'contain' }}
								/>
							</a>
						</Avatar>
						<Avatar>
							<a href="#">
								<img
									src="/google1.png"
									alt="Google"
									style={{ width: '100%', height: '100%', objectFit: 'contain' }}
								/>
							</a>
						</Avatar>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Login;
