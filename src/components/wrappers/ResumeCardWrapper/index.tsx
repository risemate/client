import { ReactNode } from 'react';
import styled from 'styled-components';

import ResumeInfoWrapper from './ResumeInfoWrapper';

interface CardWrapperProps {
	children: ReactNode;
}

const CardWrapper = ({ children }: CardWrapperProps) => {
	return <StyledCardWrapper>{children}</StyledCardWrapper>;
};

const ResumeCardWrapper = Object.assign(CardWrapper, {
	Info: ResumeInfoWrapper,
});

const StyledCardWrapper = styled.div`
	width: 330px;
	height: 100%;
	flex-shrink: 0;
	border: 1px solid ${({ theme }) => theme.colors.grey};
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
