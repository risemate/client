import usePreventLeave from '@hooks/usePreventLeave';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { isEmpty } from '@utils/helpers';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { FormProvider } from 'react-hook-form';
import styled from 'styled-components';

import Loader from '@common/Loader';
import ResumeNav from '@common/ResumeNav';
import ErrorBoundaryComponent from '@components/errors/ErrorBoundaryComponent';
import Container from '@components/layout/Container';
import UnsavedChangesModal from '@components/modal/UnsavedChangesModal';

import Activity from './components/Activity';
import Certificates from './components/Certificate';
import CoverLetter from './components/CoverLetter';
import Education from './components/Education';
import CreateModal from './components/modal/CreateModal';
import UpdateModal from './components/modal/UpdateModal';
import Profile from './components/Profile';
import Project from './components/Project';
import TechStack from './components/TechStack';
import WorkExperience from './components/WorkExperience';
import useResumeWrite from './ResumeWirte.hook';

export default function WriteResume() {
	const { reset } = useQueryErrorResetBoundary();
	const { formId, resumeEditNavItems, resumeEditMethods, submitResume, getValue } =
		useResumeWrite();
	const { blocker } = usePreventLeave({ isModal: true });

	return (
		<Container backgroundColor='lightGrey' padding>
			<FormProvider {...resumeEditMethods}>
				<ErrorBoundary
					FallbackComponent={ErrorBoundaryComponent}
					onError={() => console.error('error!!!')}
					onReset={reset}
				>
					<Suspense fallback={<Loader />}>
						<StyledForm id={formId} onSubmit={submitResume()}>
							<h2 className='a11y-hidden'>
								{isEmpty(getValue('docTitle')) ? '새로운 이력서' : getValue('docTitle')};
							</h2>
							<Profile />
							<CoverLetter />
							<TechStack />
							<WorkExperience />
							<Project />
							<Education />
							<Activity />
							<Certificates />
							<ResumeNav resumeNavItems={resumeEditNavItems} />
						</StyledForm>
					</Suspense>
				</ErrorBoundary>
				<CreateModal />
				<UpdateModal />
				<UnsavedChangesModal blocker={blocker} />
			</FormProvider>
		</Container>
	);
}

const StyledForm = styled.form`
	margin: 50px 0 30px;
`;
