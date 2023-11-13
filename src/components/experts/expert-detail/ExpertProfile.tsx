import React from 'react';
import { mockResume } from 'types/Resume';

import Profile from '@components/resume/resume-view/Profile';

export default function ExpertProfile() {
	return <Profile resume={mockResume} />;
}
