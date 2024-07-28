import { Auth } from './auth';
import { Product } from './coach/product';

export const PAYMENT_TRANSACTION = ['PAYMENT', 'CANCEL', 'WITHDRAW'] as const;
export type PAYMENT_TRANSACTION = (typeof PAYMENT_TRANSACTION)[number];
export type PAYMETHOD =
	| 'card'
	| 'trans'
	| 'vbank'
	| 'phone'
	| 'paypal'
	| 'applepay'
	| 'naverpay'
	| 'samsung'
	| 'kpay'
	| 'kakaopay'
	| 'payco'
	| 'lpay'
	| 'ssgpay'
	| 'tosspay'
	| 'cultureland'
	| 'smartculture'
	| 'happymoney'
	| 'booknlife'
	| 'point'
	| 'wechat'
	| 'alipay'
	| 'unionpay'
	| 'tenpay';

export type PaymentResponse = {
	impUid: string;
	amount: number;
	transaction: string;
	user: Auth;
	product: Product;
};
