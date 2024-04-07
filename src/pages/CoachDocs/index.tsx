import React from 'react';
import { FormProvider } from 'react-hook-form';
import styled from 'styled-components';

import ResumeNav from '@common/ResumeNav';
import SingleAsyncWrapper from '@components/async-wrapper/SingleAsyncWrapper';
import Container from '@components/layout/Container';
import Activity from '@components/resume-edit/edit-base/Activity';
import Education from '@components/resume-edit/edit-base/Education';
import Project from '@components/resume-edit/edit-base/Project';
import WorkExperience from '@components/resume-edit/edit-base/WorkExperience';

import useCoachDocs from './CoachDocs.hook';

export default function CoachDocs() {
	const { resumeEditMethods, resumeNavItems, submitResume } = useCoachDocs();
	return (
		<Container backgroundColor='lightGrey' padding>
			<FormProvider {...resumeEditMethods}>
				<SingleAsyncWrapper>
					<StyledForm onSubmit={submitResume}>
						<WorkExperience field='doc' />
						<Project field='doc' />
						<Education field='doc' />
						<Activity field='doc' />
						<ResumeNav resumeNavItems={resumeNavItems} />
					</StyledForm>
				</SingleAsyncWrapper>
			</FormProvider>
		</Container>
	);
}

const StyledForm = styled.form`
	margin: 50px 0 30px;
`;
