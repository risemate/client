//TODO: path is working, need to change later
import { useNavigate } from 'react-router-dom';

import { careersQuery } from '../../services/queries/resume';

export default function useResume() {
	const resumes = careersQuery({ docType: 'BASIC', careerType: 'RESUME' });
	const coverLetters = careersQuery({ docType: 'BASIC', careerType: 'COVERLETTER' });
	const navigate = useNavigate();
	const moveToNewResume = () => navigate('/my-info/docs/new/edit');
	return {
		resumes: resumes.data || [],
		coverLetters: coverLetters.data || [],
		moveToNewResume,
	};
}
