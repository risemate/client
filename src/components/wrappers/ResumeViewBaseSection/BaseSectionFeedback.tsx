import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface FeedbackProps {
	children: ReactNode;
}

export default function BaseSectionFeedback({ children }: FeedbackProps) {
	return <FeebackWrapper>{children}</FeebackWrapper>;
}

const FeebackWrapper = styled.div`
	padding: 10px;
	margin-bottom: 30px;
	background: ${({ theme }) => theme.colors.lighterGrey};
	border-radius: 5px;
	color: ${({ theme }) => theme.colors.darkerGrey};
	line-height: 25px;
	grid-column: 1 / 3;
	word-break: break-all;
	h4 {
		font-weight: bold;
		padding-bottom: 10px;
	}
`;
