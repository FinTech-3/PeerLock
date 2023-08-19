import React, { useState } from 'react';
import FixedBottomNavigationHost from '../../components/FixBottomNavigationHost';
import { Typography } from '@mui/material';
import { Paper } from '@mui/material';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2'; // Import the Bar component from Chart.js

const FinanceHost = () => {
	const [selectedTab, setSelectedTab] = useState(0);

	const handleTabClick = index => {
		setSelectedTab(index);
	};

	const chartData = {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'], // Replace with your labels
		datasets: [
			{
				label: '월별 수익 (단위: 천원/월)',
				data: [20, 30, 40, 35, 50, 45, 43, 35], // Replace with your actual data
				fill: false,
				backgroundColor: 'rgba(75,192,192,0.4)',
				borderColor: 'rgba(75,192,192,1)',
			},
		],
	};

	return (
		<div>
			{/* Title */}
			<Typography
				variant="h4"
				sx={{
					flexGrow: 1,
					marginTop: 7,
					marginLeft: 5,
					fontSize: 28,
				}}
			>
				통계
			</Typography>

			{/* Menu Bar */}
			<div
				style={{
					display: 'flex',
					justifyContent: 'center', // Center horizontally
					paddingTop: 10,
					borderBottom: '1px solid lightgrey',
					width: '85%',
					margin: '0 25px', // Add margin to shorten gray line
				}}
			>
				<div
					style={{
						display: 'flex',
						alignItems: 'center', // Center vertically
						width: '100%',
						marginTop: 15,
						position: 'relative', // Relative positioning for sliding animation
					}}
				>
					{/* Sliding Indicator */}
					<div
						style={{
							position: 'absolute',
							bottom: 0,
							left: selectedTab === 0 ? 0 : '30%', // Slide to the left or right based on selected tab
							width: selectedTab === 0 ? '31%' : '43%', // Half the width of the container
							// width: '35%', // Half the width of the container
							height: '3px', // Height of the blue bar
							backgroundColor: '#00BFFF',
							transition: 'left 0.3s', // Slide animation
						}}
					/>
					{/* 수익 Tab */}
					<div
						onClick={() => handleTabClick(0)}
						style={{
							cursor: 'pointer',
							color: selectedTab === 0 ? 'black' : 'grey',
							fontSize: 24,
							marginLeft: 30,
							marginBottom: 10,
							marginRight: 40, // Add margin between tabs
						}}
					>
						수익
					</div>

					{/* 리뷰 & 별점 Tab */}
					<div
						onClick={() => handleTabClick(1)}
						style={{
							cursor: 'pointer',
							color: selectedTab === 1 ? 'black' : 'grey',
							marginBottom: 10,
							fontSize: 24,
						}}
					>
						리뷰 & 별점
					</div>
				</div>
			</div>

			{/* Rectangular Box */}
			{/* Rectangular Box */}
			{selectedTab === 0 && (
				<div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
					<Paper
						sx={{
							padding: 1.5,
							border: '1px solid lightgrey',
							borderRadius: '10px',
							width: '93%',
							display: 'flex',
							alignItems: 'flex-start',
							flexDirection: 'column',
							position: 'relative',
						}}
					>
						<Typography variant="h4" style={{ fontSize: 30 }}>
							<strong>₩280,000</strong>
						</Typography>
						<Typography variant="body1" style={{ fontSize: 16 }}>
							2023년 총 수익
						</Typography>
						<div
							style={{
								width: '100%',
								height: '300px', // Set an appropriate height for the graph
								marginTop: 20,
							}}
						>
							<Bar data={chartData} /> {/* Render the Line chart */}
						</div>
					</Paper>
				</div>
			)}

			{/* Your content here */}
			<FixedBottomNavigationHost />
		</div>
	);
};

export default FinanceHost;
