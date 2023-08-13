import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const StorageList = ({ storage }) => {
	// 비구조화 할당을 사용
	return (
		<div>
			<Card>
				<input type="hidden" value={storage.storageId} />
				<CardMedia
					component="img"
					height="140"
					image={storage.image || 'https://via.placeholder.com/150'} // 예제로 image 속성 사용
					alt="Placeholder Image"
				/>
				<CardContent>
					<Typography variant="h6">{storage.storageName || 'Item Title'}</Typography>
					<Typography variant="body2" color="textSecondary">
						{storage.storageDescription || 'Item description...'}
					</Typography>
				</CardContent>
				<CardActions>
					<Button
						size="small"
						color="primary"
						component={Link}
						to={`/storage-detail/${storage.storageId}`}
					>
						상세 보기
					</Button>
				</CardActions>
			</Card>
		</div>
	);
};

export default StorageList;
