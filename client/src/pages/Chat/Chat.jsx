import React from 'react';
import FixedBottomNavigation from '../../components/FixBottomNavigation';
import ChatList from '../../components/chat/ChatList';
import AppHeader from '../../components/common/AppHeader';

const Chat = () => {
	const chats = [
		{
			username: '어피치',
			profileImage:
				'https://kr.object.ncloudstorage.com/peerlock-image-storage/storage/profile1.png',
			lastMessage: '안녕하세요! 문의드릴게 있어서요.',
			path: 'http://localhost:3000/chat',
			chatImage: 'https://kr.object.ncloudstorage.com/peerlock-image-storage/storage/chat1.png',
		},
		{
			username: '김춘식',
			profileImage:
				'https://kr.object.ncloudstorage.com/peerlock-image-storage/storage/profile2.png',
			lastMessage: '확인했습니다. 감사합니다:)',
			path: 'http://localhost:3000/chat',
			chatImage: 'https://kr.object.ncloudstorage.com/peerlock-image-storage/storage/chat2.png',
		},
		{
			username: '해피해피',
			profileImage:
				'https://kr.object.ncloudstorage.com/peerlock-image-storage/storage/profile3.png',
			lastMessage: '넵! 수고하세요~!',
			path: 'http://localhost:3000/chat',
			chatImage: 'https://kr.object.ncloudstorage.com/peerlock-image-storage/storage/chat3.png',
		},
		{
			username: 'Loopy',
			profileImage:
				'https://kr.object.ncloudstorage.com/peerlock-image-storage/storage/profile4.png',
			lastMessage: '파인애플님이 이모티콘을 보냈어요.',
			path: 'http://localhost:3000/chat',
			chatImage: 'https://kr.object.ncloudstorage.com/peerlock-image-storage/storage/chat4.png',
		},
		{
			username: '푸바오',
			profileImage:
				'https://kr.object.ncloudstorage.com/peerlock-image-storage/storage/profile5.png',
			lastMessage: '안녕하세요. 연락을 이제 봤네요ㅠ',
			path: 'http://localhost:3000/chat',
			chatImage: 'https://kr.object.ncloudstorage.com/peerlock-image-storage/storage/chat5.png',
		},
		{
			username: '크롱롱롱',
			profileImage:
				'https://kr.object.ncloudstorage.com/peerlock-image-storage/storage/profile6.png',
			lastMessage: '아직 창고 자리 남아있나요?',
			path: 'http://localhost:3000/chat',
			chatImage: 'https://kr.object.ncloudstorage.com/peerlock-image-storage/storage/chat6.png',
		},
		// ... 기타 채팅 목록 데이터gif
	];
	return (
		<div>
			<AppHeader title={'Chat'} />
			<ChatList chats={chats} />
			<FixedBottomNavigation />
		</div>
	);
};

export default Chat;
