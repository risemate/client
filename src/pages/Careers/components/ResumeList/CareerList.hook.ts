//TODO: path is working, need to change later
import { careersQuery } from '@queries/resume';
import { useNavigate } from 'react-router-dom';

export default function useCareerList() {
	const resumes = careersQuery({ docType: 'BASIC', careerType: 'RESUME' });
	const coverLetters = careersQuery({ docType: 'BASIC', careerType: 'COVERLETTER' });
	const navigate = useNavigate();
	const to = (to: string) => navigate(to);
	return {
		resumes: resumes.data || [],
		coverLetters: coverLetters.data || [],
		to,
	};
}
