import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

const ChatList = ({ chats }) => {
	return (
		<List>
			{chats.map((chat, index) => (
				<React.Fragment key={index}>
					<div style={{ width: '100%', boxSizing: 'border-box' }}>
						<ListItemButton component={Link} to={`${chat.path}`}>
							<ListItemAvatar>
								<Avatar src={chat.profileImage} />
							</ListItemAvatar>
							<ListItemText primary={chat.username} secondary={chat.lastMessage} />
						</ListItemButton>
						{index !== chats.length && <Divider />}
					</div>
				</React.Fragment>
			))}
		</List>
	);
};

export default ChatList;
