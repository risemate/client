import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface TaskProps {
	children: ReactNode;
}

export default function BaseSectionTask({ children }: TaskProps) {
	return <StyledTask>{children}</StyledTask>;
}

const StyledTask = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 3px;
	li {
		color: black;
		word-break: keep-all;
		position: relative;
		font-size: ${({ theme }) => theme.fontSizes.default};
		line-height: 20px;
	}
	li:not(.summary) {
		padding-left: 15px;
		&:before {
			content: '';
			display: inline-block;
			position: absolute;
			left: 0;
			top: 4px;
			width: 6px;
			height: 6px;
			background: black;
			border-radius: 50%;
		}
	}
`;
