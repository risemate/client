import { reviseResumeDetailQuery } from '@queries/resume';
import { useParams } from 'react-router-dom';

import Container from '@components/layout/Container';
import { ReviseResumeTemplate } from '@components/resume/ViewTemplate/ReviseResumeView';

export default function ReviseResumeView() {
	// eslint-disable-next-line
	const { childrenId } = useParams();
	const resumeNavItems = [
		{ name: '비교하기', onClick: () => alert('비교하기') },
		{ name: '전체교체', onClick: () => alert('전체 교체') },
	];
	const { data, isLoading } = reviseResumeDetailQuery(childrenId || '');
	console.log('data: ', childrenId, data);
	//:로딩애니메이션 추가하기
	return (
		<Container backgroundColor='lightGrey'>
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
