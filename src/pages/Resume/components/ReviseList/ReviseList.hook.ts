import { reviseCareersQuery } from '@queries/resume';
import { isEmpty } from '@utils/helpers';
import { useNavigate } from 'react-router-dom';

export default function useReviseList(parentId: string) {
	const reviseResumes = reviseCareersQuery(parentId, { enabled: !isEmpty(parentId) });
	const navigate = useNavigate();
	const moveToRevise = () => navigate('/my-info/ai');
	return {
		reviseResumes: reviseResumes.data || [],
		moveToRevise,
	};
}
