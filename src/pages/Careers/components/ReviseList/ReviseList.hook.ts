import { reviseResumeQuery } from '@queries/career';
import { isEmpty } from '@utils/helpers';
import { useNavigate } from 'react-router-dom';

export default function useReviseList(parentId: string) {
	const reviseResumes = reviseResumeQuery(parentId, { enabled: !isEmpty(parentId) });
	const navigate = useNavigate();
	const moveToRevise = () => navigate('/my-info/ai');
	return {
		reviseResumes: reviseResumes.data || [],
		moveToRevise,
		isLoading: reviseResumes.isLoading,
	};
}
