import { useModal } from '@hooks/atoms/useModalAtom';
import { IconGoogle, IconNaver } from '@icons';
import logoIcon from '@images/logo-icon.svg';
import { authKeys } from '@queries/queryKeys';
import { useAuth } from '@queries/user';
import { useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Auth } from 'types/User';

import ModalBase from '../modal/base/ModalBase';
import { popupLogin } from './popupLogin';

export default function AuthModal() {
	const { closeModal } = useModal('login');
	// eslint-disable-next-line
	const { data: auth } = useAuth();
	const [userData, setUserData] = useState<Auth>();
	const queryClient = useQueryClient();
	const login = async (provider?: string) => {
		closeModal();
		popupLogin(provider).then(result => {
			if (result.accessToken) {
				// eslint-disable-next-line

				//: 유저정보 받아오기 refetch()
				alert('로그인 완료'); //:react-toastify로 바꾸기
				setUserData(result.user);
				localStorage.setItem('rm-checkpoint', result.accessToken);
				axios.defaults.baseURL = process.env.REACT_APP_API_URL;
				axios.defaults.headers.common.Authorization = `Bearer ${result.accessToken}`;
				axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
			}
		});
	};

	useEffect(() => {
		if (userData) {
			queryClient.setQueryData(authKeys.base, userData);
		}
	}, [userData]);

	return (
		<ModalBase queryKey={'login'}>
			<ModalTitle>
				<img src={logoIcon} alt='라이즈메이트 로고' />
				<br />
				로그인
			</ModalTitle>
			<ModalContent>
				RiseMate에서 로그인하고 <br /> 다양한 서비스를 즐겨보세요!
			</ModalContent>
			<ModalButtonWrapper>
				<button type='button' onClick={() => login('google')}>
					<IconGoogle /> Google 로그인
				</button>
				<button type='button' onClick={() => login('naver')}>
					<IconNaver />
					Naver 로그인
				</button>
			</ModalButtonWrapper>
		</ModalBase>
	);
}

const ModalTitle = styled.h1`
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

const ModalContent = styled.p`
	text-align: center;
	margin-bottom: 30px;
	line-height: 25px;
	color: ${({ theme }) => theme.colors.navy};
`;

const ModalButtonWrapper = styled.div`
	${({ theme }) => theme.common.flexCenterColumn};
	gap: 25px;
	padding-bottom: 20px;
	& > button {
		width: 90%;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
		font-weight: bold;
		position: relative;
		&:not(:disabled):hover {
			filter: brightness(0.9);
		}
		svg {
			width: 30px;
			height: 30px;
			position: absolute;
			top: 15px;
			left: 15px;
		}
	}
	button:nth-child(1) {
		color: ${({ theme }) => theme.colors.darkGrey};
		background: white;
	}
	button:nth-child(2) {
		color: white;
		background: #56bc75;
	}
`;
