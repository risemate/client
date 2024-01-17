import React, { ReactNode } from 'react';
import styled, { CSSProp, css } from 'styled-components';

interface WhiteBoxWrapperProps {
	type: 'div' | 'section';
	children: ReactNode;
	customCss?: CSSProp;
}

export default function WhiteBoxWrapper({
	type,
	children,
	customCss,
}: WhiteBoxWrapperProps) {
	return (
		<>
			{type === 'div' && <WhiteBoxDiv $customCss={customCss}>{children}</WhiteBoxDiv>}
			{type === 'section' && (
				<WhiteBoxSection $customCss={customCss}>{children}</WhiteBoxSection>
			)}
		</>
	);
}

interface StyledBoxProps {
	$customCss?: CSSProp;
}

const commonStyle = css<StyledBoxProps>`
	width: 100%;
	max-width: calc(${({ theme }) => theme.widths.maxWidth} - 64px);
	min-width: calc(${({ theme }) => theme.widths.minWidth} - 64px);
	border-radius: 40px;
	background: white;
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
	${({ $customCss }) => $customCss && $customCss}
	&.border {
		border: 1px solid ${({ theme }) => theme.colors.navy};
	}
`;

const WhiteBoxDiv = styled.div<StyledBoxProps>`
	${commonStyle}
`;

const WhiteBoxSection = styled.section<StyledBoxProps>`
	${commonStyle}
	min-width: 800px;
	&:not(:last-child) {
		margin-bottom: 30px;
	}
`;
