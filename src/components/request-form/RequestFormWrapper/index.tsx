import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import WhiteBoxWrapper from '@components/base-wrappers/WhiteBoxWrapper';

import RequestFormConsent from './RequestFormConsent';
import RequestFormMessage from './RequestFormMessage';
import RequestFormNote from './RequestFormNote';

interface RequestFormWrapperProps {
	title: string;
	children: ReactNode;
}

const RequestFormWrapper = ({ title, children }: RequestFormWrapperProps) => {
	return (
		<WhiteBoxWrapper type='div' customCss={whiteBoxStyle}>
			<TitleHeader>{title}</TitleHeader>
			<main>{children}</main>
		</WhiteBoxWrapper>
	);
};

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

const RequestForm = Object.assign(RequestFormWrapper, {
	Consent: RequestFormConsent,
	Message: RequestFormMessage,
	Note: RequestFormNote,
});

export default RequestForm;
