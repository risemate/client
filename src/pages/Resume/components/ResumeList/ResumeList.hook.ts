//TODO: path is working, need to change later
import { careersQuery } from '@queries/resume';
import { useNavigate } from 'react-router-dom';

export default function useResumeList() {
	const resumes = careersQuery({ docType: 'BASIC', careerType: 'RESUME' });
	const coverLetters = careersQuery({ docType: 'BASIC', careerType: 'COVERLETTER' });
	const navigate = useNavigate();
	const moveToNewResume = () => navigate('/my-info/docs/new/edit');
	const moveToRevise = () => navigate('/my-info/ai');
	return {
		resumes: resumes.data || [],
		coverLetters: coverLetters.data || [],
		moveToNewResume,
		moveToRevise,
	};
}
