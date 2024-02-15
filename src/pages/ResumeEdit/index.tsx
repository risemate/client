import { isEmpty } from '@utils/helpers';
import { FormProvider } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import ResumeNav from '@common/ResumeNav';
import SingleAsyncWrapper from '@components/async-wrapper/SingleAsyncWrapper';
import Container from '@components/layout/Container';

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
import useResumeEdit from './ResumeEdit.hook';

export default function ResumeEdit() {
	const { id } = useParams();
	const { formId, resumeEditNavItems, resumeEditMethods, submitResume, getValue } =
		useResumeEdit(id || '');

	return (
		<Container backgroundColor='lightGrey' padding>
			<FormProvider {...resumeEditMethods}>
				<SingleAsyncWrapper>
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
				</SingleAsyncWrapper>
				<CreateModal />
				<UpdateModal />
			</FormProvider>
		</Container>
	);
}

const StyledForm = styled.form`
	margin: 50px 0 30px;
`;
