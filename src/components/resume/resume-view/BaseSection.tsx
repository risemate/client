import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface BaseSectionProps {
	children: ReactNode;
}

export default function BaseSection({ children }: BaseSectionProps) {
	return <StyledSection>{children}</StyledSection>;
}

const StyledSection = styled.section`
	& > article {
		padding: 20px 5px 0;
		display: grid;
		grid-template-columns: 1fr 3fr;
		&:not(:last-child) {
			border-bottom: 0.5px solid ${({ theme }) => theme.colors.grey};
			padding-bottom: 20px;
		}
		& > div {
			grid-column: 2 / 3;
			grid-row: 1 / 3;
		}
	}
	h4 {
		font-weight: bold;
		font-size: ${({ theme }) => theme.fontSizes.medium};
		grid-column: 1 / 2;
		margin-bottom: 10px;
		word-break: keep-all;
	}
	ul:nth-of-type(1) {
		grid-column: 1 / 2;
		color: ${({ theme }) => theme.colors.darkGrey};
		li {
			margin-bottom: 3px;
		}
	}
	.list-task {
		display: flex;
		flex-direction: column;
		gap: 3px;
		li {
			word-break: keep-all;
		}
	}
	.list-link {
		display: flex;
		gap: 10px;
		margin-top: 10px;
		a {
			font-size: ${({ theme }) => theme.fontSizes.small};
			padding: 5px 10px;
			background: ${({ theme }) => theme.colors.blue};
			color: white;
			border-radius: 10px;
		}
	}
`;
