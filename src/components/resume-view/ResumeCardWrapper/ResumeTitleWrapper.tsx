import { formatDate } from '@utils/helpers';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface TitleWrapperProps {
	children: ReactNode;
	time?: string;
}

export default function ResumeTitleWrapper({ children, time }: TitleWrapperProps) {
	return (
		<StyledTitleWrapper>
			<h4>{children}</h4>
			{time && <time dateTime={formatDate(time).dash}>{time}</time>}
		</StyledTitleWrapper>
	);
}

const StyledTitleWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
	h4 {
		${({ theme }) => theme.common.ellipsisOneLine};
		span {
			font-size: ${({ theme }) => theme.fontSizes.small};
		}
	}
	time {
		font-size: ${({ theme }) => theme.fontSizes.small};
		color: ${({ theme }) => theme.colors.darkGrey};
	}
`;
