import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Toast from '@common/Toast';
import Footer from '@components/layout/components/Footer';
import NavBar from '@components/layout/components/NavBar';
import GlobalAsyncWrapper from '@components/suspense/async-wrapper/GlobalAsyncWrapper';
import SingleAsyncWrapper from '@components/suspense/async-wrapper/SingleAsyncWrapper';

import 'normalize.css';

export default function RootLayout() {
	return (
		<GlobalAsyncWrapper>
			<NavBar />
			<NavSpace />
			<SingleAsyncWrapper>
				<Outlet />
			</SingleAsyncWrapper>
			<Toast />
			<Footer />
		</GlobalAsyncWrapper>
	);
}

const NavSpace = styled.div`
	width: 100%;
	height: 76px;
`;
