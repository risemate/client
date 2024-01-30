import { useParams } from 'react-router-dom';
import { mockResumeCoaching } from 'types/Resume/data';

import ResumeNav from '@common/ResumeNav';
import { ReviseResumeTemplate } from '@components/resume/ViewTemplate/ReviseResumeView';

export default function ReviseResumeView() {
	// eslint-disable-next-line
	const { id } = useParams();
	const resumeNavItems = [
		{ name: '비교하기', onClick: () => alert('비교하기') },
		{ name: '전체교체', onClick: () => alert('전체 교체') },
	];

	return (
		<>
			<ReviseResumeTemplate career={mockResumeCoaching.doc} />
			<ResumeNav resumeNavItems={resumeNavItems} />
		</>
	);
}
