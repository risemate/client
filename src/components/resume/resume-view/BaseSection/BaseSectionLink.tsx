import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface LinkProps {
	children: ReactNode;
}

export default function BaseSectionLink({ children }: LinkProps) {
	return <StyledLink>{children}</StyledLink>;
}

const StyledLink = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 15px;
	grid-column: 2 / 3;
	a {
		font-size: ${({ theme }) => theme.fontSizes.small};
		padding: 7px 10px;
		background: ${({ theme }) => theme.colors.blue};
		color: white;
		border-radius: 10px;
	}
`;
