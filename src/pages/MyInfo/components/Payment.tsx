import React from 'react';
import { Column } from 'types/common/column';

import Table from '@common/Table';

type PaymentData = {
	date: string;
	category: string;
	paid: string;
	received: string;
	point: string;
};

export default function Payment() {
	const columns: Column<PaymentData>[] = [
		{ key: 'date', title: '충전일' },
		{ key: 'category', title: '구분' },
		{ key: 'paid', title: '결제 금액' },
		{ key: 'received', title: '받은 금액' },
		{ key: 'point', title: '적립 포인트' },
	];
	const data = [
		{
			date: '2023.05.39 12:30',
			category: '000님 이력서 결제 대금',
			paid: '',
			received: '20,000원',
			point: '',
		},
		{
			date: '2023.03.22 08.30',
			category: '000전문가 이력서 첨삭 후기',
			paid: '',
			received: '',
			point: '200p',
		},
		{
			date: '2023.02.21 06:22',
			category: '000전문가 이력서 첨삭 결제 대금 (Standard)',
			paid: '30,000원',
			received: '',
			point: '20p',
		},
	];

	const totals = [
		{ key: '보유 포인트', value: '220p' },
		{ key: '총 결제 금액', value: '30,000원' },
		{ key: '총 받은 금액', value: '20,000원' },
	];
	return (
		<section>
			<h3>결제 내역 확인</h3>
			<Table columns={columns} data={data} totals={totals} />
		</section>
	);
}
