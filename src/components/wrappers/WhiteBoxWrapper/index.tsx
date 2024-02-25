import React, { ReactNode } from 'react';
import styled, { CSSProp, css } from 'styled-components';

interface WhiteBoxWrapperProps {
	type: 'div' | 'section' | 'article';
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
			{type === 'article' && (
				<WhiteBoxArticle $customCss={customCss}>{children}</WhiteBoxArticle>
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

const WhiteBoxArticle = styled.article<StyledBoxProps>`
	${commonStyle}
`;
