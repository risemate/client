import React from 'react';
import styled from 'styled-components';
import { Resume } from 'types/Resume';

import ResumeNav from '@common/ResumeNav';

import Education from './Education';
import Profile from './Profile';
import Project from './Project';
import WorkExperience from './WorkExperience';
import Activity from './Activity';

interface ResumeViewProps {
	resume: Resume;
	changeMode: (newMode: 'view' | 'edit') => void;
}

export default function ResumeView({ resume, changeMode }: ResumeViewProps) {
	const resumeNavItems = [
		{ name: '이력서 수정', onClick: () => changeMode('edit') },
		{ name: 'AI 첨삭 받기', onClick: () => alert('hi') },
		{ name: '전문가 찾아보기', onClick: () => alert('hi') },
	];
	return (
		<>
			<StyledResume>
				<Profile profile={resume.profile} techStack={resume.techStack} />
				<WorkExperience workExperiences={resume.workExperiences} />
				<Project projects={resume.projects} />
				<Education educations={resume.educations} />
				<Activity activities={resume.activities}/>
			</StyledResume>
			<ResumeNav resumeNavItems={resumeNavItems} />
		</>
	);
}

const StyledResume = styled.div`
	min-height: 500px;
	padding: 50px;
	margin-top: 70px;
	section {
		padding-bottom: 30px;
		&:not(:last-child) {
			border-bottom: 2px solid ${({ theme }) => theme.colors.navy};
		}
		h3 {
			font-weight: bold;
			color: ${({ theme }) => theme.colors.navy};
			font-size: ${({ theme }) => theme.fontSizes.medium};
			padding: 20px 0px;
		}
	}
`;
