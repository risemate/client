import theme from '@styles/theme';
import { NavLink, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@common/Button';

import ManageExpertApplicate from './components/experts/ManageExpertApplicate';
import UserList from './components/users/UserList';

const menuItems = [
	{ key: 'user', label: '유저관리', component: <UserList /> },
	{ key: 'mea', label: '전문가신청관리', component: <ManageExpertApplicate /> },
	{ key: 'resume', label: '이력서관리', component: <div>resume component</div> },
	{ key: 'pay', label: '결제 관리', component: <div>pay component</div> },
	{ key: 'any', label: '기타 ...', component: <div>기타 ...</div> },
];

export default function Admin() {
	const [searchParams] = useSearchParams();
	const queryParam = searchParams.get('menu');

	const currentMenu = menuItems.find(item => item.key === queryParam);

	return (
		<AdminWrap>
			<div>
				<div className='nav'>
					<header>관리자 {'>>'} 김탁구</header>
					<ul>
						{menuItems.map(item => (
							<li key={item.key}>
								<NavLink
									to={`?menu=${item.key}`}
									className={() => {
										return searchParams.get('menu') === item.key ? 'active' : '';
									}}
									end
								>
									<NavButton variant='blue' size='full'>
										{item.label}
									</NavButton>
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className='content'>
				{currentMenu ? currentMenu.component : <div>기본 화면</div>}
			</div>
		</AdminWrap>
	);
}

const navWith = '300px';
const AdminWrap = styled.div`
	height: 100%;
	display: flex;
	gap: 10px;

	background-color: ${theme.colors.grey};
	.nav {
		// nav styling
		background-color: #fff;
		width: ${navWith} !important;
		height: 100%;
		/* border-right: solid 1px #b4e7ff; */
		header {
			padding: 20px 10px;
			align-items: center;
			margin-bottom: 15px;
			background-color: ${theme.colors.navy};
			color: #fff;
		}
		ul {
			padding: 2px;
			li {
				margin-bottom: 10px;
			}
		}
		.active > button {
			background-color: ${theme.colors.grey};
			color: ${theme.colors.navy};
		}
	}

	.content {
		//contents styling
		width: calc(100% - ${navWith});
		background-color: #ffffff;
		border-radius: 10px;
		margin: 15px;
		height: calc(100% - 30px);
		padding: 20px;
		overflow-y: auto;
	}
`;

const NavButton = styled(Button)`
	border-radius: 0;
	height: 50px;
	color: #fff;
	font-weight: bold;
	letter-spacing: 2px;
`;
