import { Outlet } from 'react-router-dom';

import GreyLayout from '@common/GreyLayout';
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
