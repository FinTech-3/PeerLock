import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

export default function FixedBottomNavigation() {
	const [value, setValue] = React.useState(0);
	const ref = React.useRef(null);

	return (
		<Box ref={ref}>
			<CssBaseline />
			<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
				<BottomNavigation
					showLabels
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
				>
					<BottomNavigationAction
						component={Link}
						to="/home"
						label="Home"
						icon={<HomeOutlinedIcon />}
					/>
					<BottomNavigationAction
						component={Link}
						to="/wish"
						label="Wish"
						icon={<FavoriteIcon />}
					/>
					<BottomNavigationAction
						component={Link}
						to="/map"
						label="Map"
						icon={<MapOutlinedIcon />}
					/>
					<BottomNavigationAction
						component={Link}
						to="/chat"
						label="Chat"
						icon={<ChatBubbleOutlineOutlinedIcon />}
					/>
					<BottomNavigationAction
						component={Link}
						to="/my"
						label="My"
						icon={<PersonOutlineOutlinedIcon />}
					/>
				</BottomNavigation>
			</Paper>
		</Box>
	);
}
