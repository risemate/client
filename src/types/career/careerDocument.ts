import { BaseUser } from 'types/auth';

export const CareerType = ['RESUME', 'COVERLETTER'] as const;
export type CareerType = (typeof CareerType)[number];

export const DocType = ['BASIC', 'AI', 'COACHING'] as const;
export type DocType = (typeof DocType)[number];

export const AiStatus = ['IN_PROGRESS', 'COMPLETED'] as const;
export type AiStatus = (typeof AiStatus)[number];

export type Career<T = unknown> = {
	description: string;
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
	coaching?: object; //수정필요
	childAi: string | null;
	aiStatus: AiStatus | null;
};
