// import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// import Loader from '@common/Loader';
import SingleAsyncWrapper from '@components/async-wrapper/SingleAsyncWrapper';
import Footer from '@components/layout/components/Footer';
import NavBar from '@components/layout/components/NavBar';

import 'normalize.css';

export default function RootLayout() {
	return (
		<>
			<NavBar />
			{/* <div className='nav-area' /> */}

			{/* <Suspense fallback={<Loader />}> */}
			<SingleAsyncWrapper>
				<Outlet />
			</SingleAsyncWrapper>
			{/* </Suspense> */}

			<Footer />
		</>
	);
}
