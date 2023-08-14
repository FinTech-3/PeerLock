import React from 'react';
import FixedBottomNavigation from '../../components/FixBottomNavigation';
import NaverMapComponent from '../../components/NaverMapComponent';
import { NavermapsProvider } from 'react-naver-maps';
import { useState } from 'react';
import AddressInput from '../../components/AddressInput';

const MapScreen = () => {
	const [lat, setLat] = useState(37.54);
	const [lng, setLng] = useState(126.99);
	const [zoom, setZoom] = useState(12);
	const [roadAddress, setRoadAddress] = useState(null);

	return (
		<div>
			<NavermapsProvider
				ncpClientId={process.env.REACT_APP_NAVER_MAP_CLIENT_ID}
				submodules={['geocoder']}
			>
				<div
					className="map"
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						width: '100%',
						height: '100%',
					}}
				>
					<AddressInput lat={lat} lng={lng} />
					<NaverMapComponent
						zoom={zoom}
						Latitude={lat}
						Longtitude={lng}
						roadAddress={roadAddress}
					/>
				</div>
				<FixedBottomNavigation />
			</NavermapsProvider>
		</div>
	);
};

export default MapScreen;
