import { useSearchParam } from '@hooks/common/useSearchParam';
import theme from '@styles/theme';
import styled from 'styled-components';

import Button from '@common/Button';

import ManageExpertApplicate from './components/ManageExpertApplicate';

function Admin() {
	const { queryParam } = useSearchParam('menu');

	return (
		<AdminWrap>
			<div>
				<div className='nav'>
					<header>관리자 {'>>'} 김탁구</header>
					<ul>
						<li>
							<NavButton variant='blue' size='full' to='?menu=USER'>
								유저관리
							</NavButton>
						</li>
						<li>
							<NavButton variant='blue' size='full' to='?menu=MEA'>
								전문가신청관리
							</NavButton>
						</li>
						<li>
							<NavButton variant='blue' size='full' to='?menu=RESUME'>
								이력서관리
							</NavButton>
						</li>

						<li>
							<NavButton variant='blue' size='full' to='?menu=PAY'>
								결제 관리
							</NavButton>
						</li>
						<li>
							<NavButton variant='blue' size='full' to='?menu=...'>
								기타 ...
							</NavButton>
						</li>
						<li>
							<NavButton variant='blue' size='full'>
								기타 ...
							</NavButton>
						</li>
						<li>
							<NavButton variant='blue' size='full'>
								기타 ...
							</NavButton>
						</li>
					</ul>
				</div>
			</div>
			<div className='content'>{queryParam === 'MEA' && <ManageExpertApplicate />}</div>
		</AdminWrap>
	);
}

export default Admin;

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
			color: #ffffff;
		}
		ul {
			padding: 2px !important;
			li {
				margin-bottom: 10px;
			}
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
	color: #daf3ff;
	font-weight: bold;
	letter-spacing: 2px;
`;
