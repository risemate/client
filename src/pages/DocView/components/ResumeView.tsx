import { useNavigate, useParams } from 'react-router-dom';
import { mockResume } from 'types/Resume/data';

import ResumeNav from '@common/ResumeNav';
import ResumeTemplate from '@components/resume/ViewTemplate/ResumeView';

export default function ResumeView() {
	const { id } = useParams();
	const navigate = useNavigate();
	const resumeNavItems = [
		{ name: '이력서 수정', onClick: () => navigate(`edit`) },
		{ name: 'AI 첨삭 받기', onClick: () => alert('hi') },
		{ name: '전문가 찾아보기', onClick: () => alert('hi') },
	];

	return (
		<>
			<ResumeTemplate career={mockResume.doc} />
			<ResumeNav resumeNavItems={resumeNavItems} />
		</>
	);
}
