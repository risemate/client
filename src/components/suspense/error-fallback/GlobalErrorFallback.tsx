import { getErrorDataByCode } from '#services/errors/errorMessage';
import { FallbackProps } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@common/Button';

export default function GlobalErrorFallback({
	error,
	resetErrorBoundary,
}: FallbackProps) {
	const navigate = useNavigate();
	const errorData = getErrorDataByCode(error);
	const navigateToLogin = () => {
		localStorage.clear();
		resetErrorBoundary();
		navigate('/', { state: { requireLogin: true } });
	};
	const navigateToHome = () => {
		resetErrorBoundary();
		if (errorData.message.includes('유저정보를 찾지 못했습니다')) {
			localStorage.clear();
			location.reload();
		}
		navigate('/');
	};
	return (
		<NotFoundContainer>
			<Title>{errorData.code}</Title>
			<Message>{errorData.message}</Message>
			<div>
				<Button variant='navy' onClick={navigateToLogin}>
					로그인
				</Button>
				<Button variant='navy' onClick={navigateToHome}>
					홈으로 돌아가기
				</Button>
			</div>
		</NotFoundContainer>
	);
}

const NotFoundContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
	gap: 10px;
	& > div {
		display: flex;
		gap: 10px;
	}
`;

const Title = styled.h1`
	font-size: 96px;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.darkerGrey};
`;

const Message = styled.p`
	font-size: 24px;
	color: ${({ theme }) => theme.colors.darkerGrey};
	margin: 10px 0;
`;
