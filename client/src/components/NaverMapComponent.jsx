import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container as MapDiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps';

const NaverMapComponent = ({ storageList }) => {
	const navermaps = useNavermaps();
	return (
		<MapDiv
			style={{
				width: '100%',
				height: '900px',
			}}
		>
			<NaverMap defaultCenter={new navermaps.LatLng(37.5234935, 126.9284844)} defaultZoom={15}>
				{storageList.map((storage, index) => (
					<Marker
						key={index}
						defaultPosition={
							new navermaps.LatLng(storage.storageLatitude, storage.storageLongitude)
						}
					/>
				))}
			</NaverMap>
		</MapDiv>
	);
};

export default NaverMapComponent;
