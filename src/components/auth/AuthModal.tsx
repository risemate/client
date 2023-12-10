import { useModal } from '@hooks/atoms/useModalAtom';
import { IconGoogle, IconNaver } from '@icons';
import logoIcon from '@images/logo-icon.svg';
import { useAuth } from '@query/hooks/useAuth';
import axios from 'axios';
import styled from 'styled-components';

import ModalBase from '../common/modal/ModalBase';
import { popupLogin } from './popupLogin';

export default function AuthModal() {
	const { closeModal } = useModal();
	// eslint-disable-next-line
	const { auth, refetch } = useAuth();
	const login = async (provider?: string) => {
		await popupLogin(provider).then(result => {
			if (result.accessToken) {
				// eslint-disable-next-line
				console.log(result.accessToken);

				//: 유저정보 받아오기 refetch()
				//: alert(auth?.nickname + '님 완영합니다.');
				alert('로그인 완료');
				// setlocal(result.accessToken);
				localStorage.setItem('rm-checkpoint', result.accessToken);
				axios.defaults.baseURL = process.env.REACT_APP_API_URL;
				axios.defaults.headers.common.Authorization = `Bearer ${result.accessToken}`;
				axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
				closeModal();
			}
		});
	};

	return (
		<ModalBase>
			<StyledH1>
				<img src={logoIcon} alt='라이즈메이트 로고' />
				<br />
				로그인
			</StyledH1>
			<StyledContent>
				RiseMate에서 로그인하고 <br /> 다양한 서비스를 즐겨보세요!
			</StyledContent>
			<StyledButtonDiv>
				<button type='button' onClick={() => login('google')}>
					<IconGoogle /> Google 로그인
				</button>
				<button type='button' onClick={() => login('naver')}>
					<IconNaver />
					Naver 로그인
				</button>
			</StyledButtonDiv>
		</ModalBase>
	);
}

const StyledH1 = styled.h1`
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

const StyledContent = styled.p`
	text-align: center;
	margin-bottom: 30px;
	line-height: 25px;
	color: ${({ theme }) => theme.colors.navy};
`;

const StyledButtonDiv = styled.div`
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
