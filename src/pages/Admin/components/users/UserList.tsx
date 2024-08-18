import { useQuery } from '@tanstack/react-query';
import { dateToFormat, dateToFromNow } from '@utils/timeUtil';
import axios from 'axios';
import styled from 'styled-components';
import { User } from 'types/auth';

import {
	Table,
	TableCell,
	TableHeader,
	TableHeaderCell,
	TableRow,
} from '../common/Table';

function UserList() {
	// eslint-disable-next-line
	const { data, isLoading, refetch } = useQuery<User[], any>({
		queryKey: ['admin', 'users'],
		queryFn: async () => {
			const response = await axios.get('/users');
			return response.data;
		},
	});
	return (
		<Wrap>
			<h1>유저목록</h1>

			<Table>
				<TableHeader>
					<TableRow>
						<TableHeaderCell>_id</TableHeaderCell>
						<TableHeaderCell>이름|닉네임</TableHeaderCell>
						<TableHeaderCell>메일</TableHeaderCell>
						<TableHeaderCell>이력서N</TableHeaderCell>
						<TableHeaderCell>자기소개서N</TableHeaderCell>
						<TableHeaderCell>최근접속</TableHeaderCell>
						<TableHeaderCell>가입일</TableHeaderCell>
					</TableRow>
				</TableHeader>
				<tbody>
					{isLoading && <div> Loading... </div>}
					{data && data?.map(user => <UserItem key={user._id} user={user} />)}
				</tbody>
			</Table>
		</Wrap>
	);
}

export default UserList;

const UserItem = ({ user }: { user: User }) => {
	return (
		<TableRow>
			<TableCell>{user._id}</TableCell>
			<TableCell>
				{user.name}|{user.nickname}
			</TableCell>
			<TableCell>{user.email}</TableCell>
			<TableCell>{user.resumeCount}</TableCell>
			<TableCell>{user.coverletterCount}</TableCell>
			<TableCell>{user.lastActiveAt && dateToFromNow(user.lastActiveAt)}</TableCell>
			<TableCell>{dateToFormat(user.createdAt)}</TableCell>
		</TableRow>
	);
};

const Wrap = styled.div`
	h1 {
		font-size: 20px;
		font-weight: 600;
		margin-bottom: 20px;
	}
`;
