import { useModal } from '@hooks/atoms/useModalAtom';
import { IconBell } from '@icons';
import logoMain from '@images/logo-main.svg';
import { authQuery } from '@queries/user';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SingleAsyncWrapper from '@components/suspense/async-wrapper/SingleAsyncWrapper';

import Alarm from '../../alarm/Alarm';
import ProfileMenu from './ProfileMenu';

export default function NavBar() {
	const navItems = [
		{ name: '내 커리어', route: '/my-info/docs' },
		{ name: 'AI 코치', route: '/my-info/ai' },
		{ name: '코치 찾기', route: '/experts' },
		{ name: '네트워킹', route: '/networks' },
	];

	const { openModal } = useModal('login');
	const { data: auth } = authQuery();

	const hasNewAlarm = true;
	const [isAlarmOpen, setIsAlarmOpen] = useState(false);
	const toggleAlarm = () => setIsAlarmOpen(prev => !prev);
	const closeAlarm = () => setIsAlarmOpen(false);
	const btnAlarmRef = useRef<HTMLButtonElement | null>(null);

	// const first = async () => {
	// 	await axios('auth').then(res => console.log(res.data));
	// };
	return (
		<StyledHeader>
			<nav>
				<h1>
					<Link to='/'>
						<img src={logoMain} alt='라이즈 메이트' />
					</Link>
				</h1>
				<NavBarList>
					{navItems.map((item, index) => {
						return (
							<li key={index}>
								<Link to={item.route}>{item.name}</Link>
							</li>
						);
					})}

					{auth?.role === 'EXPERT' && (
						<li className='on_expert'>
							<Link to={'/coach-info/management'}>코칭관리</Link>
						</li>
					)}
				</NavBarList>

				<SingleAsyncWrapper>
					<MyPageWrapper>
						{auth ? (
							<>
								{auth?.role === 'EXPERT' && (
									<Link to='/coach-info/management'>코칭 관리</Link>
								)}
								<button
									type='button'
									className={hasNewAlarm ? 'alert' : undefined}
									onClick={toggleAlarm}
									ref={btnAlarmRef}
								>
									<IconBell />
								</button>
								{isAlarmOpen && (
									<Alarm closeAlarm={closeAlarm} btnAlarmRef={btnAlarmRef} />
								)}
								{/* <div>
									<button type='button' onClick={() => navigate('/my-info')}>
										<IconCircleUser />
									</button>
								</div> */}
								<ProfileMenu />
							</>
						) : (
							<>
								<button type='button' onClick={openModal}>
									로그인 | 회원가입
								</button>
							</>
						)}
					</MyPageWrapper>
				</SingleAsyncWrapper>
			</nav>
		</StyledHeader>
	);
}

const StyledHeader = styled.header`
	width: 100%;
	border-bottom: 0.5px solid ${({ theme }) => theme.colors.lightGrey};
	position: fixed;
	top: 0;
	z-index: 9999;
	background: white;
	nav {
		max-width: ${({ theme }) => theme.widths.maxWidth};
		min-width: ${({ theme }) => theme.widths.minWidth};
		padding: 0 32px;
		height: 75px;
		display: flex;
		gap: 40px;
		align-items: center;
		margin: auto;
	}
`;

const NavBarList = styled.ul`
	display: flex;
	align-items: center;
	gap: 25px;
	height: 100%;
	&:hover a {
		color: ${({ theme }) => theme.colors.darkGrey};
	}
	li {
		height: 100%;
	}
	a {
		color: ${({ theme }) => theme.colors.navy};
		font-weight: bold;
		display: flex;
		align-items: center;
		height: 100%;
		&:hover {
			color: ${({ theme }) => theme.colors.navy};
		}
	}

	.on_expert > a {
		color: ${({ theme }) => theme.colors.blue};
		font-weight: 800;
	}
`;

const MyPageWrapper = styled.div`
	margin-left: auto;
	height: 100%;
	position: relative;
	display: flex;
	align-items: center;
	& > a {
		background: ${({ theme }) => theme.colors.navy};
		color: white;
		font-weight: bold;
		padding: 5px 10px;
		border-radius: 30px;
	}
	& > button {
		color: ${({ theme }) => theme.colors.navy};
		height: 100%;
		margin-left: 15px;
		position: relative;
	}
	svg {
		width: 25px;
		height: 25px;
		color: ${({ theme }) => theme.colors.navy};
	}
	.alert:after {
		content: '';
		display: inline-block;
		position: absolute;
		width: 5px;
		height: 5px;
		background: ${({ theme }) => theme.colors.mint};
		border-radius: 50%;
		top: 30%;
		right: 0;
	}
`;
