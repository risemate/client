import PortOne from '@portone/browser-sdk/v2';

export type PaymentResponse = {
	code: string;
	message: string;
	paymentId: string;
	transactionType: string;
	txId: string;
};
export const onClickPayment = async (data: {
	price: number;
	orderName: string;
	// eslint-disable-next-line
	user: any; // as User
}): Promise<PaymentResponse | undefined> => {
	const res = (await PortOne.requestPayment({
		pgProvider: 'PG_PROVIDER_SMARTRO_V2',
		storeId: process.env.VITE_IMP_STORE_ID as string,
		channelKey: process.env.VITE_IMP_CHANNEL_KEY as string,
		paymentId: `payment${new Date().getTime()}`,
		orderName: data.orderName,
		totalAmount: data.price, //data.price
		currency: 'CURRENCY_KRW',
		payMethod: 'CARD',
		customer: {
			customerId: data.user._id,
			fullName: data.user.name,
			phoneNumber: '01012345678', //필수
			email: data.user.email,
		},
	})) as PaymentResponse;

	return res;
};
// https://developers.portone.io/docs/ko/v2-payment/webhook?v=v2

// Transaction.Ready: 결제창이 열렸을 때 //서버에서 필요
// Transaction.Paid: 결제(예약 결제 포함)가 승인되었을 때 (모든 결제 수단)
// Transaction.VirtualAccountIssued: 가상계좌가 발급되었을 때
// Transaction.PartialCancelled: 결제가 부분 취소되었을 때
// Transaction.Cancelled: 결제가 완전 취소되었을 때
// Transaction.Failed: 결제(예약 결제 포함)가 실패했을 때
// Transaction.PayPending: 결제 승인 대기 상태가 되었을 때 (해외 결제시 발생 가능)
// Transaction.CancelPending: (결제 취소가 비동기로 수행되는 경우) 결제 취소를 요청했을 때
