import { BaseUser } from 'types/auth';
import { Project, WorkExperience } from 'types/career/resume';

export type Product = {
	user: BaseUser;
	public: boolean;
	productTitle: string;
	subTitle: string;
	coverImage: string;
	category: Category;
	images: Image[];
	description: string;
	reviewCount: number;
	avgReviewScore: number;
	csCount: number;
	noAnswerCsCount: number;
	searchKeyword: string[];
	packages: Package;
	workExperiences: WorkExperience[];
	projects: Project[];
	_id: string;
	__v: number;
};

export type Category = {
	rootCategory: '이력서' | '자기소개서';
	subCategory: string;
	thirdCategory: string[];
};

export type Image = {
	name: string;
	url: string;
	_id: string;
};

export type Package = {
	BASIC: PackageDetail | null;
	STANDARD: PackageDetail | null;
	ECONOMY: PackageDetail | null;
	ADVANCED: PackageDetail | null;
	DELUXE: PackageDetail | null;
	PREMIUM: PackageDetail | null;
};

export type PackageDetail = {
	price: number | null;
	packageTitle: string;
	description: string;
	providerOptions: {
		name: string;
		_id: string;
	}[];
	_id: string;
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
	product: {
		productTitle: string;
		subTitle: string;
		coverImage: string;
		expert: Expert;
		_id: string;
	};
	score: number;
	content: string;
	answer: Answer | null;
	createdAt: string;
	updatedAt: string;
	__v: number;
};

export type RequestAnswer = {
	content: string;
};

export type RequestReview = {
	content: string;
	score: number;
};
