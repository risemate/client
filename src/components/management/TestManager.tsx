import useCoachManagement from '@page/CoachManagement/CoachManagement.hook';
import type { GetProp, RadioChangeEvent, TableProps } from 'antd';
import { Space, Table, Tag } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { COACHING_STATUS, CoachingResponse } from 'types/coach/coaching';

import Button from '@common/Button';
import InputModal from '@components/modal/InputModal';

import CoachingConfirm from './CoachingConfirm';

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
		title: '상태',
		dataIndex: 'progressStatus', // 데이터의 이름 필드와 매핑
		key: 'status', // 열의 고유 키
		render: (state: COACHING_STATUS) => {
			if (state === 'PENDING') {
				return <Tag color={'green'}>대기</Tag>;
			} else {
				return (
					<Tag color={'red'} key={state}>
						진행중
					</Tag>
				);
			}
		}, // 객체의 특정 필드 접근
	},
	{
		title: '문서',
		key: 'docActions', // 열의 고유 키
		dataIndex: '_id',
		sorter: true,
		render: () => (
			<Space size='middle'>
				<Link to={'./'}>원본보기</Link>
				<a>
					<Space>첨삭하기</Space>
				</a>
			</Space>
		),
	},
];

const CoachingManager: React.FC = () => {
	const { data } = useCoachManagement();
	console.log(data);
	const [loading, setLoading] = useState(false);
	const [hasData, setHasData] = useState(true);
	const [tableLayout, setTableLayout] = useState();
	const [ellipsis, setEllipsis] = useState(false);
	const [xScroll, setXScroll] = useState<string>();
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
		// showHeader,
		tableLayout,
	};

	return (
		<>
			<h3>전문가: 코칭관리</h3>
			<p>
				미확인 첨삭요청이 있습니다. <br />
				<span>2일 이상 미응답시 자동 거절처리 됩니다.</span>
			</p>
			<Table<CoachingResponse>
				{...tableProps}
				pagination={{ position: ['bottomCenter'] }}
				columns={tableColumns}
				dataSource={hasData ? data.map(item => ({ ...item, key: item._id })) : []}
				// scroll={scroll}
			/>
		</>
	);
};

export default CoachingManager;
