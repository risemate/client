import { CareerType } from "types/career/careerDocument";
import { PackageCategory } from "./product";

export type ProgressStatus = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED'

export type Pending = {
	temp: number;
};

export type Progress = {
	temp: number;
};

export type Complete = {
	temp: number;
};

export type Management = {
	pending: Pending[];
	progress: Progress[];
	complete: Complete[];
};

export type ManagementItemDTO = {
	_id: string;
	careerType: CareerType;
	user: string;
	payment: string;
	expert: string;
	product: string;
	originDoc: string;
	reviseDoc: string;
	selectedPackage: PackageCategory;
	price: number;
	discountRate: number;
	coin: number;
	paidAmount: number;
	progressStatus: ProgressStatus;
	createdAt: string;
	updatedAt: string;
	__v: number;
}