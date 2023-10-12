import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import DefaultImage from '@common/DefaultImage';

interface NetworkCardProps {
	network: string;
}

export default function NetworkCard({ network }: NetworkCardProps) {
	// eslint-disable-next-line
	console.log(network);
	const navigate = useNavigate();
	const image = true;
	const moveToDetail = () => {
		navigate('/');
	};
	return (
		<StyledCardItem onClick={moveToDetail}>
			{image ? (
				<DefaultImage variant='blue' shape='rectangle' />
			) : (
				<img src={''} alt='' />
			)}
			<h4>홍길동 | 성장하는 프론트엔드 개발자</h4>
			<p>
				안녕하세요, TypeScript, React.js 기반의 2년 프론트엔드 개발자 000이라고
				합니다.잘부탁드립니다.
			</p>
		</StyledCardItem>
	);
}

const StyledCardItem = styled.button`
	max-width: 250px;
	min-width: 200px;
	text-align: start;
	transition: all 0.2s ease;
	&:hover {
		transform: scale(103%);
		filter: brightness(0.96);
	}
	h4 {
		font-weight: bold;
		${({ theme }) => theme.common.ellipsisOneLine};
		margin-top: 10px;
		padding-left: 10px;
	}
	p {
		font-size: ${({ theme }) => theme.fontSizes.small};
		color: ${({ theme }) => theme.colors.darkGrey};
		${({ theme }) => theme.common.ellipsisTwoLine};
		margin-top: 5px;
		padding-left: 10px;
	}
`;
