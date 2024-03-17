import { CareerType, DocType } from 'types/career/careerDocument';
import { Coverletter } from 'types/career/coverletter';
import { Resume } from 'types/career/resume';

export type CareersQueryProps = {
	docType?: DocType;
	careerType?: CareerType;
};

export type CoverletterUpdateProps = {
	id: string;
	body: Partial<Coverletter>;
};

export type ResumeUpdateProps = {
	id: string;
	body: Partial<Resume>;
};

export type AiQueryProps = {
	orgCareerId: string;
};
