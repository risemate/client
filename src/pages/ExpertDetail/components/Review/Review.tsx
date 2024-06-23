import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import StarRating from '@components/experts/StarRating';

import BaseSection from '../BaseSection';
import useReview from './Review.hook';
import ReviewForm from './ReviewForm';
import ReviewItem from './ReviewItem';

interface ReviewProps {
	avgReviewScore: number | undefined;
	reviewCount: number | undefined;
	sectionRef: React.RefObject<HTMLElement>;
}

export default function Review({
	avgReviewScore = 0,
	reviewCount = 0,
	sectionRef,
}: ReviewProps) {
	const { id } = useParams();
	const { openReviewInputs, isMyProduct, usedProduct, handleToggleReviewInput, reviews } =
		useReview(id || '');

	return (
		<BaseSection ref={sectionRef}>
			<h3>서비스 후기</h3>
			<StarRatingWrapper>
				<StarRating rating={avgReviewScore} size='large' />
				<span>{avgReviewScore.toFixed(2)}</span>
				<span>| {reviewCount}건</span>
			</StarRatingWrapper>
			<ReviewWrapper>
				<span>전체 리뷰 {reviewCount}건</span>
				{usedProduct && <ReviewForm isMyProduct={isMyProduct} />}
				<ul>
					{reviews.map((review, index) => (
						<ReviewItem
							key={review._id}
							review={review}
							isMyProduct={isMyProduct}
							isOpenReviewInput={openReviewInputs[index]}
							onToggleReviewInput={() => handleToggleReviewInput(index)}
						/>
					))}
				</ul>
			</ReviewWrapper>
		</BaseSection>
	);
}

const StarRatingWrapper = styled.div`
	padding: 20px 0 40px;
	display: flex;
	align-items: center;
	gap: 5px;
	& > span:nth-of-type(1) {
		font-weight: bold;
	}
	& > span:nth-of-type(2) {
		color: ${({ theme }) => theme.colors.darkGrey};
		font-weight: 600;
	}
`;

const ReviewWrapper = styled.div`
	& > span {
		font-weight: bold;
	}
	& > ul {
		padding: 40px 0;
		display: flex;
		flex-direction: column;
		gap: 40px;
	}
	& > form {
		margin-top: 30px;
	}
`;
