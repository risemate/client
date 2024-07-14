import { Auth } from 'types/auth';
import { Career, CareerType } from 'types/career/careerDocument';

import { Expert, PackageCategory, Product } from './product';

export type CoachingRequest = {
	productId: string;
	paymentId: string;
	selectedPackage: PackageCategory;
	originDocId: string;
	careerType: CareerType;
};

export type CoachingDecideRequest = {
	approve: boolean;
	message: string;
};

export const COACHING_STATUS = [
	'PENDING',
	'PAYMENT',
	'IN_PROGRESS',
	'COMPLETED',
] as const;
export type COACHING_STATUS = (typeof COACHING_STATUS)[number];

export type CoachingResponse = {
	careerType: CareerType;
	user: Auth;
	payment: PaymentRequest;
	expert: Expert;
	product: Product;
	originDoc: Career;
	reviseDoc: Career;
	selectedPackage: PackageCategory;
	price: number;
	discountPrice: number;
	usedCoin: number;
	paymentAmount: number;
	expertCompleted: {
		completed: boolean;
		message: string;
		date: Date;
	};
	userCompleted: {
		completed: boolean;
		message: string;
		date: Date;
	};
	progressStatus: COACHING_STATUS;
};
