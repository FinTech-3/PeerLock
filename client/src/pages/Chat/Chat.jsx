import React from 'react';
import FixedBottomNavigation from '../../components/FixBottomNavigation';
import ChatList from '../../components/chat/ChatList';
import AppHeader from '../../components/common/AppHeader';

const Chat = () => {
	const chats = [
		{
			username: 'user1',
			profileImage: 'https://example.com/user1.jpg',
			lastMessage: '안녕하세요!',
			path: 'http://localhost:3000/chat',
		},
		{
			username: 'user2',
			profileImage: 'https://example.com/user2.jpg',
			lastMessage: '안녕하세요!',
			path: 'http://localhost:3000/chat',
		},
		{
			username: 'user3',
			profileImage: 'https://example.com/user2.jpg',
			lastMessage: '안녕하세요!',
			path: 'http://localhost:3000/chat',
		},
		{
			username: 'user4',
			profileImage: 'https://example.com/user2.jpg',
			lastMessage: '안녕하세요!',
			path: 'http://localhost:3000/chat',
		},
		{
			username: 'user5',
			profileImage: 'https://example.com/user2.jpg',
			lastMessage: '안녕하세요!',
			path: 'http://localhost:3000/chat',
		},
		{
			username: 'user2',
			profileImage: 'https://example.com/user2.jpg',
			lastMessage: '안녕하세요!',
			path: 'http://localhost:3000/chat',
		},
		// ... 기타 채팅 목록 데이터
	];
	return (
		<div>
			<AppHeader title={'chat'} />
			<ChatList chats={chats} />
			<FixedBottomNavigation />
		</div>
	);
};

export default Chat;
