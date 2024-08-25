import { Coverletter } from 'types/career/coverletter';

import ResumeNav from '@common/ResumeNav';
import Container from '@components/layout/Container';
import CoverLetterTemplate from '@components/resume-view/ViewTemplate/CoverLetterView';
import SingleAsyncWrapper from '@components/suspense/async-wrapper/SingleAsyncWrapper';

import useDocView from '../DocView.hook';

export default function CoverLetterView() {
	const { data, isNetwork, resumeViewNavItems } = useDocView<Coverletter>();
	return (
		<Container backgroundColor='lightGrey' padding>
			<SingleAsyncWrapper>
				<CoverLetterTemplate career={data} />
				{isNetwork || <ResumeNav resumeNavItems={resumeViewNavItems} />}
			</SingleAsyncWrapper>
		</Container>
	);
}
