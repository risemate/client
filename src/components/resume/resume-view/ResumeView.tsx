import React from 'react';
import styled from 'styled-components';
import { Feedback as FeedbackType, Resume as ResumeType } from 'types/Resume';

import ResumeNav from '@common/ResumeNav';

import Activity from './Activity';
import Education from './Education';
import Profile from './Profile';
import Project from './Project';
import WorkExperience from './WorkExperience';

interface ResumeViewProps {
	resume: ResumeType;
	feedback?: FeedbackType;
	changeMode: (newMode: 'view' | 'edit') => void;
}

export default function ResumeView({ resume, feedback, changeMode }: ResumeViewProps) {
	const resumeNavItems = [
		{ name: '이력서 수정', onClick: () => changeMode('edit') },
		{ name: 'AI 첨삭 받기', onClick: () => alert('hi') },
		{ name: '전문가 찾아보기', onClick: () => alert('hi') },
	];
	return (
		<>
			<StyledResume>
				{feedback && (
					<StyledFeedback>
						<div>{feedback.notice}</div>
						<h3>전체적인 피드백</h3>
						<p>{feedback.total}</p>
					</StyledFeedback>
				)}
				<Profile profile={resume.profile} techStack={resume.techStack} />
				<WorkExperience
					workExperiences={resume.workExperiences}
					feedback={feedback?.workExperience}
				/>
				<Project projects={resume.projects} feedback={feedback?.project} />
				<Education educations={resume.educations} feedback={feedback?.education} />
				<Activity activities={resume.activities} feedback={feedback?.activity} />
			</StyledResume>
			{!feedback && <ResumeNav resumeNavItems={resumeNavItems} />}
		</>
	);
}

const StyledFeedback = styled.div`
	padding: 10px;
	margin-bottom: 30px;
	background: ${({ theme }) => theme.colors.lighterGrey};
	border-radius: 5px;
	color: ${({ theme }) => theme.colors.darkerGrey};
	line-height: 25px;
	& > div {
		border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
		padding-bottom: 10px;
		margin-bottom: 10px;
	}
	h3 {
		font-weight: bold;
		padding-bottom: 10px;
	}
`;

const StyledResume = styled.div`
	min-height: 500px;
	padding: 50px;
	margin-top: 70px;
	section {
		padding-bottom: 30px;
		&:not(:last-child) {
			border-bottom: 2px solid ${({ theme }) => theme.colors.navy};
		}
	}
`;
