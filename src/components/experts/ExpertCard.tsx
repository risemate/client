import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import DefaultImage from '@common/DefaultImage';

interface ExpertCardProps {
	expert: string;
}

// eslint-disable-next-line
export default function ExpertCard({ expert }: ExpertCardProps) {
	const navigate = useNavigate();
	const moveToDetail = () => {
		navigate('/');
	};
	return (
		<StyledCardItem onClick={moveToDetail}>
			<span className='tag'>FRONTEND</span>
			<DefaultImage variant='navy' />
			<h4>성장하는 프론트엔드 개발자</h4>
			<p className='explanation'>
				커리어 | 2년차, 3개 회사 근무 <br /> 최근 소속 | 라이즈메이트
			</p>
			<p className='introduction'>
				안녕하세요, TypeScript, React.js 기반의 2년 프론트엔드 개발자 000이라고 합니다.
				잘부탁드립니다.
			</p>
			<p className='product-detail'>
				<span className='price'>20000원~</span>
				<span className='num-review'>10개의 리뷰</span>
			</p>
		</StyledCardItem>
	);
}

const StyledCardItem = styled.button`
	max-width: 250px;
	min-width: 200px;
	border-radius: 10px;
	border: 1px solid ${({ theme }) => theme.colors.lightGrey};
	background: ${({ theme }) => theme.colors.white};
	padding: 45px 20px 50px;
	position: relative;
	text-align: start;
	transition: all 0.2s ease;
	&:hover {
		transform: translateY(-5px);
		filter: brightness(0.96);
	}
	.tag {
		color: ${({ theme }) => theme.colors.white};
		font-weight: bold;
		font-size: ${({ theme }) => theme.fontSizes.small};
		background: ${({ theme }) => theme.colors.blue};
		padding: 3px 10px;
		position: absolute;
		border-radius: 10px;
		margin-bottom: 5px;
		top: 20px;
		right: 20px;
	}
	h4 {
		margin: 10px 0 5px;
		font-weight: bold;
		${({ theme }) => theme.common.ellipsisOneLine};
	}
	.explanation {
		font-size: ${({ theme }) => theme.fontSizes.small};
		${({ theme }) => theme.common.ellipsisTwoLine};
		line-height: 15px;
		margin-bottom: 5px;
	}
	.introduction {
		font-size: ${({ theme }) => theme.fontSizes.small};
		color: ${({ theme }) => theme.colors.darkGrey};
		line-height: 15px;
		${({ theme }) => theme.common.ellipsisTwoLine};
	}
	.product-detail {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
		padding: 10px 20px;
		display: flex;
		justify-content: space-between;
		align-items: end;
		.price {
			font-weight: bold;
		}
		.num-review {
			font-size: ${({ theme }) => theme.fontSizes.small};
			color: ${({ theme }) => theme.colors.darkGrey};
		}
	}
`;
