import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import NavBar from '@components/NavBar';

import 'normalize.css';

export default function UserLayout({ backgroundColor }: { backgroundColor?: string }) {
	return (
		<>
			<NavBar />
			<StyledLayout style={{ backgroundColor }}>
				<Outlet />
			</StyledLayout>
		</>
	);
}

const StyledLayout = styled.main`
	width: 100%;
	${({ theme }) => theme.common.flexCenterColumn};
	min-height: calc(100vh - 75px);
	background: ${({ theme }) => theme.colors.lightGrey};
	gap: 10px;
	padding: 32px 32px 100px;
	& > div,
	& > section,
	& > form > section {
		width: 100%;
		max-width: calc(${({ theme }) => theme.widths.maxWidth} - 64px);
		min-width: calc(${({ theme }) => theme.widths.minWidth} - 64px);
		&:not(:last-child) {
			margin-bottom: 30px;
		}
		border-radius: 40px;
		background: white;
		box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
		&.border {
			border: 1px solid ${({ theme }) => theme.colors.navy};
		}
	}
	& > section {
		min-width: 800px;
	}
`;
