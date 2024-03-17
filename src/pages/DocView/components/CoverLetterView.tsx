import { Coverletter } from 'types/career/coverletter';

import SingleAsyncWrapper from '@components/async-wrapper/SingleAsyncWrapper';
import Container from '@components/layout/Container';
import CoverLetterTemplate from '@components/resume-view/ViewTemplate/CoverLetterView';

import useDocView from '../DocView.hook';
import DeleteModal from './DeleteModal';

export default function CoverLetterView() {
	const { data, resumeViewNavItems, isNetwork } = useDocView<Coverletter>();
	return (
		<Container backgroundColor='lightGrey' padding>
			<SingleAsyncWrapper>
				{data && <CoverLetterTemplate career={data} />}
				{/* {isNetwork || <ResumeNav resumeNavItems={resumeViewNavItems} />} */}
				{/* :// 본인 이력서나 자기소개서일경우 Nva 보여주기 */}
			</SingleAsyncWrapper>
			<DeleteModal />
		</Container>
	);
}
