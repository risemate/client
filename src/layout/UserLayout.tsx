import { Outlet } from 'react-router-dom';

import GreyLayout from '@common/GreyLayout';
import Footer from '@components/Footer';
import NavBar from '@components/NavBar';

import 'normalize.css';

function UserLayout() {
	return (
		<>
			<NavBar />
			<GreyLayout>
				<Outlet />
			</GreyLayout>
			<Footer />
		</>
	);
}

export default UserLayout;
