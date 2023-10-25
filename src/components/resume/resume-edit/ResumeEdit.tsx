import { isEmpty } from '@utils/helpers';
import React, { useState } from 'react';
import { Resume } from 'types/Resume';

import ResumeNav from '@common/ResumeNav';

import Profile from './Profile';
import TechStack from './TechStack';

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
	const handleInputChange = (field: keyof Resume, value: string | number) => {
		setResume(prevResume => ({
			...prevResume,
			[field]: value,
		}));
	};

	return (
		<>
			<h2 className='a11y-hidden'>
				{isEmpty(resume.resumeTitle) ? '새로운 이력서' : resume.resumeTitle};
			</h2>
			<Profile profile={resume} handleInputChange={handleInputChange} />
			<TechStack />
			<section></section>
			<ResumeNav resumeNavItems={resumeNavItems} />
		</>
	);
}
