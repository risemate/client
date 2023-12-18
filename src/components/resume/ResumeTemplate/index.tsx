import React from 'react';
import styled, { css } from 'styled-components';
import { Feedback as FeedbackType, Resume as ResumeType } from 'types/Resume';

import WhiteBoxWrapper from '@components/wrappers/WhiteBoxWrapper';

import Activity from './Activity';
import Education from './Education';
import Profile from './Profile';
import Project from './Project';
import WorkExperience from './WorkExperience';

interface ResumeViewProps {
	resume: ResumeType;
	feedback?: FeedbackType;
}

export default function ResumeTemplate({ resume, feedback }: ResumeViewProps) {
	return (
		<WhiteBoxWrapper type='div' customCss={resumeWrapperStyle}>
			{feedback && (
				<StyledFeedback>
					<div>{feedback.notice}</div>
					<h3>전체적인 피드백</h3>
					<p>{feedback.total}</p>
				</StyledFeedback>
			)}
			<Profile
				profile={resume.profile}
				techStack={resume.techStack}
				feedback={feedback?.coverLetter}
			/>
			<WorkExperience
				workExperiences={resume.workExperiences}
				feedback={feedback?.workExperience}
			/>
			<Project projects={resume.projects} feedback={feedback?.project} />
			<Education educations={resume.educations} feedback={feedback?.education} />
			<Activity activities={resume.activities} feedback={feedback?.activity} />
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
