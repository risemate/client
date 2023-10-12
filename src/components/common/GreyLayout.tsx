import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface GreyLayoutProps {
	children: ReactNode;
}

export default function GreyLayout({ children }: GreyLayoutProps) {
	return <StyledLayout>{children}</StyledLayout>;
}

const headingStyle = css`
	h2 {
		font-size: ${({ theme }) => theme.fontSizes.large};
		font-weight: bold;
		padding-bottom: 20px;
		border-bottom: 2px solid ${({ theme }) => theme.colors.black};
	}
	h3 {
		color: ${({ theme }) => theme.colors.navy};
		font-weight: bold;
		font-size: ${({ theme }) => theme.fontSizes.medium};
	}
	h2.underline {
		padding-bottom: 10px;
		border-bottom: 2px solid ${({ theme }) => theme.colors.navy};
	}
`;

const StyledLayout = styled.main`
	width: 100%;
	min-height: calc(100vh - 75px);
	background: ${({ theme }) => theme.colors.lightGrey};
	padding: 32px;
	& > div {
		${({ theme }) => theme.common.minmaxWidth};
		max-width: 1136px;
		padding: 30px;
		margin: auto;
		&:not(:last-child) {
			margin-bottom: 30px;
		}
		border-radius: 40px;
		background: ${({ theme }) => theme.colors.white};
		box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
		&.border {
			border: 1px solid ${({ theme }) => theme.colors.navy};
		}
		${headingStyle}
	}
`;
