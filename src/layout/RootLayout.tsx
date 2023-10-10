import { Outlet } from 'react-router-dom';

import NavBar from '@components/NavBar';

import 'normalize.css';

function RootLayout() {
	return (
		<div>
			<NavBar />
			<Outlet />
		</div>
	);
}

export default RootLayout;
