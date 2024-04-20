import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import styled from 'styled-components';

function ManageExpertApplicate() {
	const { data, isLoading } = useQuery({
		queryKey: ['admin', 'expertApplications'],
		queryFn: async () => {
			const response = await axios.get('management/expert-applicate-list');
			return response.data;
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
					</TableRow>
				</TableHeader>
				<tbody>{data?.map((item: any) => <Item key={item._id} item={item} />)}</tbody>
			</Table>
		</Wrap>
	);
}

function Item({ item }: { item: any }) {
	return (
		<TableRow>
			<TableCell>{item.createdAt}</TableCell>
			<TableCell>
				<button>보기</button>
			</TableCell>
			<TableCell>{item.data.message}</TableCell>
			<TableCell>
				<a href={item.resumeUrl}>보기</a>
			</TableCell>
			<TableCell>
				<button>승인</button>|<button>거절</button>
			</TableCell>
		</TableRow>
	);
}

export default ManageExpertApplicate;

const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
`;

const TableHeader = styled.thead`
	background-color: #f0f0f0;
	border-top: solid 2px #ccc;
	border-bottom: solid 1px #ccc;
`;

const TableHeaderCell = styled.th`
	padding: 10px;
	border-right: 1px solid #ccc;
	border-left: 1px solid #ccc;
`;

const TableRow = styled.tr`
	border-bottom: 1px solid #ccc;
`;

const TableCell = styled.td`
	padding: 10px;
	border-right: 1px solid #ccc;
	border-left: 1px solid #ccc;
`;

const Wrap = styled.div`
	h1 {
		font-size: 20px;
		font-weight: 600;
		margin-bottom: 20px;
	}
`;
