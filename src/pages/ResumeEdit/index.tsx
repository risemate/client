import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { isEmpty } from '@utils/helpers';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { FormProvider } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import Loader from '@common/Loader';
import ResumeNav from '@common/ResumeNav';
import ErrorBoundaryComponent from '@components/errors/ErrorBoundaryComponent';

import Activity from './components/Activity';
import Certificates from './components/Certificate';
import Education from './components/Education';
import CreateModal from './components/modal/CreateModal';
import DeleteModal from './components/modal/DeleteModal';
import UpdateModal from './components/modal/UpdateModal';
import Profile from './components/Profile';
import Project from './components/Project';
import TechStack from './components/TechStack';
import WorkExperience from './components/WorkExperience';
import useResumeEdit from './ResumeEdit.hook';

export default function ResumeEdit() {
	const { id } = useParams();
	const { reset } = useQueryErrorResetBoundary();
	const { formId, resumeEditNavItems, resumeEditMethods, submitResume, getValue } =
		useResumeEdit(id || '');

	return (
		<FormProvider {...resumeEditMethods}>
			<ErrorBoundary
				FallbackComponent={ErrorBoundaryComponent}
				onError={() => console.error('error!!!')}
				onReset={reset}
			>
				<Suspense fallback={<Loader />}>
					<form id={formId} onSubmit={submitResume()}>
						<h2 className='a11y-hidden'>
							{isEmpty(getValue('docTitle')) ? '새로운 이력서' : getValue('docTitle')};
						</h2>
						<Profile />
						<TechStack />
						<WorkExperience />
						<Project />
						<Education />
						<Activity />
						<Certificates />
						<ResumeNav resumeNavItems={resumeEditNavItems} />
					</form>
				</Suspense>
			</ErrorBoundary>
			<CreateModal />
			<UpdateModal />
			<DeleteModal />
		</FormProvider>
	);
}
