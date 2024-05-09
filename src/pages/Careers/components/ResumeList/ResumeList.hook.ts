//TODO: path is working, need to change later
import { careersQuery } from '@queries/career';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useResumeList() {
	const resumes = careersQuery({ docType: 'BASIC', careerType: 'RESUME' });
	const coverLetters = careersQuery({ docType: 'BASIC', careerType: 'COVERLETTER' });
	const navigate = useNavigate();
	const to = (to: string) => navigate(to);
	const [selectedId, setSelectedId] = useState<string | null>(null);
	const updateSelectedId = (id: string | null) => setSelectedId(id);
	return {
		resumes: resumes.data || [],
		coverLetters: coverLetters.data || [],
		to,
		selectedId: {
			value: selectedId,
			update: updateSelectedId,
		},
	};
}
