import { reviseResumeDetailQuery } from '@queries/career';
import { useParams } from 'react-router-dom';

import Container from '@components/layout/Container';
import { ReviseResumeTemplate } from '@components/resume-view/ViewTemplate/ReviseResumeView';

export default function ReviseResumeView() {
	// eslint-disable-next-line
	const { childrenId } = useParams();
	const { data, isLoading } = reviseResumeDetailQuery(childrenId || '');
	//:로딩애니메이션 추가하기
	return (
		<Container backgroundColor='lightGrey' padding>
			{isLoading && '로딩 중...'}
			{data?._id && (
				<>
					<ReviseResumeTemplate career={data.doc} />
					{/* <ResumeNav resumeNavItems={resumeNavItems} /> */}
				</>
			)}
		</Container>
	);
}
