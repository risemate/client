import { onClickPayment } from '@utils/payment';
import { RequestPayResponse } from 'types/setting/pyment';

import Button from '@common/Button';

function PaymentExampleCom() {
	const payCallback = (response: RequestPayResponse) => {
		const { success, error_msg } = response;
		if (success) {
			alert('결제 성공');
		} else {
			alert(`결제 실패: ${error_msg}`);
		}
	};
	const payOnClick = () => {
		onClickPayment(
			{
				price: 1000,
				title: '이력서첨삭해드립니다.',
				name: '김뽀삐',
				phoneNumber: '01056624661',
				email: 'kor.sshin@gmail.com',
				userId: 'f5s5f8g2s5a5fgd',
			},
			payCallback,
		);
	};
	return (
		<div>
			<Button onClick={payOnClick}>결제하기</Button>
		</div>
	);
}

export default PaymentExampleCom;
