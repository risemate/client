import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface BaseSectionProps {
	children: ReactNode;
}

export default function BaseSection({ children }: BaseSectionProps) {
	return <StyledSection>{children}</StyledSection>;
}

const StyledSection = styled.section`
	padding: 40px;
	& > div:not(:first-child) {
		position: relative;
		h4 {
			color: ${({ theme }) => theme.colors.navy};
			font-weight: bold;
			margin-bottom: 20px;
		}
		& > ul {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 20px;
			li:nth-last-child(2),
			:last-child {
				grid-column: 1 / 4;
			}
		}
		& > button {
			width: 30px;
			height: 30px;
			border: 0.5px solid ${({ theme }) => theme.colors.grey};
			padding: 6px 5px;
			border-radius: 5px;
			background: white;
			position: absolute;
			top: 0;
			right: 0;
			&:hover {
				filter: brightness(0.95);
			}
			svg {
				color: ${({ theme }) => theme.colors.grey};
			}
		}
	}
	& > div:not(:last-child) {
		margin-bottom: 30px;
		padding-bottom: 30px;
		border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
	}
	& > div:first-child {
		border-bottom: 2px solid ${({ theme }) => theme.colors.navy};
		display: flex;
		gap: 30px;
		justify-content: space-between;
		align-items: end;
		padding-bottom: 10px;
		margin-bottom: 20px;
		h3 {
			color: ${({ theme }) => theme.colors.navy};
			font-weight: bold;
			font-size: ${({ theme }) => theme.fontSizes.medium};
		}
		button {
			svg {
				color: ${({ theme }) => theme.colors.navy};
			}
		}
	}
`;
