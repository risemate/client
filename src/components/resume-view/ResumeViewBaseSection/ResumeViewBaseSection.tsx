import { ReactNode } from 'react';
import styled from 'styled-components';

import BaseSectionBasicInfo from './BaseSectionBasicInfo';
import BaseSectionDescription from './BaseSectionDescription';
import BaseSectionFeedback from './BaseSectionFeedback';
import BaseSectionLink from './BaseSectionLink';
import BaseSectionMainTitle from './BaseSectionMainTitle';
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
	Description: BaseSectionDescription,
	Link: BaseSectionLink,
	Feedback: BaseSectionFeedback,
});

const ResumeViewSection = styled.section`
	& > article {
		padding: 20px 5px 0;
		display: grid;
		grid-template-columns: 250px auto;
		grid-template-rows: fit-content(100%) 1fr;
		&:not(:last-child) {
			border-bottom: 0.5px solid ${({ theme }) => theme.colors.grey};
			padding-bottom: 20px;
		}
		& > label {
			grid-column: 1 / 3;
		}
	}
`;

export default ResumeViewBaseSection;
