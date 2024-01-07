import { resumeDetailQuery } from '@queries/resume';
import { isEmpty } from '@utils/helpers';
import { useNavigate } from 'react-router-dom';

export default function useDocView(resumeId: string) {
	const navigate = useNavigate();
	const resumeDetail = resumeDetailQuery(resumeId, { enabled: !isEmpty(resumeId) });
	const resumeViewNavItems = [
		{ name: '이력서 수정', onClick: () => navigate(`edit`) },
		{ name: 'AI 첨삭 받기', onClick: () => navigate(`edit`) },
		{ name: '전문가 찾아보기', onClick: () => navigate(`edit`) },
	];
	return {
		resumeDetail: resumeDetail.data,
		resumeViewNavItems,
	};
}
