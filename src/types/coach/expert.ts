import { Activity, Education, Project, WorkExperience } from 'types/career/resume';

export type ApplyExpertProps = {
	message: string | null;
	resumeId: string | null;
};

export type ApplyExpertResponse = {
	message: string;
	success: boolean;
};

export type ExpertResumeType = {
	workExperiences: WorkExperience[];
	projects: Project[];
	educations: Education[];
	activities: Activity[];
};
