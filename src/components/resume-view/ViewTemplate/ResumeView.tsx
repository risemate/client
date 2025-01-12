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

// OrderType 인터페이스 추가
interface OrderType {
	name: string;
	isVisible: boolean;
	_id: number; // string에서 number로 변경
}

export default function ResumeTemplate({ career }: ResumeViewProps) {
	const renderSection = (item: OrderType) => {
		if (!item.isVisible) return null;

		switch (item.name) {
			case 'workExperiences':
				return career.workExperiences?.length ? (
					<WorkExperience key={item._id} workExperiences={career.workExperiences} />
				) : null;
			case 'projects':
				return career.projects?.length ? (
					<Project key={item._id} projects={career.projects} />
				) : null;
			case 'educations':
				return career.educations?.length ? (
					<Education key={item._id} educations={career.educations} />
				) : null;
			case 'activities':
				return career.activities?.length ? (
					<Activity key={item._id} activities={career.activities} />
				) : null;
			case 'certificates':
				return career.certificates?.length ? (
					<Certificate key={item._id} certificates={career.certificates} />
				) : null;
			default:
				return undefined;
		}
	};

	return (
		<WhiteBoxWrapper type='div' customCss={resumeWrapperStyle}>
			<Profile
				profile={career.profile}
				techStack={career.techStack}
				description={career.description}
			/>
			{career.orderType?.map(item => renderSection(item)).filter(Boolean)}
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