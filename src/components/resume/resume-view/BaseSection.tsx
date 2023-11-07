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
		line-height: 30px;
	}
	a {
		transition: 0.5s all;
		&:hover {
			filter: brightness(0.9);
		}
	}
	ul:nth-of-type(1) {
		grid-column: 1 / 2;
		color: ${({ theme }) => theme.colors.darkGrey};
		font-size: ${({ theme }) => theme.fontSizes.small};
		li {
			margin-bottom: 5px;
			word-break: break-word;
		}
	}
	.list-task {
		display: flex;
		flex-direction: column;
		gap: 3px;
		li {
			color: black;
			word-break: keep-all;
			position: relative;
			font-size: ${({ theme }) => theme.fontSizes.default};
			line-height: 20px;
		}
		li:not(.summary) {
			padding-left: 15px;
			&:before {
				content: '';
				display: inline-block;
				position: absolute;
				left: 0;
				top: 4px;
				width: 6px;
				height: 6px;
				background: black;
				border-radius: 50%;
			}
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
