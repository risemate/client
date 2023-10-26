import { isEmpty } from '@utils/helpers';
import React, { useState } from 'react';
import { Resume, WorkExperience as WorkExperienceType } from 'types/Resume';

import ResumeNav from '@common/ResumeNav';

import Profile from './Profile';
import TechStack from './TechStack';
import WorkExperiences from './WorkExperiences';

interface ResumeEditProps {
	initialResume: Resume;
	changeMode: (newMode: 'view' | 'edit') => void;
}

export default function ResumeEdit({ initialResume, changeMode }: ResumeEditProps) {
	const resumeNavItems = [
		{ name: '미리보기', onClick: () => changeMode('view') },
		{ name: '섹션 추가', onClick: () => alert('hi') },
		{ name: '저장하기', onClick: () => alert('hi') },
	];

	const [resume, setResume] = useState<Resume>(initialResume);
	const handleInputChange = (
		field: keyof Resume,
		value: string | number | WorkExperienceType[],
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
			<WorkExperiences
				workExperiences={resume.workExperiences}
				handleInputChange={handleInputChange}
			/>
			<ResumeNav resumeNavItems={resumeNavItems} />
		</>
	);
}
