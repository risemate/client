import ResumeNav from '@common/ResumeNav';
import Container from '@components/layout/Container';
import ResumeTemplate from '@components/resume-view/ViewTemplate/ResumeView';

import useDocView from '../DocView.hook';

export default function ResumeView() {
	const { data, resumeViewNavItems, isNetwork } = useDocView();
	return (
		<Container backgroundColor='lightGrey' padding>
			<ResumeTemplate career={data.doc} />
			{isNetwork || <ResumeNav resumeNavItems={resumeViewNavItems} />}
		</Container>
	);
}
