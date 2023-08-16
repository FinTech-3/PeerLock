import {
	BrowserRouter as Router,
	Route,
	Routes as ReactRouterRoutes,
	Navigate,
} from 'react-router-dom';
import HomeHost from './Home/HomeHost';
import HomeGuest from './Home/HomeGuest';
import Chat from './Chat/Chat';
import Wish from './Wish/Wish';
import My from './My/My';
import MapScreen from './Map/MapScreen';
import Storage from './Storage/Storage';
import StorageDetailPage from './Storage/StorageDetailPage';
import Login from './Home/Login';
import StoreagReservationPage from './Storage/StoreagReservationPage';

export const Routes = () => {
	return (
		<Router>
			<ReactRouterRoutes>
				<Route exact path="/" element={<Login />} />
				<Route exact path="/homehost" element={<HomeHost />} />
				<Route exact path="/homeuser" element={<HomeGuest />} />
				<Route exact path="/chat" element={<Chat />} />
				<Route exact path="/map" element={<MapScreen />} />
				<Route exact path="/wish" element={<Wish />} />
				<Route exact path="/my" element={<My />} />
				<Route exact path="/storage" element={<Storage />} />
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/storage/detail/:storageId" element={<StorageDetailPage />} />
				<Route exact path="/storage/reservation/:storageId" element={<StoreagReservationPage />} />
				<Route path="*" element={<Navigate replace to="/" />} />
			</ReactRouterRoutes>
		</Router>
	);
};
