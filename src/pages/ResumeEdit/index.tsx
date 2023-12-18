import { isEmpty } from '@utils/helpers';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Resume as ResumeType } from 'types/Resume';
import { defaultResume, mockResume } from 'types/Resume/data';

import ResumeNav from '@common/ResumeNav';

import Activity from './components/Activity';
import Education from './components/Education';
import Profile from './components/Profile';
import Project from './components/Project';
import TechStack from './components/TechStack';
import WorkExperience from './components/WorkExperience';

export default function ResumeEdit() {
	const { id } = useParams();
	const resume = id === 'new' ? defaultResume : mockResume;
	const resumeNavItems = [
		{ name: '섹션 추가', onClick: () => alert('hi') },
		{ name: '저장하기' },
	];

	const methods = useForm<ResumeType>({
		mode: 'onSubmit',
		defaultValues: resume,
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
