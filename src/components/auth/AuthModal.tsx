import logoIcon from '@images/logo-icon.svg';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { SiNaver } from 'react-icons/si';
import styled from 'styled-components';

import ModalBase from '../common/modal/ModalBase';

interface AuthModalProps {
	closeModal: () => void;
}

export default function AuthModal({ closeModal }: AuthModalProps) {
	return (
		<ModalBase closeModal={closeModal}>
			<StyledH1>
				<img src={logoIcon} alt='라이즈메이트 로고' />
				<br />
				로그인
			</StyledH1>
			<StyledButtonDiv>
				<button type='button' onClick={() => alert('구글 로그인')}>
					<FcGoogle /> Google 로그인
				</button>
				<button type='button' onClick={() => alert('네이버 로그인')}>
					<SiNaver />
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
