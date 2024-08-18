import { IconStar, IconStarEmpty, IconStarHalf } from '@icons';
import styled, { css } from 'styled-components';

interface StarRatingProps {
	rating: number;
	numReview?: number;
	size?: 'small' | 'medium' | 'large';
	onClick?: (rating: number) => void;
}
export default function StarRating({
	rating,
	numReview,
	size,
	onClick,
}: StarRatingProps) {
	const ratingList = [1, 2, 3, 4, 5];
	return (
		<StarRatingWrapper $size={size}>
			{onClick
				? ratingList.map((item, index) => (
						<button key={index} type='button' onClick={() => onClick(item)}>
							{item <= rating ? <IconStar /> : <IconStarEmpty />}
						</button>
				  ))
				: ratingList.map((item, index) => {
						if (item <= rating) return <IconStar key={index} />;
						else if (item - rating > 0 && item - rating <= 0.5)
							return <IconStarHalf key={index} />;
						else return <IconStarEmpty key={index} />;
				  })}
			<span>({numReview || 0})</span>
		</StarRatingWrapper>
	);
}

interface StyledStarProps {
	$size?: 'small' | 'medium' | 'large';
}

const sizeStyle = css<StyledStarProps>`
	${({ $size }) => {
		switch ($size) {
			case 'small':
				return css`
					width: 12px;
				`;
			case 'medium':
				return css`
					width: 15px;
				`;
			case 'large':
				return css`
					width: 20px;
				`;
			default:
				return css`
					width: 12px;
				`;
		}
	}}
`;

const StarRatingWrapper = styled.div<StyledStarProps>`
	display: flex;
	align-items: end;
	svg {
		color: #f9d448;
		margin-right: 2px;
		${sizeStyle}
	}
	& > span {
		font-size: ${({ theme }) => theme.fontSizes.tiny};
	}
`;
