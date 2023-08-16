import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Slide from '@mui/material/Slide';
import Backdrop from '@mui/material/Backdrop';
import Storage from '../Storage/Storage'; // Storage 컴포넌트의 경로를 정확히 지정해주세요.
import FixedBottomNavigation from '../../components/FixBottomNavigation';
import NaverMapComponent from '../../components/NaverMapComponent';
import { NavermapsProvider } from 'react-naver-maps';
import SearchComponent from '../../components/common/SearchComponent';
import { Button } from '@mui/material';

const MapScreen = () => {
	const [lat, setLat] = useState(37.54);
	const [lng, setLng] = useState(126.99);
	const [zoom, setZoom] = useState(12);
	const [roadAddress, setRoadAddress] = useState(null);
	const [openModal, setOpenModal] = useState(false);

	const handleOpenModal = () => {
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	return (
		<div>
			<NavermapsProvider
				ncpClientId={process.env.REACT_APP_NAVER_MAP_CLIENT_ID}
				submodules={['geocoder']}
			>
				<div style={{ position: 'relative', width: '100%', height: '100%' }}>
					<NaverMapComponent
						zoom={zoom}
						Latitude={lat}
						Longtitude={lng}
						roadAddress={roadAddress}
					/>

					{/* 여기에 모달을 열 버튼을 추가할 수 있습니다. */}
					<Button
						style={{
							position: 'absolute',
							top: '10px',
							right: '10px',
							zIndex: 1000, // z-index를 높게 설정하여 맵 위에 나타나게 합니다.
						}}
						onClick={handleOpenModal}
					>
						Open Storage Modal
					</Button>

					<div style={{ position: 'absolute', top: '0', width: '100%' }}>
						<SearchComponent />
					</div>
				</div>
				<FixedBottomNavigation />

				{/* Slide up modal */}
				<Modal
					open={openModal}
					onClose={handleCloseModal}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 500,
					}}
					style={{ height: '100%' }}
				>
					<Slide direction="up" in={openModal}>
						<div
							style={{
								backgroundColor: 'white', // 백그라운드를 하얀색으로
								height: '95%', // 전체 화면의 95% 차지
								marginTop: '5%', // 상단 5% 공간 남김
								overflowY: 'auto', // 스크롤 가능하게 설정
							}}
						>
							<Storage />
						</div>
					</Slide>
				</Modal>
			</NavermapsProvider>
		</div>
	);
};

export default MapScreen;
