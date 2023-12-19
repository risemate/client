import React, { ReactNode } from 'react';
import styled from 'styled-components';

import BaseSectionBasicInfo from './BaseSectionBasicInfo';
import BaseSectionFeedback from './BaseSectionFeedback';
import BaseSectionLink from './BaseSectionLink';
import BaseSectionMainTitle from './BaseSectionMainTitle';
import BaseSectionTask from './BaseSectionTask';
import BaseSectionTitle from './BaseSectionTitle';

interface BaseSectionProps {
	children: ReactNode;
}

const BaseSection = ({ children }: BaseSectionProps) => {
	return <ResumeViewSection>{children}</ResumeViewSection>;
};

const ResumeViewBaseSection = Object.assign(BaseSection, {
	MainTitle: BaseSectionMainTitle,
	Title: BaseSectionTitle,
	BasicInfo: BaseSectionBasicInfo,
	Task: BaseSectionTask,
	Link: BaseSectionLink,
	Feedback: BaseSectionFeedback,
});

const ResumeViewSection = styled.section`
	& > article {
		padding: 20px 5px 0;
		display: grid;
		grid-template-columns: 250px auto;
		&:not(:last-child) {
			border-bottom: 0.5px solid ${({ theme }) => theme.colors.grey};
			padding-bottom: 20px;
		}
	}
`;

export default ResumeViewBaseSection;
