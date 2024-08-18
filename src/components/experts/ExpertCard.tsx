import React from 'react';
import styled from 'styled-components';
import { Product } from 'types/coach/product';

import DefaultImage from '@common/DefaultImage';

import useExpertCard from './ExpertCard.hook';
import StarRating from './StarRating';

interface ExpertCardProps {
	expert: Product;
}

export default function ExpertCard({ expert }: ExpertCardProps) {
	const { moveToDetail } = useExpertCard(expert._id);
	return (
		<CardItemButton onClick={moveToDetail}>
			<Tag>FRONTEND</Tag>
			<DefaultImage variant='blue' image={expert.coverImage} />
			<h4>{expert.productTitle || ' '}</h4>
			<p>{expert.subTitle || ' '}</p>
			<p>{expert.description || ' '}</p>
			<ProductInfoWrapper>
				<span className='price'>20000원~</span>
				<StarRating rating={expert.avgReviewScore} numReview={expert.reviewCount} />
			</ProductInfoWrapper>
		</CardItemButton>
	);
}

const CardItemButton = styled.button`
	max-width: 250px;
	width: 100%;
	min-height: 405px;
	border-radius: 10px;
	border: 1px solid ${({ theme }) => theme.colors.grey};
	background: white;
	padding: 60px 20px 50px;
	position: relative;
	text-align: start;
	transition: all 0.2s ease;
	display: flex;
	flex-direction: column;
	&:hover {
		transform: translateY(-5px);
		filter: brightness(0.96);
	}
	h4 {
		width: 100%;
		margin: 10px 0 5px;
		font-weight: bold;
		${({ theme }) => theme.common.ellipsisOneLine};
	}
	p {
		width: 100%;
	}
	& > p:nth-of-type(1) {
		font-size: ${({ theme }) => theme.fontSizes.small};
		${({ theme }) => theme.common.ellipsisTwoLine};
		line-height: 15px;
		margin-bottom: 5px;
	}
	& > p:nth-of-type(2) {
		font-size: ${({ theme }) => theme.fontSizes.small};
		color: ${({ theme }) => theme.colors.darkGrey};
		line-height: 15px;
		${({ theme }) => theme.common.ellipsisTwoLine};
	}
	${({ theme }) => theme.common.ellipsisOneLine};
`;

const Tag = styled.span`
	color: white;
	font-weight: bold;
	font-size: ${({ theme }) => theme.fontSizes.small};
	background: ${({ theme }) => theme.colors.blue};
	padding: 3px 10px;
	position: absolute;
	border-radius: 10px;
	margin-bottom: 5px;
	top: 20px;
	right: 20px;
`;

const ProductInfoWrapper = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	border-top: 1px solid ${({ theme }) => theme.colors.grey};
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	span:first-child {
		font-weight: bold;
	}
`;
