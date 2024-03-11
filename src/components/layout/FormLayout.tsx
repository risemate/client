import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import 'normalize.css';

export default function FormLayout() {
	return (
		<FormLayoutWrapper>
			<Outlet />
		</FormLayoutWrapper>
	);
}

const FormLayoutWrapper = styled.div`
	width: 100%;
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.grey};
	${({ theme }) => theme.common.flexCenter};
`;
