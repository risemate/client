import { IconGoogle, IconNaver } from '@icons';
import logoIcon from '@images/logo-icon.svg';
import { authKeys } from '@queries/queryKeys';
import { useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { routePath } from 'router/routePath';
import styled from 'styled-components';
import { Auth } from 'types/auth';

import { popupLogin } from './popupLogin';

export default function Login() {
	const [userData, setUserData] = useState<Auth>();
	const queryClient = useQueryClient();

	const navigate = useNavigate();
	const location = useLocation();

	const login = async (provider?: string) => {
		popupLogin(provider).then(result => {
			if (result.accessToken) {
				//: 유저정보 받아오기 refetch()
				toast.success('로그인 완료'); //:react-toastify로 바꾸기
				setUserData(result.user);
				localStorage.setItem('rm-checkpoint', result.accessToken);
				// axios.defaults.baseURL = process.env.REACT_APP_API_URL;
				axios.defaults.headers.common.Authorization = `Bearer ${result.accessToken}`;
				axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
				const redirectTo = location.state?.from?.pathname || '/';
				navigate(redirectTo, { replace: true });
			}
		});
	};

	useEffect(() => {
		if (userData) {
			queryClient.setQueryData(authKeys.base, userData);
		}
	}, [userData]);

	return (
		<BackgroundWrapper>
			<LoginWrapper>
				<LoginTitle>
					<img src={logoIcon} alt='라이즈메이트 로고' />
					<br />
					로그인
				</LoginTitle>
				<LoginContent>
					RiseMate에서 로그인하고 <br /> 다양한 서비스를 즐겨보세요!
				</LoginContent>
				<LoginButtonWrapper>
					<button type='button' onClick={() => login('google')}>
						<IconGoogle /> Google 로그인
					</button>
					<button type='button' onClick={() => login('naver')}>
						<IconNaver />
						Naver 로그인
					</button>
				</LoginButtonWrapper>
				<BackHomeButton onClick={() => navigate(routePath.root)}>
					홈으로 돌아가기
				</BackHomeButton>
			</LoginWrapper>
		</BackgroundWrapper>
	);
}

const BackgroundWrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.lightGrey};
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const LoginWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 450px;
	padding: 30px;
	border: 1px solid ${({ theme }) => theme.colors.grey};
	border-radius: 10px;
	background-color: ${({ theme }) => theme.colors.white};
`;

const LoginTitle = styled.h1`
	color: ${({ theme }) => theme.colors.navy};
	font-size: ${({ theme }) => theme.fontSizes.large};
	font-weight: bold;
	text-align: center;
	margin-bottom: 30px;
	height: 100px;
	img {
		margin: 15px 0;
	}
`;

const LoginContent = styled.p`
	text-align: center;
	margin-bottom: 30px;
	line-height: 25px;
	color: ${({ theme }) => theme.colors.navy};
`;

const LoginButtonWrapper = styled.div`
	${({ theme }) => theme.common.flexCenterColumn};
	gap: 25px;
	padding-bottom: 20px;
	width: 100%;
	& > button {
		width: 100%;
		height: 60px;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
		font-weight: bold;
		position: relative;
		&:not(:disabled):hover {
			filter: brightness(0.9);
		}
		svg {
			position: absolute;
		}
	}
	button:nth-child(1) {
		color: ${({ theme }) => theme.colors.darkGrey};
		background: white;
		svg {
			width: 30px;
			height: 30px;
			top: 15px;
			left: 15px;
		}
	}
	button:nth-child(2) {
		color: white;
		background: #56bc75;
		svg {
			width: 25px;
			height: 25px;
			top: 18px;
			left: 18px;
		}
	}
`;

const BackHomeButton = styled.button`
	color: ${({ theme }) => theme.colors.darkGrey};

	&:hover {
		color: ${({ theme }) => theme.colors.darkerGrey};
		text-decoration: underline;
	}
`;
