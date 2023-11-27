import { mockResume } from 'models/ResumeData';
import React from 'react';

import Profile from '@components/resume/resume-view/Profile';

export default function ExpertProfile() {
	return <Profile profile={mockResume.profile} />;
}
