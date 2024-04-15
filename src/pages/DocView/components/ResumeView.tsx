import ResumeNav from '@common/ResumeNav';
import SingleAsyncWrapper from '@components/async-wrapper/SingleAsyncWrapper';
import Container from '@components/layout/Container';
import ResumeTemplate from '@components/resume-view/ViewTemplate/ResumeView';

import useDocView from '../DocView.hook';

export default function ResumeView() {
	const { data, resumeViewNavItems, isNetwork } = useDocView();
	return (
		<Container backgroundColor='lightGrey' padding>
			<SingleAsyncWrapper>
				{/* TODO: 해결 */}
				{data && <ResumeTemplate career={data.doc} />}
				{isNetwork || <ResumeNav resumeNavItems={resumeViewNavItems} />}
				{/* ://본인 이력서나 자기소개서일경우 Nva 보여주기 */}
			</SingleAsyncWrapper>
		</Container>
	);
}
