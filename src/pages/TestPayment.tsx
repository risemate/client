import { onClickPayment } from '@utils/payment';

import Button from '@common/Button';

function PaymentExampleCom() {
	const payOnClick = async () => {
		const response = await onClickPayment({
			price: 100,
			orderName: '이력서첨삭해드립니다.',
			user: { email: 'kor.sshin@gmail.com', _id: 'f5s5f8g2s5a5fgd' },
		});
		if (response?.code !== null) {
			alert(response?.message);
		} else {
			alert('결제성공: ' + response.message);
			//fetch('api',{paymentUid: response.paymentId,...})
		}
	};
	return (
		<div>
			<Button onClick={payOnClick}>결제하기</Button>
		</div>
	);
}

export default PaymentExampleCom;
