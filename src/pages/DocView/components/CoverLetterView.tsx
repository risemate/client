import { Coverletter } from 'types/career/coverletter';

import Container from '@components/layout/Container';
import CoverLetterTemplate from '@components/resume-view/ViewTemplate/CoverLetterView';
import SingleAsyncWrapper from '@components/suspense/async-wrapper/SingleAsyncWrapper';

import useDocView from '../DocView.hook';

export default function CoverLetterView() {
	const { data } = useDocView<Coverletter>();
	return (
		<Container backgroundColor='lightGrey' padding>
			<SingleAsyncWrapper>
				{data && <CoverLetterTemplate career={data} />}
				{/* {isNetwork || <ResumeNav resumeNavItems={resumeViewNavItems} />} */}
				{/* :// 본인 이력서나 자기소개서일경우 Nva 보여주기 */}
			</SingleAsyncWrapper>
		</Container>
	);
}
