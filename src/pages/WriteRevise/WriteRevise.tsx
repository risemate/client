import { useEffect } from 'react';
import { FormProvider } from 'react-hook-form';
import styled, { css } from 'styled-components';

import ResumeNav from '@common/ResumeNav';
import WhiteBoxWrapper from '@components/base-wrappers/WhiteBoxWrapper';
import Container from '@components/layout/Container';
import SaveModal from '@components/modal/SaveModal';
import SingleAsyncWrapper from '@components/suspense/async-wrapper/SingleAsyncWrapper';

import ActivityRevise from './components/ActivityRevise';
import CertificateRevise from './components/CertificateRevise';
import EducationRevise from './components/EducationRevise';
import ProfileRevise from './components/ProfileRevise';
import ProjectRevise from './components/ProjectRevise';
import TotalFeedback from './components/TotalFeedback';
import WorkExperienceRevise from './components/WorkExperienceRevise';
import useWriteRevise from './WriteRevise.hook';

export default function WriteResume() {
	const {
		formId,
		resumeDetail,
		resumeEditMethods,
		resumeOrder,
		submitResume,
		getValue,
		invalidateResume,
		isSubmitting,
		modalQueryKey,
		reviseNavItems,
	} = useWriteRevise();
	useEffect(() => {
		invalidateResume();
	}, [isSubmitting]);
	return (
		<Container backgroundColor='lightGrey' padding>
			<SingleAsyncWrapper>
				<FormProvider {...resumeEditMethods}>
					<StyledForm id={formId} onSubmit={submitResume}>
						<div>
							<h2 className='a11y-hidden'>{getValue('docTitle')};</h2>
							<WhiteBoxWrapper type='div' customCss={resumeWrapperStyle}>
								<ProfileRevise />
							</WhiteBoxWrapper>
							{resumeOrder.map(item => {
								switch (item.name) {
									case 'workExperiences':
										return (
											<WorkExperienceRevise
												key={item._id}
												workExperiences={resumeDetail.workExperiences}
											/>
										);
									case 'projects':
										return (
											<ProjectRevise key={item._id} projects={resumeDetail.projects} />
										);
									case 'educations':
										return (
											<EducationRevise
												key={item._id}
												educations={resumeDetail.educations}
											/>
										);
									case 'activities':
										return (
											<ActivityRevise
												key={item._id}
												activities={resumeDetail.activities}
											/>
										);
									case 'certificates':
										return (
											<CertificateRevise
												key={item._id}
												certificates={resumeDetail.certificates}
											/>
										);
									default:
										return null;
								}
							})}
						</div>
						<TotalFeedback />
						<ResumeNav resumeNavItems={reviseNavItems} />
					</StyledForm>
					<SaveModal title='이력서' queryKey={modalQueryKey} buttonFormId={formId} />
				</FormProvider>
			</SingleAsyncWrapper>
		</Container>
	);
}

const StyledForm = styled.form`
	margin: 30px 0 100px;
	& > section:last-of-type {
		margin-top: 30px;
	}
`;

const resumeWrapperStyle = css`
	min-height: 500px;
	padding: 50px;
	margin: 70px auto;
	& > section {
		padding-bottom: 30px;
		&:not(:last-child) {
			border-bottom: 2px solid ${({ theme }) => theme.colors.navy};
			margin-bottom: 10px;
		}
	}
`;
