import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled, { css } from 'styled-components';

import Loader from '@common/Loader';
import Footer from '@components/layout/components/Footer';
import NavBar from '@components/layout/components/NavBar';

import 'normalize.css';

type ColorType = 'white' | 'lightGrey';

interface UserLayoutProps {
	backgroundColor: ColorType;
}

export default function UserLayout({ backgroundColor = 'white' }: UserLayoutProps) {
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
	$backgroundColor: ColorType;
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

const StyledLayout = styled.div<StyledLayoutProps>`
	width: 100%;
	${({ theme }) => theme.common.flexCenterColumn};
	min-height: calc(100vh - 150px);
	padding: 150px 32px 60px;
	gap: 20px;
	${backgroundStyle}
`;
