// import { Auth } from 'types/auth';
// import { Career, CareerType } from 'types/career/careerDocument';
import { CareerType } from 'types/career/careerDocument';

// import { Expert, PackageCategory, Product } from './product';
import { PackageCategory } from './product';

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
	_id: string;
	careerType: CareerType;
	// user: Auth;
	user: string;
	// payment: PaymentRequest;
	payment: string;
	// expert: Expert;
	expert: string;
	// product: Product;
	product: string;
	// originDoc: Career;
	// reviseDoc: Career;
	originDoc: string;
	reviseDoc: string;
	selectedPackage: PackageCategory;
	price: number | null;
	discountRate: number | null;
	// usedCoin: number;
	coin: number | null;
	paidAmount: number | null;
	// paymentAmount: number;
	createdAt: string;
	updatedAt: string;
	// expertCompleted: {
	// 	completed: boolean;
	// 	message: string;
	// 	date: Date;
	// };
	// userCompleted: {
	// 	completed: boolean;
	// 	message: string;
	// 	date: Date;
	// };
	progressStatus: COACHING_STATUS;
};

export type CoachingExpertResponse = CoachingResponse & {
	expertCompleted: string[];
	userCompleted: string[];
};
