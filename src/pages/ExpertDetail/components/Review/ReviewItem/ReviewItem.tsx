import { IconEdit, IconTrash } from '@icons';
import { maskString, sliceDate } from '@utils/helpers';
import styled from 'styled-components';
import { Review as ReviewType } from 'types/coach/product';

import DefaultImage from '@common/DefaultImage';
import StarRating from '@components/experts/StarRating';

import ReviewAnswer from '../ReviewAnswer/ReviewAnswer';
import ReviewForm from '../ReviewForm/ReviewForm';
import useReviewItem from './ReviewItem.hook';

interface ReviewItemProps {
	review: ReviewType;
	isMyProduct: boolean;
	isOpenReviewInput: boolean;
	onToggleReviewInput: () => void;
}

export default function ReviewItem({
	review,
	isMyProduct,
	isOpenReviewInput,
	onToggleReviewInput,
}: ReviewItemProps) {
	const { isMyReview, editState } = useReviewItem(review.user._id);

	return (
		<StyledItem>
			<DefaultImage
				size='tiny'
				variant='grey'
				shape='circle'
				image={review.user.picture}
			/>
			<p>{maskString(review.user.nickname, 2, '*')}</p>
			<div>
				<StarRating rating={review.score} size='medium' />
				<span>{review.score}</span>
				<span>| {sliceDate(review.createdAt)}</span>
			</div>
			{isMyReview && (
				<ButtonWrapper>
					<button type='button' onClick={editState.change}>
						<IconEdit />
					</button>
					<button type='button'>
						<IconTrash />
					</button>
				</ButtonWrapper>
			)}
			{editState.value ? (
				<ReviewForm
					isMyProduct={isMyProduct}
					review={review}
					updateCallback={editState.change}
				/>
			) : (
				<p>{review.content}</p>
			)}
			<ReviewAnswer
				isOpenReviewInput={isOpenReviewInput}
				onToggleReviewInput={onToggleReviewInput}
				isMyProduct={isMyProduct}
				answer={review.answer}
			/>
		</StyledItem>
	);
}

const StyledItem = styled.li`
	display: grid;
	grid-template-columns: 50px auto 50px;
	gap: 0 5px;
	& > div:nth-of-type(1) {
		grid-column: 1 / 2;
		grid-row: 1 / 3;
	}
	& > p:nth-of-type(1) {
		grid-column: 2 / 3;
		color: ${({ theme }) => theme.colors.darkGrey};
	}
	& > div:nth-of-type(2) {
		grid-column: 2 / 3;
		display: flex;
		align-items: end;
		gap: 5px;
		& > span:nth-of-type(2) {
			color: ${({ theme }) => theme.colors.darkGrey};
			font-size: ${({ theme }) => theme.fontSizes.small};
		}
	}
	& > p:nth-of-type(2) {
		grid-column: 1 / 4;
		margin-top: 20px;
		line-height: 25px;
		color: ${({ theme }) => theme.colors.darkerGrey};
	}
	& > form,
	& > button {
		grid-column: 1 / 4;
		text-align: center;
		margin-top: 15px;
	}
	& > button {
		margin: 15px auto 0;
	}
`;

const ButtonWrapper = styled.div`
	display: flex;
	gap: 10px;
	svg {
		color: ${({ theme }) => theme.colors.grey};
		width: 18px;
		height: 18px;
		&:hover {
			color: ${({ theme }) => theme.colors.darkGrey};
		}
	}
`;
