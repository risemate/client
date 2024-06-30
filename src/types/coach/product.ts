import { BaseUser } from 'types/auth';
import { CareerType } from 'types/career/careerDocument';
import { Project, WorkExperience } from 'types/career/resume';

export type ProductRequest = {
	_id: string;
	productTitle: string;
	subTitle: string;
	coverImage: string;
	images: Image[];
	description: string;
	careerTypes: CareerType[];
	searchKeyword: string[];
	packages: Package;
	public: boolean;
};

export type Product = ProductRequest & {
	user?: BaseUser;
	expert: string;
	reviewCount: number;
	category: Category;
	avgReviewScore: number;
	csCount: number;
	noAnswerCsCount: number;
	workExperiences: WorkExperience[];
	projects: Project[];
	__v: number;
};

export const Category = ['이력서', '자기소개서', '이력서/자기소개서'] as const;

export type Category = {
	rootCategory: (typeof Category)[number];
	subCategory: (typeof Category)[number] | '';
	thirdCategory: string[];
};

export type Image = {
	name: string;
	url: string;
	_id: string;
};

export const PackageCategory = ['BASIC', 'ADVANCED', 'PREMIUM'] as const;
export type PackageCategory = (typeof PackageCategory)[number];

export type Package = {
	BASIC: PackageDetail | null;
	// STANDARD?: PackageDetail | null;
	// ECONOMY?: PackageDetail | null;
	ADVANCED: PackageDetail | null;
	// DELUXE?: PackageDetail | null;
	PREMIUM: PackageDetail | null;
};

export type PackageDetail = {
	price: number | null;
	packageTitle: string;
	description: string;
	providerOptions: PackageProviderOption[];
	_id: string;
};

export type PackageProviderOption = {
	name: string;
	description: string;
};

export type Expert = {
	nickname: string;
	name: string;
	_id: string;
};

export type Answer = {
	content: string;
	expert: Expert;
	_id: string;
	createdAt: string;
	updatedAt: string;
};

export type CS = {
	_id: string;
	user: BaseUser;
	product: {
		productTitle: string;
		subTitle: string;
		coverImage: string;
		expert: Expert;
		_id: string;
	};
	content: string;
	completed: boolean;
	answer: Answer | null;
	createdAt: string;
	updatedAt: string;
	__v: number;
};

export type Review = {
	_id: string;
	user: BaseUser;
	product: string;
	score: number;
	content: string;
	answer: Answer | null;
	createdAt: string;
	updatedAt: string;
	__v: number;
};

export type RequestAnswer = {
	id: string;
	content: string;
};

export type RequestReview = {
	id: string;
	content: string;
	score: number;
};
