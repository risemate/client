import { useModal } from '@hooks/atoms/useModalAtom';
import { useQuery } from '@tanstack/react-query';
import { dateToFormat } from '@utils/timeUtil';
import axios from 'axios';
import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Auth } from 'types/auth';

import Button from '@common/Button';
import Modal from '@components/modal/base/Modal';

import {
	Table,
	TableCell,
	TableHeader,
	TableHeaderCell,
	TableRow,
} from '../common/Table';

interface ApplyExpert {
	_id: string;
	user: Auth;
	data: {
		message: string;
		resumeId: string;
	};
	manageType: 'EXPERT_APPLICATE';
	approveStatus: 'REVIEWING' | 'FINISHED';
	createdAt: string;
	updatedAt: string;
	approve: boolean | null;
}
const getAppliList = async () => {
	const response = await axios.get('management/expert-applicate-list');
	return response.data as ApplyExpert[];
};

function ManageExpertApplicate() {
	const { data, isLoading, refetch } = useQuery({
		queryKey: ['admin', 'expertApplications'],
		queryFn: getAppliList,
	});

	return (
		<Wrap>
			<h1>전문가 신청내역</h1>

			<Table>
				<TableHeader>
					<TableRow>
						<TableHeaderCell>신청 날짜</TableHeaderCell>
						<TableHeaderCell>유저정보</TableHeaderCell>
						<TableHeaderCell>메시지</TableHeaderCell>
						<TableHeaderCell>이력서</TableHeaderCell>
						<TableHeaderCell>관리</TableHeaderCell>
						<TableHeaderCell>상태</TableHeaderCell>
						<TableHeaderCell>처리날짜</TableHeaderCell>
					</TableRow>
				</TableHeader>
				{isLoading ? (
					<caption> Loading... </caption>
				) : (
					<tbody>
						{data?.map(item => <Item key={item._id} item={item} refetch={refetch} />)}
					</tbody>
				)}
			</Table>
		</Wrap>
	);
}

function Item({ item, refetch }: { item: ApplyExpert; refetch: () => void }) {
	const { openModal: approveOpen } = useModal('expert-approve');
	const { openModal: refuseOpen } = useModal('expert-refuse');
	const [eu, setEu] = useState<string>('');
	const onSubmit = useCallback(
		async (approve: boolean) => {
			await axios
				.patch(`/management/expert-applicate/${item._id}`, {
					message: eu,
					approve: approve,
				})
				.then(res => {
					if (res.data.success) {
						refetch();
						alert('처리 완');
					}
				});
		},
		[eu, item],
	);

	return (
		<TableRow>
			<TableCell>{item.createdAt}</TableCell>
			<TableCell>
				<Button variant='mint' size='small'>
					{item.user.name}
				</Button>
			</TableCell>
			<TableCell>{item.data.message}</TableCell>
			<TableCell>
				<Link to={`/my-info/docs/${item.data.resumeId}`}>보기</Link>
			</TableCell>
			<TableCell>
				{item.approveStatus === 'REVIEWING' && (
					<div>
						<button style={{ color: 'blue' }} onClick={approveOpen}>
							승인
						</button>
						|
						<button style={{ color: 'red' }} onClick={refuseOpen}>
							거절
						</button>
						<Modal
							title='전문가 요청관리'
							queryKey='expert-approve'
							onClick={() => onSubmit(true)}
						>
							{item.user.name + '님을 전문가로 승인하시겠습니까?'}
						</Modal>
						<Modal
							title='전문가 요청관리'
							queryKey='expert-refuse'
							onClick={() => onSubmit(false)}
						>
							<RefuWrap>
								<h3>사유</h3>
								<textarea
									style={{ width: '100%' }}
									onChange={e => setEu(e.target.value)}
								/>
							</RefuWrap>
						</Modal>
					</div>
				)}
			</TableCell>
			<TableCell>
				<span>
					{(item.approve === null && '대기') || (item.approve ? '승인' : '거절')}
				</span>
			</TableCell>
			<TableCell>
				{item.createdAt !== item.updatedAt && dateToFormat(item.updatedAt)}
			</TableCell>
		</TableRow>
	);
}

export default ManageExpertApplicate;

const Wrap = styled.div`
	h1 {
		font-size: 20px;
		font-weight: 600;
		margin-bottom: 20px;
	}
`;

const RefuWrap = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	h3 {
		font-weight: bold;
		font-size: 19px;
		text-align: center;
	}
	textarea {
		width: 100%;
		height: 100px;
		padding: 10px;
	}
`;
