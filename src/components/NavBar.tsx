import logoMain from '@images/logo-main.svg';
import { useAuth } from '@query/hooks/useAuth';
import { useModal } from 'atoms/useModalAtom';
import React, { useRef, useState } from 'react';
import { FaBell } from 'react-icons/fa';
import { FaCircleUser } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Alarm from './alarm/Alarm';
import AuthModal from './auth/AuthModal';

export default function NavBar() {
	const navigate = useNavigate();
	const navItems = [
		{ name: '내 이력서', route: '/auth/career' },
		{ name: 'AI 코치', route: '/' },
		{ name: '코치 찾기', route: '/' },
		{ name: '네트워킹', route: '/' },
	];

	const { isModal, openModal } = useModal();
	const { auth } = useAuth();
	const isExpert = true;

	const hasNewAlarm = true;
	const [isAlarmOpen, setIsAlarmOpen] = useState(false);
	const toggleAlarm = () => setIsAlarmOpen(prev => !prev);
	const closeAlarm = () => setIsAlarmOpen(false);
	const btnAlarmRef = useRef<HTMLButtonElement | null>(null);
	return (
		<StyledHeader>
			<nav>
				<Link to='/'>
					<img src={logoMain} alt='라이즈 메이트' />
				</Link>
				<StyledNavList>
					{navItems.map((item, index) => {
						return (
							<li key={index}>
								<Link to={item.route}>{item.name}</Link>
							</li>
						);
					})}
				</StyledNavList>
				<StyledMyPage>
					{auth ? (
						<>
							{isExpert && <Link to='/'>코칭 관리</Link>}
							<button
								type='button'
								className={hasNewAlarm ? 'alert' : undefined}
								onClick={toggleAlarm}
								ref={btnAlarmRef}
							>
								<FaBell />
							</button>
							{isAlarmOpen && <Alarm closeAlarm={closeAlarm} btnAlarmRef={btnAlarmRef} />}
							<button type='button' onClick={() => navigate('/mypage')}>
								<FaCircleUser />
							</button>
						</>
					) : (
						<>
							<button type='button' onClick={openModal}>
								로그인 | 회원가입
							</button>
							{isModal && <AuthModal />}
						</>
					)}
				</StyledMyPage>
			</nav>
		</StyledHeader>
	);
}

const StyledHeader = styled.header`
	width: 100%;
	border-bottom: 0.5px solid ${({ theme }) => theme.colors.lightGrey};
	nav {
		max-width: 1200px;
		min-width: 768px;
		height: 75px;
		padding: 0 32px;
		display: flex;
		gap: 40px;
		align-items: center;
		margin: auto;
	}
`;

const StyledNavList = styled.ul`
	display: flex;
	align-items: center;
	gap: 25px;
	&:hover a {
		color: ${({ theme }) => theme.colors.darkGrey};
	}
	li {
		height: 100%;
	}
	a {
		color: ${({ theme }) => theme.colors.navy};
		font-weight: bold;
		height: 100%;
		&:hover {
			color: ${({ theme }) => theme.colors.navy};
		}
	}
`;

const StyledMyPage = styled.div`
	margin-left: auto;
	height: 100%;
	position: relative;
	display: flex;
	align-items: center;
	a {
		background: ${({ theme }) => theme.colors.navy};
		color: ${({ theme }) => theme.colors.white};
		font-weight: bold;
		padding: 5px 10px;
		border-radius: 30px;
	}
	button {
		color: ${({ theme }) => theme.colors.navy};
		height: 100%;
		margin-left: 15px;
		position: relative;
	}
	svg {
		width: 25px;
		height: 25px;
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
