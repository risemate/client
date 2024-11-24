import useCoachManagement from '@page/CoachManagement/CoachManagement.hook';
import type { GetProp, RadioChangeEvent, TableProps } from 'antd';
import { Space, Table, Tag, Radio } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COACHING_STATUS, CoachingResponse } from 'types/coach/coaching';

import Button from '@common/Button';
import InputModal from '@components/modal/InputModal';

import CoachingConfirm from './CoachingConfirm';

const progStatus = { PENDING: '대기', IN_PROGRESS: '진행중', COMPLETED: '완료' };
const color = { PENDING: 'geekblue', IN_PROGRESS: 'green', COMPLETED: 'volcano' };
type ColumnsType<T extends object> = GetProp<TableProps<T>, 'columns'>;
type TablePagination<T extends object> = NonNullable<
	Exclude<TableProps<T>['pagination'], boolean>
>;
type ExpandableConfig<T extends object> = TableProps<T>['expandable'];

const columns: ColumnsType<CoachingResponse> = [
	{
		title: '이름',
		dataIndex: 'user', // 데이터의 이름 필드와 매핑
		key: 'user', // 열의 고유 키
		render: (user: { name: string }) => user.name, // 객체의 특정 필드 접근
	},
	{
		title: '결제금액',
		dataIndex: 'paidAmount', // 데이터의 이름 필드와 매핑
		key: '_id', // 열의 고유 키
		render: data => `₩${data}`, // 객체의 특정 필드 접근
	},
	{
		title: '문서제목',
		dataIndex: 'reviseDoc', // 데이터의 이름 필드와 매핑
		key: '_id', // 열의 고유 키
		render: data => data.docTitle, // 객체의 특정 필드 접근
	},
	{
		title: '상태',
		dataIndex: 'progressStatus', // 데이터의 이름 필드와 매핑
		key: 'status', // 열의 고유 키
		render: (state: COACHING_STATUS) => {
			return <Tag color={color[state]}>{progStatus[state]}</Tag>;
		}, // 객체의 특정 필드 접근
	},
	{
		title: '문서',
		key: 'originDoc', // 열의 고유 키
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
];

const CoachingManager: React.FC = () => {
	const { data, pendingList, progressList, completeList } = useCoachManagement();
	const [loading, setLoading] = useState(false);
	const [hasData, setHasData] = useState(true);
	const [tableLayout, setTableLayout] = useState();
	const [ellipsis, setEllipsis] = useState(false);
	const [xScroll, setXScroll] = useState<string>();
	const [filter, setFilter] = useState<COACHING_STATUS | 'ALL'>('ALL'); // 추가된 필터링 상태

	const tableColumns = columns.map(item => ({ ...item, ellipsis }));
	if (xScroll === 'fixed') {
		tableColumns[0].fixed = true;
		tableColumns[tableColumns.length - 1].fixed = 'left';
	}

	const defaultExpandable: ExpandableConfig<CoachingResponse> = {
		expandedRowRender: (record: CoachingResponse) => (
			<div>
				<p> {record.userRequestMessage} </p>
				<CoachingConfirm pending={record} />
				<hr />
			</div>
		),
	};

	const tableProps: TableProps<CoachingResponse> = {
		loading,
		size: 'middle',
		expandable: defaultExpandable,
		tableLayout,
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
				dataSource={hasData ? filteredData.map(item => ({ ...item, key: item._id })) : []}
				// scroll={scroll}
			/>
		</Wrap>
	);
};

export default CoachingManager;

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
