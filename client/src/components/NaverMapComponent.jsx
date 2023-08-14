import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container as MapDiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps';

const NaverMapComponent = () => {
	const navermaps = useNavermaps();
	const [storage, setStorage] = useState([]);
	return (
		<MapDiv
			style={{
				width: '100%',
				height: '900px',
			}}
		>
			<NaverMap defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)} defaultZoom={15}>
				<Marker defaultPosition={new navermaps.LatLng(37.3595704, 127.105399)} />
			</NaverMap>
		</MapDiv>
	);
};

export default NaverMapComponent;
