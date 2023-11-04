import React, { useState } from 'react';
import { mockResume } from 'types/Resume';

import ResumeEdit from '@components/resume/resume-edit/ResumeEdit';
import ResumeView from '@components/resume/resume-view/ResumeView';

export default function ResumeDetail() {
	const [mode, setMode] = useState<'view' | 'edit'>('view');
	const changeMode = (newMode: 'view' | 'edit') => {
		setMode(newMode);
	};

	return (
		<>
			{mode === 'view' && <ResumeView resume={mockResume} changeMode={changeMode} />}
			{mode === 'edit' && (
				<ResumeEdit initialResume={mockResume} changeMode={changeMode} />
			)}
		</>
	);
}
