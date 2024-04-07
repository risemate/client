import { Activity, Education, Project, WorkExperience } from 'types/career/resume';

export type ApplyExpertProps = {
	message: string;
	resumeId: string;
};

export type ExpertResumeType = {
	workExperiences: WorkExperience[];
	projects: Project[];
	educations: Education[];
	activities: Activity[];
};
