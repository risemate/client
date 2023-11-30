import React, { ReactNode } from 'react';
import styled from 'styled-components';

import BaseSectionBasicInfo from './BaseSectionBasicInfo';
import BaseSectionLink from './BaseSectionLink';
import BaseSectionTask from './BaseSectionTask';
import BaseSectionTitle from './BaseSectionTitle';

interface BaseSectionProps {
	children: ReactNode;
}

const BaseSectionMain = ({ children }: BaseSectionProps) => {
	return <StyledSection>{children}</StyledSection>;
};

const BaseSection = Object.assign(BaseSectionMain, {
	Title: BaseSectionTitle,
	BasicInfo: BaseSectionBasicInfo,
	Task: BaseSectionTask,
	Link: BaseSectionLink,
});

const StyledSection = styled.section`
	& > article {
		padding: 20px 5px 0;
		display: grid;
		grid-template-columns: 1fr 3fr;
		&:not(:last-child) {
			border-bottom: 0.5px solid ${({ theme }) => theme.colors.grey};
			padding-bottom: 20px;
		}
		& > div {
			grid-column: 2 / 3;
			grid-row: 1 / 3;
		}
	}
`;

export default BaseSection;
