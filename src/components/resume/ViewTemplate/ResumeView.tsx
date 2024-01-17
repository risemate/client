import { css } from 'styled-components';
import { Resume as ResumeType } from 'types/Resume';

import WhiteBoxWrapper from '@components/wrappers/WhiteBoxWrapper';

import Activity from './Activity';
import Certificate from './Certificate';
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
			<Profile 
				profile={career.profile}
				techStack={career.techStack}
				description={career.description}
			/>
			{career.workExperiences && (
				<WorkExperience workExperiences={career.workExperiences} />
			)}
			{career.projects && <Project projects={career.projects} />}
			{career.educations && <Education educations={career.educations} />}
			{career.activities && <Activity activities={career.activities} />}
			{career.certificates && <Certificate certificates={career.certificates} />}
		</WhiteBoxWrapper>
	);
}

const resumeWrapperStyle = css`
	min-height: 500px;
	padding: 50px;
	margin: 70px auto;
	& > section {
		padding-bottom: 30px;
		&:not(:last-child) {
			border-bottom: 2px solid ${({ theme }) => theme.colors.navy};
		}
	}
`;
