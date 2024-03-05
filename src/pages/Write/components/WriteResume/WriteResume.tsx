import usePreventLeave from '@hooks/usePreventLeave';
import { isEmpty } from '@utils/helpers';
import { FormProvider } from 'react-hook-form';
import styled from 'styled-components';

import SingleAsyncWrapper from '@components/async-wrapper/SingleAsyncWrapper';
import Container from '@components/layout/Container';
import UnsavedChangesModal from '@components/modal/UnsavedChangesModal';

import Activity from '../edit-base/Activity';
import Certificates from '../edit-base/Certificate';
import CoverLetter from '../edit-base/CoverLetter';
import Education from '../edit-base/Education';
import Profile from '../edit-base/Profile';
import Project from '../edit-base/Project';
import TechStack from '../edit-base/TechStack';
import WorkExperience from '../edit-base/WorkExperience';
import SaveResumeModal from '../modal/SaveResumeModal';
import WriteNavigation from '../WriteNavigation/WriteNavigation';
import useResumeWrite from './WirteResume.hook';

export default function WriteResume() {
	const { formId, resumeEditMethods, resumeOrder, submitResume, getValue } =
		useResumeWrite();
	// const { blocker } = usePreventLeave();
	const writeResumeComponentMap: Record<string, JSX.Element> = {
		coverLetter: <CoverLetter />,
		techStacks: <TechStack />,
		workExperiences: <WorkExperience />,
		projects: <Project />,
		educations: <Education />,
		activities: <Activity />,
		certificates: <Certificates />,
	};
	return (
		<Container backgroundColor='lightGrey' padding>
			<FormProvider {...resumeEditMethods}>
				<SingleAsyncWrapper>
					<StyledForm id={formId} onSubmit={submitResume()}>
						<div>
							<h2 className='a11y-hidden'>
								{isEmpty(getValue('docTitle')) ? '새로운 이력서' : getValue('docTitle')};
							</h2>
							<Profile />
							{resumeOrder.map(orderType => writeResumeComponentMap[orderType.name])}
						</div>
						<WriteNavigation />
					</StyledForm>
				</SingleAsyncWrapper>
				<SaveResumeModal />
				{/* <UnsavedChangesModal blocker={blocker} /> */}
			</FormProvider>
		</Container>
	);
}

const StyledForm = styled.form`
	margin: 50px 0 30px;
	max-width: calc(${({ theme }) => theme.widths.maxWidth} - 64px);
	display: grid;
	grid-template-columns: auto 250px;
	gap: 20px;
`;