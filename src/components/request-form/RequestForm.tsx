import React from 'react';
import styled, { css } from 'styled-components';

import WhiteBoxWrapper from '@components/base-wrappers/WhiteBoxWrapper';

interface FormBaseProps {
	title: string;
	consentText?: string;
	extraMessege?: string;
	extraNote?: string[];
	onSubmitForm: () => void;
}

export default function FormBase({
	title,
	consentText,
	extraMessege,
	extraNote,
	onSubmitForm,
}: FormBaseProps) {
	return (
		<WhiteBoxWrapper type='div' customCss={whiteBoxStyle}>
			<TitleHeader>
				<h1>{title}</h1>
			</TitleHeader>
			<main>
				<form></form>
			</main>
		</WhiteBoxWrapper>
	);
}

const whiteBoxStyle = css`
	padding: 60px;
`;

const TitleHeader = styled.header`
	border-bottom: 2px solid ${({ theme }) => theme.colors.navy};
	padding-bottom: 30px;
	h1 {
		font-size: ${({ theme }) => theme.fontSizes.large};
	}
`;
