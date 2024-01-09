import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Loader from '@common/Loader';
import Footer from '@components/layout/components/Footer';
import NavBar from '@components/layout/components/NavBar';

import 'normalize.css';

export default function RootLayout({ backgroundColor }: { backgroundColor?: string }) {
	return (
		<>
			<NavBar />
			<StyledLayout style={{ backgroundColor }}>
				<Suspense fallback={<Loader />}>
					<Outlet />
				</Suspense>
			</StyledLayout>
			<Footer />
		</>
	);
}

const StyledLayout = styled.main`
	width: 100%;
	${({ theme }) => theme.common.flexCenterColumn};
	min-height: calc(100vh - 150px);
	background: ${({ theme }) => theme.colors.lightGrey};
`;
