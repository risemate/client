import useCoachManagement from '@page/CoachManagement/CoachManagement.hook';
import { dateToFormat } from '@utils/timeUtil';
import type { GetProp, RadioChangeEvent, TableProps } from 'antd';
import { Space, Table, Tag, Radio } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COACHING_STATUS, CoachingResponse } from 'types/coach/coaching';
import { Product } from 'types/coach/product';

import Button from '@common/Button';
import InputModal from '@components/modal/InputModal';

import ExpertMoreAction from './ExpertMoreAction';

const progStatus = {
	PENDING: '대기',
	IN_PROGRESS: '진행중',
	COMPLETED: '완료',
	REJECTED: '거절',
};
const color = {
	PENDING: 'geekblue',
	IN_PROGRESS: 'green',
	COMPLETED: 'volcano',
	REJECTED: 'RED',
};
type ColumnsType<T extends object> = GetProp<TableProps<T>, 'columns'>;

type ExpandableConfig<T extends object> = TableProps<T>['expandable'];

const columns: ColumnsType<CoachingResponse> = [
	{
		title: '이름',
		dataIndex: 'user',
		width: 100,
		key: 'user',
		render: (user: { name: string }) => user.name,
	},
	{
		title: '상품',
		dataIndex: 'product',
		key: 'product',
		render: (product: Product) => (
			<Link
				to={`/experts/${product._id}`}
				style={{ textDecoration: 'underline', color: 'blue' }}
			>
				{product.productTitle.slice(0, 10)}...
			</Link>
		),
	},
	{
		title: '결제금액',
		dataIndex: 'paidAmount',
		width: 100,
		key: '_id',
		render: data => `₩${data}`,
	},
	{
		title: '문서제목',
		dataIndex: 'reviseDoc',
		width: 180,
		key: '_id',
		render: data => data.docTitle,
	},
	{
		title: '상태',
		dataIndex: 'progressStatus',
		width: 80,

		key: 'status',
		render: (state: COACHING_STATUS) => {
			return <Tag color={color[state]}>{progStatus[state]}</Tag>;
		},
	},
	{
		title: '문서',
		key: 'originDoc',
		width: 190,
		render: data => (
			<Space size='middle'>
				<Link to={`/networks/docs/${data.originDoc}`} style={{ color: 'blue' }}>
					원본보기
				</Link>
				<Button size='small'>
					<Space>첨삭하기</Space>
				</Button>
			</Space>
		),
	},
	{
		title: '생성날짜',
		dataIndex: 'createdAt',
		width: 100,
		key: 'createdAt',
		render: date => dateToFormat(date),
	},
	{
		title: 'UID',
		width: 100,
		dataIndex: '_id',
		key: '_id',
	},
];

const ExpertCoachingManagement: React.FC = () => {
	const { data, pendingList, progressList, completeList, isLoading } =
		useCoachManagement();
	const [filter, setFilter] = useState<COACHING_STATUS | 'ALL'>('ALL'); // 추가된 필터링 상태

	const tableColumns = columns.map(item => ({ ...item, ellipsis: true }));

	const defaultExpandable: ExpandableConfig<CoachingResponse> = {
		expandedRowRender: (record: CoachingResponse) => (
			<div>
				<ExpertMoreAction data={record} />
				<hr />
			</div>
		),
	};

	const tableProps: TableProps<CoachingResponse> = {
		loading: isLoading,
		size: 'middle',
		expandable: defaultExpandable,
		bordered: true,
		scroll: { x: 1100 },
	};

	// 필터링된 데이터 계산
	const filteredData =
		filter === 'ALL' ? data : data.filter(item => item.progressStatus === filter);

	// 필터 변경 핸들러
	const handleFilterChange = (e: RadioChangeEvent) => {
		setFilter(e.target.value);
	};

	return (
		<Wrap>
			<h3>전문가 코칭관리</h3>
			<p>
				승인 대기: {pendingList.length} | 진행 중 : {progressList.length} | 완료한 첨삭:{' '}
				{completeList.length}
				<br />
				<span className='warn'>2일 이상 미응답시 자동 거절처리 됩니다.</span>
			</p>
			<hr />
			<br />
			<Radio.Group
				onChange={handleFilterChange}
				value={filter}
				style={{ marginBottom: '16px' }}
			>
				<Radio.Button value='ALL'>전체</Radio.Button>
				<Radio.Button value='PENDING'>대기</Radio.Button>
				<Radio.Button value='IN_PROGRESS'>진행중</Radio.Button>
				<Radio.Button value='COMPLETED'>완료</Radio.Button>
			</Radio.Group>

			<Table<CoachingResponse>
				{...tableProps}
				pagination={{ position: ['bottomCenter'] }}
				columns={tableColumns}
				dataSource={
					filteredData ? filteredData.map(item => ({ ...item, key: item._id })) : []
				}
				// scroll={scroll}
			/>
		</Wrap>
	);
};

export default ExpertCoachingManagement;

// 스타일링
const Wrap = styled.div`
	padding: 16px;
	h3 {
		padding: 20px;
		font-size: 24px;
		font-weight: bolder;
		text-align: center;
	}
	.warn {
		color: red;
	}
`;
