import React from 'react';
import {
	Project as ProjectType,
	WorkExperience as WorkExperienceType,
} from 'types/career/resume';

import Project from '@components/resume-view/ViewTemplate/Project';
import WorkExperience from '@components/resume-view/ViewTemplate/WorkExperience';

import BaseSection from './BaseSection';

interface ExpertInfoProps {
	workExperiences: WorkExperienceType[] | undefined;
	projects: ProjectType[] | undefined;
}

export default function ExpertInfo({
	workExperiences = [],
	projects = [],
}: ExpertInfoProps) {
	return (
		<BaseSection>
			<h3>전문가 정보</h3>
			<WorkExperience workExperiences={workExperiences} />
			<Project projects={projects} />
		</BaseSection>
	);
}
