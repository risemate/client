import { isEmpty } from '@utils/helpers';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Resume as ResumeType } from 'types/Resume';

import ResumeNav from '@common/ResumeNav';

import Activity from './Activity';
import Education from './Education';
import Profile from './Profile';
import Project from './Project';
// import TechStack from './TechStack';
import TechStack from './TechStacktest';
import WorkExperience from './WorkExperience';

interface ResumeEditProps {
	initialResume: ResumeType;
	changeMode: (newMode: 'view' | 'edit') => void;
}

export default function ResumeEdit({ initialResume, changeMode }: ResumeEditProps) {
	const resumeNavItems = [
		{ name: '미리보기', onClick: () => changeMode('view') },
		{ name: '섹션 추가', onClick: () => alert('hi') },
		{ name: '저장하기' },
	];

	const methods = useForm<ResumeType>({
		mode: 'onSubmit',
		defaultValues: initialResume,
	});

	const { handleSubmit, getValues } = methods;

	const submitResume = (data: ResumeType) => {
		// eslint-disable-next-line
		console.log(data);
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(submitResume)}>
				<h2 className='a11y-hidden'>
					{isEmpty(getValues('docsTitle')) ? '새로운 이력서' : getValues('docsTitle')};
				</h2>
				<Profile />
				<TechStack />
				<WorkExperience />
				<Project />
				<Education />
				<Activity />
				<ResumeNav resumeNavItems={resumeNavItems} />
			</form>
		</FormProvider>
	);
}
