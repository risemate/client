import styled, { css } from 'styled-components';
import { ReviseResume } from 'types/Resume';

import WhiteBoxWrapper from '@components/wrappers/WhiteBoxWrapper';

import Profile from './Profile';
import WorkExperience from './WorkExperience';

interface ReviseResumeViewProps {
	career: ReviseResume;
}

export function ReviseResumeTemplate({ career }: ReviseResumeViewProps) {
	return (
		<WhiteBoxWrapper type='div' customCss={resumeWrapperStyle}>
			{career.feedback && (
				<FeedbackWrapper>
					{/* <div>{feedback.notice}</div> */}
					<h3>전체적인 피드백</h3>
					<p>{career.feedback}</p>
				</FeedbackWrapper>
			)}
			<Profile
				profile={career.profile}
				techStack={career.techStack}
				feedback={career?.feed_coverLetter}
				description={career.description || null}
			/>
			<WorkExperience
				workExperiences={career.workExperiences}
				feedback={career?.feed_workExperience}
			/>
			{/* <Project projects={career.projects} feedback={career?.feed_project} />
			<Education educations={career.educations} feedback={career?.feed_education} />
			<Activity activities={career.activities} feedback={career?.feed_activity} /> */}
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

const FeedbackWrapper = styled.div`
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
