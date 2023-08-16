import React from 'react';
import FixedBottomNavigation from '../../components/FixBottomNavigation';
import { ButtonBase, Button } from '@mui/material';
import { Link } from 'react-router-dom';

// this page will be the guest info page

const Home = () => {
	return (
		<div>
			<span>home화면</span>
			<div>
				<ButtonBase>
					<Button variant="contained" color="primary" component={Link} to="/storage">
						Go to Storage
					</Button>
				</ButtonBase>
			</div>

			<FixedBottomNavigation />
		</div>
	);
};

export default Home;
