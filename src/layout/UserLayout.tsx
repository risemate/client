import GreyLayout from 'layout/GreyLayout';
import { Outlet } from 'react-router-dom';

import NavBar from '@components/NavBar';

import 'normalize.css';

function UserLayout() {
	return (
		<>
			<NavBar />
			<GreyLayout>
				<Outlet />
			</GreyLayout>
		</>
	);
}

export default UserLayout;
