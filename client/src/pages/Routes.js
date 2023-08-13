import {
	BrowserRouter as Router,
	Route,
	Routes as ReactRouterRoutes,
	Navigate,
} from 'react-router-dom';
import Home from './Home/Home';
import Chat from './Chat/Chat';
import Wish from './Wish/Wish';
import My from './My/My';
import MapScreen from './Map/MapScreen';
import Storage from './Storage/Storage';
import StorageDetailPage from './Storage/StorageDetailPage';

export const Routes = () => {
	return (
		<Router>
			<ReactRouterRoutes>
				<Route exact path="/" element={<Storage />} />
				<Route exact path="/chat" element={<Chat />} />
				<Route exact path="/map" element={<MapScreen />} />
				<Route exact path="/wish" element={<Wish />} />
				<Route exact path="/my" element={<My />} />
				<Route exac path="/storage" element={<Storage />} />
				<Route exac path="/storage-detail/:storageId" element={<StorageDetailPage />} />
				<Route path="*" element={<Navigate replace to="/" />} />
			</ReactRouterRoutes>
		</Router>
	);
};
