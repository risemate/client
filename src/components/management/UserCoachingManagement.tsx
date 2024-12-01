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
import UserMoreAction from './UserMoreAction';

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
		title: '상품',
		dataIndex: 'product',
		key: 'product',
		width: 150,
		render: (product: Product) => (
			<Link
				to={`/experts/${product._id}`}
				style={{ textDecoration: 'underline', color: 'blue' }}
			>
				{product.productTitle}
			</Link>
		),
	},
	{
		title: '결제금액',
		dataIndex: 'paidAmount',
		key: '_id',
		width: 100,
		render: data => `₩${data}`,
	},
	{
		title: '상태',
		dataIndex: 'progressStatus',
		key: 'status',
		width: 100,

		render: (state: COACHING_STATUS) => {
			return <Tag color={color[state]}>{progStatus[state]}</Tag>;
		},
	},
	{
		title: '문서제목',
		// dataIndex: 'reviseDoc',
		key: '_id',
		render: data => (
			<Space size='middle'>
				<Link
					to={`/networks/docs/${data.originDoc}`}
					style={{ textDecoration: 'underline', color: 'blue' }}
				>
					{data.docTitle}
				</Link>
			</Space>
		),
	},

	{
		title: '첨삭',
		key: 'originDoc',
		width: 190,
		render: data => (
			<>
				<Button size='small'>
					<Space>첨삭문서</Space>
				</Button>
			</>
		),
	},
	{
		title: '생성날짜',
		dataIndex: 'createdAt',
		key: 'createdAt',
		render: date => dateToFormat(date),
	},
];

const UserCoachingManagement: React.FC = () => {
	const { data, pendingList, progressList, completeList, isLoading } =
		useCoachManagement();
	const [filter, setFilter] = useState<COACHING_STATUS | 'ALL'>('ALL'); // 추가된 필터링 상태

	const tableColumns = columns.map(item => ({ ...item, ellipsis: true }));

	const defaultExpandable: ExpandableConfig<CoachingResponse> = {
		expandedRowRender: (record: CoachingResponse) => (
			<div>
				<UserMoreAction data={record} />
				<hr />
			</div>
		),
	};

	const tableProps: TableProps<CoachingResponse> = {
		loading: isLoading,
		size: 'middle',
		expandable: defaultExpandable,
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
			<h3>첨삭관리</h3>
			<p>
				승인대기요청: {pendingList.length} | 진행중인 첨삭 : {progressList.length} |
				완료된 첨삭: {completeList.length}
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

export default UserCoachingManagement;

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
