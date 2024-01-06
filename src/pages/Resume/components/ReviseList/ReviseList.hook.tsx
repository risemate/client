import { isEmpty } from '@utils/helpers';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { reviseCareersQuery } from '@queries/resume';

export default function useReviseList(parentId: string) {
	const reviseResumes = reviseCareersQuery(parentId, { enabled: !isEmpty(parentId) });
	const navigate = useNavigate();
	const moveToRevise = () => navigate('/my-info/ai');
	return {
		reviseResumes: reviseResumes.data || [],
		moveToRevise,
	};
}
