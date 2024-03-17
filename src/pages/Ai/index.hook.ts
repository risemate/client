import { careersQuery } from '@queries/career';

export default function useAi() {
	const resumes = careersQuery({ docType: 'BASIC', careerType: 'RESUME' });
	const coverLetters = careersQuery({ docType: 'BASIC', careerType: 'COVERLETTER' });
	return {
		resumes: resumes.data || [],
		coverLetters: coverLetters.data || [],
	};
}
