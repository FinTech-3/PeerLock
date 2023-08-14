import './styles/app.scss';
import GlobalStyles from './GlobalStyles';
import { Routes } from './pages/Routes';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Layout({ children }) {
	return (
		<div
			css={css`
				width: 100%;
				max-width: 1200px;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: auto;
				overflow-y: auto;
				// display: flex;
				// flex-direction: column;
				// justify-content: flex-start;
				// align-items: flex-start;
			`}
		>
			{children}
		</div>
	);
}
function App() {
	return (
		<>
			<GlobalStyles />
			<Layout>
				<Routes />
			</Layout>
		</>
	);
}

export default App;
