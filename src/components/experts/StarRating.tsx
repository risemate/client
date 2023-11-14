import { IconStar, IconStarEmpty, IconStarHalf } from '@icons';
import React from 'react';
import styled from 'styled-components';

interface StarRatingProps {
	rating: number;
	numReview?: number;
}
export default function StarRating({ rating, numReview }: StarRatingProps) {
	const ratingList = [1, 2, 3, 4, 5];
	return (
		<StyledStar>
			{ratingList.map((item, index) => {
				if (item <= rating) return <IconStar key={index} />;
				else if (item - rating >= 0.3 && item - rating <= 0.8)
					return <IconStarHalf key={index} />;
				else return <IconStarEmpty key={index} />;
			})}
			{numReview && <span>({numReview})</span>}
		</StyledStar>
	);
}

const StyledStar = styled.div`
	display: flex;
	align-items: end;
	svg {
		width: 12px;
		color: #f9d448;
		margin-right: 2px;
	}
	& > span {
		font-size: ${({ theme }) => theme.fontSizes.tiny};
	}
`;
