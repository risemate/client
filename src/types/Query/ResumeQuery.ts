import { CareerType, DocType } from 'types/CareerDocument';
import { Resume } from 'types/Resume';

export type CareersQueryProps = {
	docType?: DocType;
	careerType?: CareerType;
};

export type ResumeUpdateProps = {
	id: string;
	body: Partial<Resume>;
};
