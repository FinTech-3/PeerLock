import React from 'react';
import FixedBottomNavigation from '../../components/FixBottomNavigation';
import ChatList from '../../components/chat/ChatList';
import AppHeader from '../../components/common/AppHeader';

const Chat = () => {
	const chats = [
		{
			username: '어피치',
			profileImage: 'https://example.com/user1.jpg',
			lastMessage: '안녕하세요! 문의드릴게 있어서요.',
			path: 'http://localhost:3000/chat',
		},
		{
			username: '김춘식',
			profileImage: 'https://example.com/user2.jpg',
			lastMessage: '확인했습니다. 감사합니다:)',
			path: 'http://localhost:3000/chat',
		},
		{
			username: '해피해피',
			profileImage: 'https://example.com/user2.jpg',
			lastMessage: '넵! 수고하세요~!',
			path: 'http://localhost:3000/chat',
		},
		{
			username: 'Loopy',
			profileImage: 'https://example.com/user2.jpg',
			lastMessage: '파인애플님이 이모티콘을 보냈어요.',
			path: 'http://localhost:3000/chat',
		},
		{
			username: '푸바오',
			profileImage: 'https://example.com/user2.jpg',
			lastMessage: '안녕하세요. 연락을 이제 봤네요ㅠ',
			path: 'http://localhost:3000/chat',
		},
		{
			username: '크롱롱롱',
			profileImage: 'https://example.com/user2.jpg',
			lastMessage: '아직 창고 자리 남아있나요?',
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
