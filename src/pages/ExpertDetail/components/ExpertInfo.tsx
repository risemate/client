import React from 'react';
import {
	Project as ProjectType,
	WorkExperience as WorkExperienceType,
} from 'types/career/resume';

import Project from '@components/resume-view/ViewTemplate/Project';
import WorkExperience from '@components/resume-view/ViewTemplate/WorkExperience';

import BaseSection from './BaseSection';

interface ExpertInfoProps {
	workExperiences: WorkExperienceType[] | undefined | null;
	projects: ProjectType[] | undefined | null;
	sectionRef: React.RefObject<HTMLElement>;
}

export default function ExpertInfo({
	workExperiences = [],
	projects = [],
	sectionRef,
}: ExpertInfoProps) {
	return (
		<>
			<BaseSection ref={sectionRef}>
				<h3>전문가 정보</h3>
				{workExperiences && <WorkExperience workExperiences={workExperiences} />}
				{projects && <Project projects={projects} />}
			</BaseSection>
		</>
	);
}
