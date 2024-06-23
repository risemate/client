import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Auth } from 'types/auth';

import Button from '@common/Button';

import { Table, TableCell, TableHeader, TableHeaderCell, TableRow } from './Table';

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
function ManageExpertApplicate() {
	const { data, isLoading } = useQuery({
		queryKey: ['admin', 'expertApplications'],
		queryFn: async () => {
			const response = await axios.get('management/expert-applicate-list');
			return response.data as ApplyExpert[];
		},
	});

	return (
		<Wrap>
			<h1>전문가 신청내역</h1>
			{isLoading && <div> Loading... </div>}
			<Table>
				<TableHeader>
					<TableRow>
						<TableHeaderCell>신청 날짜</TableHeaderCell>
						<TableHeaderCell>유저정보</TableHeaderCell>
						<TableHeaderCell>메시지</TableHeaderCell>
						<TableHeaderCell>이력서</TableHeaderCell>
						<TableHeaderCell>관리</TableHeaderCell>
						<TableHeaderCell>상태</TableHeaderCell>
					</TableRow>
				</TableHeader>
				<tbody>{data?.map(item => <Item key={item._id} item={item} />)}</tbody>
			</Table>
		</Wrap>
	);
}

function Item({ item }: { item: ApplyExpert }) {
	return (
		<TableRow>
			<TableCell>{item.createdAt}</TableCell>
			<TableCell>
				<Button variant='mint' size='small'>
					보기
				</Button>
			</TableCell>
			<TableCell>{item.data.message}</TableCell>
			<TableCell>
				<Link to={`/my-info/docs/${item.data.resumeId}`}>보기</Link>
			</TableCell>
			<TableCell>
				<button style={{ color: 'blue' }}>승인</button>|
				<button style={{ color: 'red' }}>거절</button>
			</TableCell>
			<TableCell>
				<span>
					{(item.approve === null && '대기') || (item.approve ? '승인' : '거절')}
				</span>
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
