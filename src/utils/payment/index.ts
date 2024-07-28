import { PAYMETHOD } from 'types/payment';
import { RequestPayResponse } from 'types/setting/pyment';

// export type RequestPayParams = {
// 	pg: string;
// 	pay_method: PAYMETHOD;
// 	merchant_uid: string;
// 	amount: 1000;
// 	name: string;
// 	buyer_name: string;
// 	buyer_tel: string;
// 	buyer_email: string;
// 	buyer_addr?: string;
// 	buyer_postcode?: string;
// 	customer_uid: string;
// 	customer_id: string;
// };

export const onClickPayment = (
	data: {
		price: number;
		title: string;
		name: string;
		phoneNumber: string;
		email: string;
		userId: string;
	},
	callback: (response: RequestPayResponse) => void,
) => {
	if (!window.IMP) return;
	const { IMP } = window;
	IMP.init(process.env.REACT_APP_IMP_CODE as string);
	IMP.request_pay(
		{
			pg: 'uplus',
			pay_method: 'card' as PAYMETHOD,
			merchant_uid: `rm_${data.userId}_${new Date().getTime()}`,
			amount: data.price,
			name: data.title,
			buyer_name: data.name,
			buyer_tel: data.phoneNumber,
			buyer_email: data.email,
			// buyer_addr: '',
		},
		callback,
	);
};
