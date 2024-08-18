import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Toast from '@common/Toast';
import SingleAsyncWrapper from '@components/async-wrapper/SingleAsyncWrapper';

import 'normalize.css';

export default function FormLayout() {
	return (
		<FormLayoutWrapper>
			<SingleAsyncWrapper>
				<Outlet />
			</SingleAsyncWrapper>
			<Toast />
		</FormLayoutWrapper>
	);
}

const FormLayoutWrapper = styled.div`
	width: 100%;
	/* height: 100vh; */
	padding: 60px;
	background-color: ${({ theme }) => theme.colors.lightGrey};
	${({ theme }) => theme.common.flexCenter};
`;
