import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface RequestFormActionProps {
	children: ReactNode;
}

export default function RequestFormAction({ children }: RequestFormActionProps) {
	return <ActionWrapper>{children}</ActionWrapper>;
}

const ActionWrapper = styled.div`
	${({ theme }) => theme.common.flexCenter};
	padding-top: 50px;
`;
