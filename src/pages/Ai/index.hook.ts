import { careersQuery } from '@queries/career';
import { useState } from 'react';

export default function useAi() {
	const resumes = careersQuery({ docType: 'BASIC', careerType: 'RESUME' });
	const coverLetters = careersQuery({ docType: 'BASIC', careerType: 'COVERLETTER' });
	const [selectedId, setSelectedId] = useState<string | null>(null);
	const updateSelectedId = (id: string | null) => setSelectedId(id);
	return {
		resumes: resumes.data || [],
		coverLetters: coverLetters.data || [],
		selectedId: {
			value: selectedId,
			update: updateSelectedId,
		},
	};
}
