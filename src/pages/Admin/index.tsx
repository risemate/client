import { useSearchParam } from '@hooks/common/useSearchParam';
import styled from 'styled-components';

import Button from '@common/Button';

import ManageExpertApplicate from './components/ManageExpertApplicate';

function Admin() {
	const { queryParam, changeParam, delParam } = useSearchParam('menu');

	return (
		<AdminWrap>
			<div>
				<div>
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
			<div>{queryParam === 'MEA' && <ManageExpertApplicate />}</div>
		</AdminWrap>
	);
}

export default Admin;

const navWith = '300px';
const AdminWrap = styled.div`
	height: 100%;
	display: flex;
	& > div:first-child {
		// nav styling
		background-color: #daf3ff;
		width: ${navWith} !important;
		height: 100%;
		border-right: solid 1px #b4e7ff;
		header {
			padding: 20px 10px;
			align-items: center;
			margin-bottom: 15px;
			background-color: #313964;
			color: #ffffff;
		}
		ul {
			padding: 2px !important;
			li {
				margin-bottom: 10px;
			}
		}
	}

	div:nth-child(2) {
		//contents styling
		width: calc(100% - ${navWith});
		background-color: #ffffff;
		height: 100%;
		padding: 20px;
	}
`;

const NavButton = styled(Button)`
	border-radius: 0;
	height: 50px;
	color: #daf3ff;
	font-weight: bold;
	letter-spacing: 2px;
`;
