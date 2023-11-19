import { defaultResume, mockResume } from 'models/ResumeData';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import ResumeEdit from '@components/resume/resume-edit/ResumeEdit';
import ResumeView from '@components/resume/resume-view/ResumeView';

export default function ResumeDetail() {
	const { id } = useParams();
	const [mode, setMode] = useState<'view' | 'edit'>(id === 'new' ? 'edit' : 'view');
	const changeMode = (newMode: 'view' | 'edit') => {
		setMode(newMode);
	};

	const resume = id === 'new' ? defaultResume : mockResume;

	return (
		<>
			{mode === 'view' && <ResumeView resume={mockResume} changeMode={changeMode} />}
			{mode === 'edit' && <ResumeEdit initialResume={resume} changeMode={changeMode} />}
		</>
	);
}
