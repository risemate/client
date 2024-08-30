import styled from 'styled-components';

import Button from '@common/Button';

export default function NotFound() {
	return (
		<NotFoundContainer>
			<Title>404</Title>
			<Message>페이지를 찾을 수 없습니다.</Message>
			<Description>
				죄송합니다. 요청하신 페이지는 존재하지 않거나 이동된 경우입니다.
			</Description>
			<Button variant='navy' to='/'>
				홈으로 돌아가기
			</Button>
		</NotFoundContainer>
	);
}

const NotFoundContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
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

const Description = styled.p`
	font-size: 16px;
	color: ${({ theme }) => theme.colors.darkerGrey};
	margin: 10px 0 20px;
`;
