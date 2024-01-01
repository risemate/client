import { css } from 'styled-components';
import { Resume as ResumeType } from 'types/Resume';

import WhiteBoxWrapper from '@components/wrappers/WhiteBoxWrapper';

import Activity from './Activity';
import Education from './Education';
import Profile from './Profile';
import Project from './Project';
import WorkExperience from './WorkExperience';

interface ResumeViewProps {
	career: ResumeType;
}

export default function ResumeTemplate({ career }: ResumeViewProps) {
	return (
		<WhiteBoxWrapper type='div' customCss={resumeWrapperStyle}>
			<Profile profile={career.profile} techStack={career.techStack} />
			<WorkExperience workExperiences={career.workExperiences} />
			<Project projects={career.projects} />
			<Education educations={career.educations} />
			<Activity activities={career.activities} />
		</WhiteBoxWrapper>
	);
}

const resumeWrapperStyle = css`
	min-height: 500px;
	padding: 50px;
	margin-top: 70px;
	& > section {
		padding-bottom: 30px;
		&:not(:last-child) {
			border-bottom: 2px solid ${({ theme }) => theme.colors.navy};
		}
	}
`;
