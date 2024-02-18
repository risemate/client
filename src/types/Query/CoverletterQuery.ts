import { CareerType, DocType } from 'types/CareerDocument';
import { Coverletter } from 'types/Coverletter';

export type CareersQueryProps = {
	docType?: DocType;
	careerType?: CareerType;
};

export type CoverletterUpdateProps = {
	id: string;
	body: Partial<Coverletter>;
};
