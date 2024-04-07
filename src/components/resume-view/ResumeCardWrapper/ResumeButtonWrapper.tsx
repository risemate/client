import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ResumeButtonWrapperProps {
	children: ReactNode;
}

export default function ResumeButtonWrapper({ children }: ResumeButtonWrapperProps) {
	return <ButtonWrapper>{children}</ButtonWrapper>;
}

const ButtonWrapper = styled.div`
	display: flex;
	gap: 10px;
	width: 100%;
`;
