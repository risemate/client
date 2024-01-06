import { CareerType, DocType } from 'types/CareerDocument';

export type CareersQueryProps = {
	docType?: DocType;
	careerType?: CareerType;
};

export type PublicCareersQueryProps = {
	page?: number;
	pageSize?: number;
};
