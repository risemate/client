//TODO: path is working, need to change later
import { careersQuery } from '../../services/queries/resume';

export default function useResume() {
	const resumes = careersQuery({ docType: 'BASIC', careerType: 'RESUME' });
	const coverLetters = careersQuery({ docType: 'BASIC', careerType: 'COVERLETTER' });
	return {
		resumes: resumes.data || [],
		coverLetters: coverLetters.data || [],
	};
}
