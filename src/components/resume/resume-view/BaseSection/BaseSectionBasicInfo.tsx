import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface BasicInfoProps {
	children: ReactNode;
}

export default function BaseSectionBasicInfo({ children }: BasicInfoProps) {
	return <StyledBasicInfo>{children}</StyledBasicInfo>;
}

const StyledBasicInfo = styled.ul`
	grid-column: 1 / 2;
	color: ${({ theme }) => theme.colors.darkGrey};
	font-size: ${({ theme }) => theme.fontSizes.small};
	li {
		margin-bottom: 5px;
		word-break: break-word;
	}
	a {
		text-decoration: 1px solid underline;
	}
`;
