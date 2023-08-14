import React, { useState, useEffect } from 'react';
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

const StorageDetail = ({ storageDetail }) => {
	return (
		<div>
			<Card sx={{ width: '100%' }}>
				<CardMedia
					component="img"
					height="140"
					image="https://via.placeholder.com/400"
					alt="Placeholder Image"
					sx={{ objectFit: 'cover' }}
				/>
				<CardContent>
					<Typography variant="h6">{storageDetail.storageName}</Typography>
					<Typography variant="body2" color="textSecondary">
						{storageDetail.storageDescription}
					</Typography>
				</CardContent>
				<CardContent>
					<Typography variant="h6">{storageDetail.user?.username}</Typography>
					<Typography variant="body2" color="textSecondary">
						{storageDetail.storageDescription}
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
