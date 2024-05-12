import { reviseResumeQuery } from '@queries/career';
import { isEmpty } from '@utils/helpers';
import { useNavigate } from 'react-router-dom';

export default function useReviseList(parentId: string) {
	const reviseResumes = reviseResumeQuery(parentId, { enabled: !isEmpty(parentId) });
	const navigate = useNavigate();
	const moveToRevise = () => navigate('/my-info/ai');
	const to = (to: string) => navigate(to);
	return {
		reviseResumes: reviseResumes.data || [],
		moveToRevise,
		to,
		isLoading: reviseResumes.isLoading,
	};
}
