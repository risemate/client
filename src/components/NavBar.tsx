import logoMain from '@images/logo-main.svg';
import React from 'react';
import { FaBell, FaRegUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface NavBarProps {
	isLogin: boolean;
	isExpert: boolean;
}

export default function NavBar({ isLogin, isExpert }: NavBarProps) {
	const navigate = useNavigate();
	const navItems = [
		{ name: '내 이력서', route: '/' },
		{ name: '코칭 관리', route: '/', onlyExpert: true },
		{ name: 'AI 코치', route: '/' },
		{ name: '코치 찾기', route: '/' },
		{ name: '네트워킹', route: '/' },
	];
	const isAlert = true;
	return (
		<StyledHeader>
			<nav>
				<button type='button' onClick={() => navigate('/')}>
					<img src={logoMain} alt='라이즈 메이트' />
				</button>
				<StyledNavList>
					{navItems.map((item, index) => {
						if (!isExpert && item?.onlyExpert) {
							return;
						}
						return (
							<li key={index}>
								<button type='button' onClick={() => navigate(item.route)}>
									{item.name}
								</button>
							</li>
						);
					})}
				</StyledNavList>
				<StyledMyPage>
					{isLogin ? (
						<>
							<button type='button' className={isAlert ? 'alert' : undefined}>
								<FaBell />
							</button>
							<button type='button' onClick={() => navigate('/mypage')}>
								<FaRegUserCircle />
							</button>
						</>
					) : (
						<button type='button'>로그인 | 회원가입</button>
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
		height: 75px;
		padding: 0 32px;
		display: flex;
		gap: 40px;
		align-items: center;
	}
`;

const StyledNavList = styled.ul`
	display: flex;
	align-items: center;
	gap: 25px;
	&:hover button {
		color: ${({ theme }) => theme.colors.darkGrey};
	}
	li {
		height: 100%;
	}
	button {
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
