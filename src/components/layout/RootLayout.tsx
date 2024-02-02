import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Loader from '@common/Loader';
import Footer from '@components/layout/components/Footer';
import NavBar from '@components/layout/components/NavBar';

import 'normalize.css';

export default function RootLayout() {
	return (
		<>
			<NavBar />
			<div className='nav-area' />

			<Suspense fallback={<Loader />}>
				<Outlet />
			</Suspense>

			<Footer />
		</>
	);
}

const StyledLayout = styled.main`
	width: 100%;
	height: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
