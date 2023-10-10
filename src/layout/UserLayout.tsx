import { Outlet } from 'react-router-dom';

import 'normalize.css';

function UserLayout() {
	return (
		<div>
			<div>User Nav?</div>
			<Outlet />
		</div>
	);
}

export default UserLayout;
