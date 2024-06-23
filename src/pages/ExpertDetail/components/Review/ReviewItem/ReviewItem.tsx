import { IconEdit, IconTrash } from '@icons';
import { isEmpty, maskString } from '@utils/helpers';
import styled from 'styled-components';
import { Review as ReviewType } from 'types/coach/product';

import Button from '@common/Button';
import DefaultImage from '@common/DefaultImage';
import StarRating from '@components/experts/StarRating';

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
	const { isMyReview, sliceDate, editState } = useReviewItem(review.user._id);

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
			{isMyProduct && isEmpty(review.answer) && (
				<Button
					variant='lightGrey'
					size='small'
					type='button'
					onClick={onToggleReviewInput}
				>
					{isOpenReviewInput ? '취소' : '답글'}
				</Button>
			)}
			{isEmpty(review.answer) && isMyProduct && isOpenReviewInput && (
				<ReviewForm isMyProduct={isMyProduct} />
			)}
			{review.answer && (
				<AnswerWrapper>
					<p>
						<span>{maskString(review.answer.expert.name, 2, '*')}</span>
						<span>({maskString(review.answer.expert.nickname, 2, '*')})</span>
						<span>| {sliceDate(review.answer.createdAt)}</span>
					</p>
					<p>{review.answer.content}</p>
				</AnswerWrapper>
			)}
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

const AnswerWrapper = styled.div`
	grid-column: 1 / 3;
	background: ${({ theme }) => theme.colors.lighterGrey};
	margin-top: 20px;
	padding: 15px 20px 15px 30px;
	border-radius: 5px;
	& > p:nth-of-type(1) {
		display: flex;
		gap: 8px;
		align-items: end;
		margin-bottom: 10px;
		& > span {
			color: ${({ theme }) => theme.colors.darkerGrey};
		}
		& > span:nth-of-type(3) {
			color: ${({ theme }) => theme.colors.darkGrey};
			font-size: ${({ theme }) => theme.fontSizes.small};
		}
	}
	& > p:nth-of-type(2) {
		line-height: 25px;
		color: ${({ theme }) => theme.colors.darkerGrey};
	}
`;
