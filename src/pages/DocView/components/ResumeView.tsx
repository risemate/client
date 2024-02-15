import { useLocation, useParams } from 'react-router-dom';

import ResumeNav from '@common/ResumeNav';
import SingleAsyncWrapper from '@components/async-wrapper/SingleAsyncWrapper';
import Container from '@components/layout/Container';
import ResumeTemplate from '@components/resume/ViewTemplate/ResumeView';

import useDocView from '../DocView.hook';
import DeleteModal from './DeleteModal';

export default function ResumeView() {
	const { id } = useParams();
	const { pathname } = useLocation();
	const { resumeDetail, resumeViewNavItems, isNetwork } = useDocView(id || '', pathname);
	return (
		<Container backgroundColor='lightGrey' padding>
			<SingleAsyncWrapper>
				{/* TODO: 해결 */}
				{resumeDetail && <ResumeTemplate career={resumeDetail.doc} />}
				{isNetwork || <ResumeNav resumeNavItems={resumeViewNavItems} />}
			</SingleAsyncWrapper>
			<DeleteModal />
		</Container>
	);
}
