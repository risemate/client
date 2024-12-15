// import { Auth } from 'types/auth';
// import { Career, CareerType } from 'types/career/careerDocument';
import { BaseUser, User } from 'types/auth';
import { CareerType } from 'types/career/careerDocument';

import { PackageCategory, PackageDetail } from './product';

export type CHAT_ROLE = 'SYSTEM' | 'CHAT';
export type CoachingRequestState = {
	productId: string;
	productTitle: string;
	selectedPackage: PackageCategory;
	selectedPackageInfo: PackageDetail;
	careerTypes: CareerType[];
};

export type CoachingRequest = {
	productId: string;
	selectedPackage: PackageCategory;
	careerType: CareerType;
	amount: number;
	originDocId: string;
	impUid: string;
	paidAt: number;
	merchantUid: string;
	// amount: number;
};

export type CoachingDecideRequest = {
	approve: boolean;
	message: string;
};

// export const COACHING_STATUS = ['PENDING', 'IN_PROGRESS', 'COMPLETED'] as const;
export type COACHING_STATUS = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'REJECTED';
export interface CoachingResponse {
	_id: string;
	careerType: string; // Enum 가능: e.g., 'RESUME'
	user: BaseUser;
	payment: string;
	chat: {
		createdAt: string;
		role: CHAT_ROLE;
		content: string;
		_id: string;
	}[];
	expert: {
		_id: string;
		email: string;
		name: string;
		nickname: string;
		picture: string;
	};
	product: {
		_id: string;
		expert: string;
		productTitle: string;
		subTitle: string;
		coverImage: string | null; // Optional field
	};
	originDoc: string;
	docTitle: string;
	reviseDoc: {
		_id: string;
		public: boolean;
		coverImage: string | null; // Optional field
		docTitle: string;
	};
	selectedPackage: PackageCategory;
	price: number;
	discountRate: number; // Percentage (0–100)
	coin: number;
	paidAmount: number;
	userRequestMessage: string; // Could be empty
	progressStatus: COACHING_STATUS; // Enum 가능: e.g., 'PENDING', 'COMPLETED'
	expertCompleted: boolean; // Unknown structure, likely an array of strings or objects
	userCompleted: boolean; // Unknown structure, likely an array of strings or objects
	createdAt: string; // ISO8601 date string
	updatedAt: string; // ISO8601 date string

	__v: number;
}

export type CoachingExpertResponse = CoachingResponse & {
	expertCompleted: boolean;
	userCompleted: boolean;
};
