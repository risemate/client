import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Footer from '@components/layout/components/Footer';
import NavBar from '@components/layout/components/NavBar';

import 'normalize.css';

function RootLayout() {
	return (
		<>
			<NavBar />
			<StyledLayout>
				<Outlet />
			</StyledLayout>
			<Footer />
		</>
	);
}

const StyledLayout = styled.main`
	& > div {
		${({ theme }) => theme.common.minmaxWidth}
	}
`;

export default RootLayout;