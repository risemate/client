import { ReactNode } from 'react';
import styled from 'styled-components';

interface TitleProps {
	children: ReactNode;
}

export default function BaseSectionTitle({ children }: TitleProps) {
	return <StyledTitle>{children}</StyledTitle>;
}

const StyledTitle = styled.h4`
	font-weight: bold;
	font-size: ${({ theme }) => theme.fontSizes.medium};
	grid-column: 1 / 2;
	margin-bottom: 10px;
	padding-right: 40px;
	word-break: keep-all;
	line-height: 30px;
`;
