import { BaseUser } from './User';

export type CareerType = 'RESUME' | 'COVERLETTER';
export const CareerTypeList: CareerType[] = ['RESUME', 'COVERLETTER'];

export type DocType = 'BASIC' | 'AI' | 'COACHING';
export const DocTypeList: DocType[] = ['BASIC', 'AI', 'COACHING'];

export type Career<T = unknown> = {
	coverLetter: string;
	feedback?: string;
	contactPublic: boolean;
	public: boolean;
	user: BaseUser;
	docTitle: string;
	parentId: string | null;
	careerType: CareerType;
	docType: DocType;
	doc: T;
	_id: string;
	createdAt: string;
	updatedAt: string;
	coverImage: string;
	childrenDocCount: number;
	description?: string;
};
