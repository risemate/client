import { Outlet } from 'react-router-dom';

import Footer from '@components/Footer';
import NavBar from '@components/NavBar';

import 'normalize.css';

function RootLayout() {
	return (
		<>
			<NavBar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}

export default RootLayout;
