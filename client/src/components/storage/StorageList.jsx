import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';

const StorageList = ({ storage }) => {
	return (
		<div>
			<Link to={`/storage-detail/${storage.storageId}`} style={{ textDecoration: 'none' }}>
				<Card
					sx={{
						borderRadius: '20px',
						boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
						overflow: 'hidden',
					}}
				>
					<input type="hidden" value={storage.storageId} />
					<CardMedia
						component="img"
						height="240"
						image={storage.image || 'https://via.placeholder.com/150'}
						alt="Placeholder Image"
					/>
					<CardContent sx={{ padding: '10px' }}>
						<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
							<Typography variant="h6" sx={{ fontWeight: 'bold' }}>
								{storage.storageName || 'Item Title'}
							</Typography>
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<StarIcon color="primary" />
								<Typography variant="h6" sx={{ marginLeft: '8px' }}>
									{storage.star || '4.54'}
								</Typography>
							</div>
						</div>
						<Typography variant="body2" color="textSecondary">
							{storage.storageDescription || 'Item description...'}
						</Typography>
					</CardContent>
				</Card>
			</Link>
		</div>
	);
};

export default StorageList;
