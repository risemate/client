import { isEmpty } from '@utils/helpers';
import React, { useState } from 'react';
import {
	Activity as ActivityType,
	Education as EducationType,
	Project as ProjectType,
	Resume as ResumeType,
	WorkExperience as WorkExperienceType,
} from 'types/Resume';

import ResumeNav from '@common/ResumeNav';

import Activity from './Activity';
import Education from './Education';
import Profile from './Profile';
import Project from './Project';
import TechStack from './TechStack';
import WorkExperience from './WorkExperience';

interface ResumeEditProps {
	initialResume: ResumeType;
	changeMode: (newMode: 'view' | 'edit') => void;
}

export default function ResumeEdit({ initialResume, changeMode }: ResumeEditProps) {
	const resumeNavItems = [
		{ name: '미리보기', onClick: () => changeMode('view') },
		{ name: '섹션 추가', onClick: () => alert('hi') },
		{ name: '저장하기', onClick: () => alert('hi') },
	];

	const [resume, setResume] = useState<ResumeType>(initialResume);
	const handleInputChange = (
		field: keyof ResumeType,
		value:
			| string
			| number
			| WorkExperienceType[]
			| ProjectType[]
			| EducationType[]
			| ActivityType[],
	) => {
		setResume(prevResume => ({
			...prevResume,
			[field]: value,
		}));
	};

	const updateTechStack = (newSkills: string[]) => {
		setResume(prevResume => ({
			...prevResume,
			techStack: {
				...prevResume.techStack,
				skills: newSkills,
			},
		}));
	};

	return (
		<>
			<h2 className='a11y-hidden'>
				{isEmpty(resume.resumeTitle) ? '새로운 이력서' : resume.resumeTitle};
			</h2>
			<Profile profile={resume} handleInputChange={handleInputChange} />
			<TechStack techStack={resume.techStack.skills} updateTechStack={updateTechStack} />
			<WorkExperience
				workExperiences={resume.workExperiences}
				handleInputChange={handleInputChange}
			/>
			<Project projects={resume.projects} handleInputChange={handleInputChange} />
			<Education educations={resume.educations} handleInputChange={handleInputChange} />
			<Activity activities={resume.activities} handleInputChange={handleInputChange} />
			<ResumeNav resumeNavItems={resumeNavItems} />
		</>
	);
}
