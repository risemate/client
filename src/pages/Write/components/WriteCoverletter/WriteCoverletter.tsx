import { isEmpty } from '@utils/helpers';
import { FormProvider } from 'react-hook-form';
import styled from 'styled-components';

import ResumeNav from '@common/ResumeNav';
import SingleAsyncWrapper from '@components/async-wrapper/SingleAsyncWrapper';
import Container from '@components/layout/Container';

import CoverLetter from '../edit-base/CoverLetter';
import Profile from '../edit-base/Profile';
import CreateModal from '../modal/CreateModal';
import UpdateModal from '../modal/UpdateModal';
import useCoverletterWrite from './WirteCoverletter.hook';

export default function WriteCoverletter() {
	const {
		formId,
		coverletterEditNavItems,
		coverletterEditMethods,
		submitCoverletter,
		getValue,
	} = useCoverletterWrite();
	return (
		<Container backgroundColor='lightGrey' padding>
			<FormProvider {...coverletterEditMethods}>
				<SingleAsyncWrapper>
					<StyledForm id={formId} onSubmit={submitCoverletter()}>
						<h2 className='a11y-hidden'>
							{isEmpty(getValue('docTitle')) ? '새로운 이력서' : getValue('docTitle')};
						</h2>
						<Profile />
						<CoverLetter />
						<ResumeNav resumeNavItems={coverletterEditNavItems} />
					</StyledForm>
				</SingleAsyncWrapper>
				<CreateModal />
				<UpdateModal />
				{/* <UnsavedChangesModal blocker={blocker} /> */}
			</FormProvider>
		</Container>
	);
}

const StyledForm = styled.form`
	margin: 50px 0 30px;
`;
