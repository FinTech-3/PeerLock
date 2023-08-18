import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Paper from '@mui/material/Paper';
import { Link, useLocation } from 'react-router-dom';

export default function FixedBottomNavigationHost() {
	const location = useLocation();
	const initialValue = getInitialValue(location.pathname);
	const [value, setValue] = React.useState(initialValue);
	const ref = React.useRef(null);

	function getInitialValue(path) {
		switch (path) {
			case '/HomeHost':
				return 0;
			case '/mystorage':
				return 1;
			case '/finance':
				return 2;
			case '/ChatHost':
				return 3;
			case '/MyHost':
				return 4;
			default:
				return 0; // 기본값
		}
	}

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
						to="/HomeHost"
						label="Home"
						icon={<HomeOutlinedIcon />}
					/>
					<BottomNavigationAction
						component={Link}
						label="Storage"
						to="/mystorage"
						icon={<WidgetsIcon />}
					/>
					<BottomNavigationAction
						component={Link}
						to="/finance"
						label="Finance"
						icon={<LeaderboardIcon />}
					/>
					<BottomNavigationAction
						component={Link}
						to="/ChatHost"
						label="Chat"
						icon={<ChatBubbleOutlineOutlinedIcon />}
					/>
					<BottomNavigationAction
						component={Link}
						to="/MyHost"
						label="Profile"
						icon={<PersonOutlineOutlinedIcon />}
					/>
				</BottomNavigation>
			</Paper>
		</Box>
	);
}
