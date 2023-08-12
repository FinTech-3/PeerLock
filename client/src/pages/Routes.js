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

export const Routes = () => {
	return (
		<Router>
			<ReactRouterRoutes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/chat" element={<Chat />} />
				<Route exact path="/map" element={<MapScreen />} />
				<Route exact path="/wish" element={<Wish />} />
				<Route exact path="/my" element={<My />} />
				<Route path="*" element={<Navigate replace to="/" />} />
			</ReactRouterRoutes>
		</Router>
	);
};
