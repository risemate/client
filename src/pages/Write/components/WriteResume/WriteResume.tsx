// import usePreventLeave from '@hooks/usePreventLeave';
import { isEmpty } from '@utils/helpers';
import { useEffect } from 'react';
import { FormProvider } from 'react-hook-form';
import styled from 'styled-components';

import Container from '@components/layout/Container';
import SaveModal from '@components/modal/SaveModal';
// import UnsavedChangesModal from '@components/modal/UnsavedChangesModal';
import Activity from '@components/resume-edit/edit-base/Activity';
import Certificates from '@components/resume-edit/edit-base/Certificate';
import Education from '@components/resume-edit/edit-base/Education';
import Profile from '@components/resume-edit/edit-base/Profile';
import Project from '@components/resume-edit/edit-base/Project';
import TechStack from '@components/resume-edit/edit-base/TechStack';
import WorkExperience from '@components/resume-edit/edit-base/WorkExperience';
import SingleAsyncWrapper from '@components/suspense/async-wrapper/SingleAsyncWrapper';

import WriteNavigation from '../WriteNavigation/WriteNavigation';
import useResumeWrite from './WirteResume.hook';

export default function WriteResume() {
	const {
		formId,
		resumeEditMethods,
		resumeOrder,
		submitResume,
		getValue,
		invalidateResume,
		isSubmitting,
		modalQueryKey,
	} = useResumeWrite();
	// const { blocker } = usePreventLeave();
	useEffect(() => {
		invalidateResume();
	}, [isSubmitting]);
	return (
		<Container backgroundColor='lightGrey' padding>
			<SingleAsyncWrapper>
				<FormProvider {...resumeEditMethods}>
					<StyledForm id={formId} onSubmit={submitResume}>
						<div>
							<h2 className='a11y-hidden'>
								{isEmpty(getValue('docTitle')) ? '새로운 이력서' : getValue('docTitle')};
							</h2>
							<Profile />
							<TechStack />
							{resumeOrder.map(item => {
								switch (item.name) {
									case 'workExperiences':
										return <WorkExperience key={item._id} field='doc' />;
									case 'projects':
										return <Project key={item._id} field='doc' />;
									case 'educations':
										return <Education key={item._id} field='doc' />;
									case 'activities':
										return <Activity key={item._id} field='doc' />;
									case 'certificates':
										return <Certificates key={item._id} field='doc' />;
									default:
										return null;
								}
							})}
						</div>
						<WriteNavigation />
					</StyledForm>
					<SaveModal title='이력서' queryKey={modalQueryKey} buttonFormId={formId} />
					{/* <UnsavedChangesModal blocker={blocker} /> */}
				</FormProvider>
			</SingleAsyncWrapper>
		</Container>
	);
}

const StyledForm = styled.form`
	margin: 50px 0 30px;
	max-width: calc(${({ theme }) => theme.widths.maxWidth} - 64px);
	display: grid;
	grid-template-columns: auto 250px;
	gap: 20px;
	input {
		width: 100%;
	}
`;
