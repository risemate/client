import { Auth } from './auth';
import { Product } from './coach/product';

export const PAYMENT_TRANSACTION = ['PAYMENT', 'CANCEL', 'WITHDRAW'] as const;
export type PAYMENT_TRANSACTION = (typeof PAYMENT_TRANSACTION)[number];

export type PaymentResponse = {
	impUid: string;
	amount: number;
	transaction: string;
	user: Auth;
	product: Product;
};
