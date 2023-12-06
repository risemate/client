import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Footer from '@components/Footer';
import NavBar from '@components/NavBar';

import 'normalize.css';

export default function UserLayout({ backgroundColor }: { backgroundColor?: string }) {
	return (
		<>
			<NavBar />
			<StyledLayout style={{ backgroundColor }}>
				<Outlet />
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
	gap: 10px;
	padding: 100px 32px 100px;
	/* margin-top: 75px; */
	& > div,
	& > section,
	& > form > section {
		width: 100%;
		max-width: calc(${({ theme }) => theme.widths.maxWidth} - 64px);
		min-width: calc(${({ theme }) => theme.widths.minWidth} - 64px);
		&:not(:last-child) {
			margin-bottom: 30px;
		}
		${({ theme }) => theme.style.whiteBox};
		&.border {
			border: 1px solid ${({ theme }) => theme.colors.navy};
		}
	}
	& > section {
		min-width: 800px;
	}
`;
