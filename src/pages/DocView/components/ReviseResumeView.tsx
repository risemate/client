import { reviseResumeDetailQuery } from '@queries/career';
import { useParams } from 'react-router-dom';

import Container from '@components/layout/Container';
import { ReviseResumeTemplate } from '@components/resume-view/ViewTemplate/ReviseResumeView';

export default function ReviseResumeView() {
	const { childrenId } = useParams();
	const { data } = reviseResumeDetailQuery(childrenId || '');
	return (
		<Container backgroundColor='lightGrey' padding>
			<ReviseResumeTemplate career={data.doc} />
			{/* <ResumeNav resumeNavItems={resumeNavItems} /> */}
		</Container>
	);
}
