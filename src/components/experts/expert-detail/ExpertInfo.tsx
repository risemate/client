import React from 'react';
import {
	Project as ProjectType,
	WorkExperience as WorkExperienceType,
} from 'types/Resume';

import Project from '@components/resume/resume-view/Project';
import WorkExperience from '@components/resume/resume-view/WorkExperience';

import BaseSection from './BaseSection';

interface ExpertInfoProps {
	workExperiences: WorkExperienceType[];
	projects: ProjectType[];
}

export default function ExpertInfo({ workExperiences, projects }: ExpertInfoProps) {
	return (
		<BaseSection>
			<h3>전문가 정보</h3>
			<WorkExperience workExperiences={workExperiences} />
			<Project projects={projects} />
		</BaseSection>
	);
}
