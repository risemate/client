import { ReactNode } from 'react';
import styled from 'styled-components';

import ResumeButtonWrapper from './ResumeButtonWrapper';
import ResumeTitleWrapper from './ResumeTitleWrapper';

interface CardWrapperProps {
	children: ReactNode;
	selected?: boolean;
}

const CardWrapper = ({ children, selected = false }: CardWrapperProps) => {
	return <StyledCardWrapper $selected={selected}>{children}</StyledCardWrapper>;
};

const ResumeCardWrapper = Object.assign(CardWrapper, {
	Title: ResumeTitleWrapper,
	ButtonWrapper: ResumeButtonWrapper,
});

const StyledCardWrapper = styled.div<{ $selected: boolean }>`
	width: 330px;
	height: 100%;
	flex-shrink: 0;
	border: 1px solid ${({ theme }) => theme.colors.grey};
	${({ $selected, theme }) =>
		$selected && `box-shadow: 0 0 0 2px inset ${theme.colors.navy}`};
	border-radius: 10px;
	background: white;
	padding: 20px;
	${({ theme }) => theme.common.flexCenterColumn};
	justify-content: space-between;
	gap: 10px;
	position: relative;
	overflow: hidden;
	p {
		font-size: ${({ theme }) => theme.fontSizes.small};
		color: ${({ theme }) => theme.colors.darkGrey};
		padding: 13.2px;
	}
`;

export default ResumeCardWrapper;
