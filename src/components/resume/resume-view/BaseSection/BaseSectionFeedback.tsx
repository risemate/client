import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface FeedbackProps {
	children: ReactNode;
}

export default function BaseSectionFeedback({ children }: FeedbackProps) {
	return <StyledFeedback>{children}</StyledFeedback>;
}

const StyledFeedback = styled.ul`
	padding: 10px;
	margin-bottom: 30px;
	background: ${({ theme }) => theme.colors.lighterGrey};
	border-radius: 5px;
	color: ${({ theme }) => theme.colors.darkerGrey};
	line-height: 25px;
	h3 {
		font-weight: bold;
		padding-bottom: 10px;
	}
`;
