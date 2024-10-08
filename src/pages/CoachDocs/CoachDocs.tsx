import React from 'react';
import { FormProvider } from 'react-hook-form';
import styled from 'styled-components';

import Button from '@common/Button';
import Container from '@components/layout/Container';
import Activity from '@components/resume-edit/edit-base/Activity';
import Education from '@components/resume-edit/edit-base/Education';
import Project from '@components/resume-edit/edit-base/Project';
import WorkExperience from '@components/resume-edit/edit-base/WorkExperience';
import SingleAsyncWrapper from '@components/suspense/async-wrapper/SingleAsyncWrapper';

import useCoachDocs from './CoachDocs.hook';

export default function CoachDocs() {
	const { resumeEditMethods, submitResume } = useCoachDocs();
	return (
		<Container backgroundColor='lightGrey' padding>
			<FormProvider {...resumeEditMethods}>
				<SingleAsyncWrapper>
					<StyledForm onSubmit={submitResume}>
						<WorkExperience field='career' />
						<Project field='career' />
						<Education field='career' />
						<Activity field='career' />
						<Button variant='navy' size='large'>
							이력서 저장
						</Button>
					</StyledForm>
				</SingleAsyncWrapper>
			</FormProvider>
		</Container>
	);
}

const StyledForm = styled.form`
	margin: 50px 0 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
