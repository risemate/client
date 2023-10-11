import { useModal } from '@hooks/atoms/useModalAtom';
import { IconGoogle, IconNaver } from '@icons';
import logoIcon from '@images/logo-icon.svg';
import { useAuth } from '@query/hooks/useAuth';
import styled from 'styled-components';

import ModalBase from '../common/modal/ModalBase';
import { popupLogin } from './popupLogin';

export default function AuthModal() {
	const { closeModal } = useModal();
	// eslint-disable-next-line
	const { auth, refetch } = useAuth();
	const login = () => {
		// eslint-disable-next-line
		popupLogin('google').then((result: any) => {
			if (result.success) {
				closeModal();
				//: 유저정보 받아오기 refetch()
				//: alert(auth?.nickname + '님 완영합니다.');
				alert('로그인 완료');
			} else {
				alert(result.message);
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
			<StyledButtonDiv>
				<button type='button' onClick={login}>
					<IconGoogle /> Google 로그인
				</button>
				<button type='button' onClick={() => alert('네이버 로그인')}>
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
	margin-bottom: 60px;
	img {
		margin: 15px 0;
	}
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
	}
	button:nth-child(2) {
		color: ${({ theme }) => theme.colors.white};
		background: #56bc75;
	}
`;
