import React from 'react';
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Grid,
} from '@mui/material';
import FixedBottomNavigation from '../FixBottomNavigation';

const StorageDetail = ({ storage }) => {
	return (
		<div>
			<Card>
				<CardMedia
					component="img"
					height="140"
					image="https://via.placeholder.com/150"
					alt="Placeholder Image"
				/>
				<CardContent>
					<Typography variant="h6">{storage.storageName}</Typography>
					<Typography variant="body2" color="textSecondary">
						{storage.storageDescription}
					</Typography>
				</CardContent>
				<CardContent>
					<Typography variant="h6">{storage.user.username}</Typography>
					<Typography variant="body2" color="textSecondary">
						{storage.storageDescription}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" color="primary">
						예약하기
					</Button>
				</CardActions>
			</Card>
			<FixedBottomNavigation />
		</div>
	);
};

export default StorageDetail;
