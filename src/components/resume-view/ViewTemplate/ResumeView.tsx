import { css } from 'styled-components';
import { Resume as ResumeType } from 'types/career/resume';

import WhiteBoxWrapper from '@components/base-wrappers/WhiteBoxWrapper';

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
			{career.orderType?.map(item => {
				switch (item.name) {
					case 'workExperiences':
						return (
							item.isVisible &&
							career.workExperiences && (
								<WorkExperience key={item._id} workExperiences={career.workExperiences} />
							)
						);
					case 'projects':
						return (
							item.isVisible &&
							career.projects && <Project key={item._id} projects={career.projects} />
						);
					case 'educations':
						return (
							item.isVisible &&
							career.educations && (
								<Education key={item._id} educations={career.educations} />
							)
						);
					case 'activities':
						return (
							item.isVisible &&
							career.activities && (
								<Activity key={item._id} activities={career.activities} />
							)
						);
					case 'certificates':
						return (
							item.isVisible &&
							career.certificates && (
								<Certificate key={item._id} certificates={career.certificates} />
							)
						);
					default:
						return null;
				}
			})}
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
