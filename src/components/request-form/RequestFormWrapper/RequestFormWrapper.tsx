import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import WhiteBoxWrapper from '@components/base-wrappers/WhiteBoxWrapper';

import RequestFormAction from './RequestFormAction';
import RequestFormConsent from './RequestFormConsent';
import RequestFormContent from './RequestFormContent';
import RequestFormMessage from './RequestFormMessage';
import RequestFormNote from './RequestFormNote';

interface RequestFormWrapperProps {
	title: string;
	children: ReactNode;
	onSubmit: () => void;
}

const RequestFormWrapperMain = ({
	title,
	children,
	onSubmit,
}: RequestFormWrapperProps) => {
	return (
		<WhiteBoxWrapper type='div' customCss={whiteBoxStyle}>
			<TitleHeader>
				<h1>{title}</h1>
			</TitleHeader>
			<main>
				<form onSubmit={onSubmit}>{children}</form>
			</main>
		</WhiteBoxWrapper>
	);
};

const whiteBoxStyle = css`
	padding: 60px;
	section {
		padding-top: 30px;
		& > h2 {
			font-size: ${({ theme }) => theme.fontSizes.medium};
			color: ${({ theme }) => theme.colors.navy};
			padding-bottom: 20px;
			font-weight: 700;
		}
	}
`;

const TitleHeader = styled.header`
	border-bottom: 3px solid ${({ theme }) => theme.colors.navy};
	padding-bottom: 30px;
	h1 {
		font-size: ${({ theme }) => theme.fontSizes.large};
		font-weight: 700;
	}
`;

const RequestFormWrapper = Object.assign(RequestFormWrapperMain, {
	Consent: RequestFormConsent,
	Message: RequestFormMessage,
	Note: RequestFormNote,
	Action: RequestFormAction,
	Content: RequestFormContent,
});

export default RequestFormWrapper;
