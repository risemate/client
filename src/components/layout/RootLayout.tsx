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
	center?: boolean;
	defaultPadding?: boolean;
}

export default function RootLayout({
	backgroundColor = 'white',
	center = false,
	defaultPadding = false,
}: RootLayoutProps) {
	return (
		<>
			<NavBar />
			<StyledLayout
				$backgroundColor={backgroundColor}
				$center={center}
				$defaultPadding={defaultPadding}
			>
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
	$center?: boolean;
	$defaultPadding?: boolean;
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
	${({ theme, $center }) => $center && theme.common.flexCenterColumn};
	${({ $defaultPadding }) => $defaultPadding && 'padding: 80px 32px 0'};
	${backgroundStyle}
`;
