import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled, { css } from 'styled-components';

import Loader from '@common/Loader';
import Footer from '@components/layout/components/Footer';
import NavBar from '@components/layout/components/NavBar';

import 'normalize.css';

type ColorType = 'white' | 'lightGrey';

interface RootLayoutProps {
	backgroundColor?: ColorType;
}

export default function RootLayout({ backgroundColor = 'white' }: RootLayoutProps) {
	return (
		<>
			<NavBar />
			<StyledLayout $backgroundColor={backgroundColor}>
				<Suspense fallback={<Loader />}>
					<Outlet />
				</Suspense>
			</StyledLayout>
			<Footer />
		</>
	);
}

interface StyledLayoutProps {
	$backgroundColor?: ColorType;
}

const backgroundStyle = css<StyledLayoutProps>`
	${({ $backgroundColor, theme: { colors } }) => {
		switch ($backgroundColor) {
			case 'white':
				return css`
					background-color: white;
				`;
			case 'lightGrey':
				return css`
					background-color: ${colors.lightGrey};
				`;
		}
	}}
`;

const StyledLayout = styled.main<StyledLayoutProps>`
	width: 100%;
	min-height: calc(100vh - 150px);
	${({ theme }) => theme.common.flexCenterColumn};
	${backgroundStyle}
`;
