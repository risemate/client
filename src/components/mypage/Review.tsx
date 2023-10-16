import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Column } from 'types/Column';

import Table from '@common/Table';

type ReviewData = {
	date: string;
	content: string;
	link: ReactNode;
};

export default function Review() {
	const columns: Column<ReviewData>[] = [
		{ key: 'date', title: '후기 날짜' },
		{ key: 'content', title: '내용' },
		{ key: 'link', title: '해당 페이지로 이동' },
	];
	const data = [
		{
			date: '2023.05.39 12:30',
			content:
				'000전문가님 덕분에 원하는 곳 서류합격했습니다! 피드백도 확실하고 명확하게 해주셔서 알아보기 편했습니다.',
			link: <StyledButton type='button'>링크로 이동</StyledButton>,
		},
	];

	const totals = [{ key: '후기 갯수', value: '1개' }];
	return (
		<section>
			<h3>내가 남긴 후기 확인</h3>
			<Table columns={columns} data={data} totals={totals} />
		</section>
	);
}

const StyledButton = styled.button`
	color: ${({ theme }) => theme.colors.darkGrey};
`;
