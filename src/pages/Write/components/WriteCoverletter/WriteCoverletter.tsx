import { isEmpty } from '@utils/helpers';
import { FormProvider } from 'react-hook-form';
import styled from 'styled-components';

import ResumeNav from '@common/ResumeNav';
import Container from '@components/layout/Container';
import SaveModal from '@components/modal/SaveModal';
import CoverLetterContents from '@components/resume-edit/edit-base/CoverLetterContents';
import CoverLetterOptionSection from '@components/resume-edit/edit-base/CoverLetterOptionSection';
import SingleAsyncWrapper from '@components/suspense/async-wrapper/SingleAsyncWrapper';

import useCoverletterWrite from './WirteCoverletter.hook';

export default function WriteCoverletter() {
	const {
		formId,
		coverLetterEditNavItems,
		coverLetterEditMethods,
		submitCoverletter,
		getValue,
		modalQueryKey,
	} = useCoverletterWrite();
	return (
		<Container backgroundColor='lightGrey' padding>
			<FormProvider {...coverLetterEditMethods}>
				<SingleAsyncWrapper>
					<StyledForm id={formId} onSubmit={submitCoverletter}>
						<h2 className='a11y-hidden'>
							{isEmpty(getValue('docTitle')) ? '새로운 이력서' : getValue('docTitle')};
						</h2>
						<CoverLetterOptionSection />
						<CoverLetterContents />
						<ResumeNav resumeNavItems={coverLetterEditNavItems} />
					</StyledForm>
				</SingleAsyncWrapper>
				<SaveModal title='자기소개서' queryKey={modalQueryKey} buttonFormId={formId} />
				{/* <UnsavedChangesModal blocker={blocker} /> */}
			</FormProvider>
		</Container>
	);
}

const StyledForm = styled.form`
	width: 100%;
	margin: 50px 0 30px;
`;
