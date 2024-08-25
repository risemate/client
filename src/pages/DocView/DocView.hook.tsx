import { resumeDetailQuery } from '@queries/career';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Resume } from 'types/career/resume';

export default function useDocView<T = Resume>() {
	const { id = '' } = useParams();
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const isNetwork = pathname.includes('network');
	const careerDetail = resumeDetailQuery<T>(id);

	const resumeViewNavItems = [
		{ name: '이력서 수정', onClick: () => navigate(`/write?redirect=re&id=${id}`) },
		{ name: 'PDF 저장' },
	];

	return {
		data: careerDetail.data,
		resumeViewNavItems,
		isNetwork,
	};
}
