import { ReactNode } from 'react';
import styled, { CSSProp, css } from 'styled-components';

interface WhiteBoxWrapperProps {
	type: 'div' | 'section' | 'article';
	children: ReactNode;
	customCss?: CSSProp;
	docTitle?: string;
}

export default function WhiteBoxWrapper({
	type,
	children,
	customCss,
	docTitle,
}: WhiteBoxWrapperProps) {
	return (
		<>
			{type === 'div' && (
				<WhiteBoxDiv $customCss={customCss}>
					<DocTitleStyle>{docTitle}</DocTitleStyle>
					{children}
				</WhiteBoxDiv>
			)}
			{type === 'section' && (
				<WhiteBoxSection $customCss={customCss}>
					<DocTitleStyle>{docTitle}</DocTitleStyle>
					{children}
				</WhiteBoxSection>
			)}
			{type === 'article' && (
				<WhiteBoxArticle $customCss={customCss}>
					<DocTitleStyle>{docTitle}</DocTitleStyle>
					{children}
				</WhiteBoxArticle>
			)}
		</>
	);
}

interface StyledBoxProps {
	$customCss?: CSSProp;
}

const DocTitleStyle = styled.h4`
	position: absolute;
	left: 50px;
	top: -60px;
	font-size: ${({ theme }) => theme.fontSizes.medium};
	padding: 20px 0;
	word-break: keep-all;
	line-height: 30px;
	font-style: italic;
`;
const commonStyle = css<StyledBoxProps>`
	position: relative;
	width: 100%;
	max-width: calc(${({ theme }) => theme.widths.maxWidth} - 64px);
	min-width: calc(${({ theme }) => theme.widths.minWidth} - 64px);
	border-radius: 40px;
	background: white;
	overflow-y: auto;
	max-height: 100%;
	${({ $customCss }) => $customCss && $customCss} &.border {
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
