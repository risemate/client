import { isEmpty, maskString, sliceDate } from '@utils/helpers';
import styled from 'styled-components';
import { Answer, Review } from 'types/coach/product';

import Button from '@common/Button';

import ReviewForm from '../ReviewForm/ReviewForm';
import useReviewAsnwer from './ReviewAsnwer.hook';

interface ReviewAsnwerProps {
	reviewId: string;
	isOpenReviewInput: boolean;
	onToggleReviewInput: () => void;
	isMyProduct: boolean;
	answer: Answer | null;
}

export default function ReviewAnswer({
	reviewId,
	isOpenReviewInput,
	onToggleReviewInput,
	isMyProduct,
	answer,
}: ReviewAsnwerProps) {
	const { createReviewAnswer, updateReviewAnswer } = useReviewAsnwer(onToggleReviewInput);
	return (
		<>
			{isMyProduct && isEmpty(answer) && (
				<Button
					variant='lightGrey'
					size='small'
					type='button'
					onClick={onToggleReviewInput}
				>
					{isOpenReviewInput ? '취소' : '답글'}
				</Button>
			)}
			{isEmpty(answer) && isMyProduct && isOpenReviewInput && (
				<ReviewForm
					isMyProduct={isMyProduct}
					submitCallback={createReviewAnswer}
					review={{ _id: reviewId } as Review}
				/>
			)}
			{answer && (
				<AnswerWrapper>
					<p>
						<span>{maskString(answer.expert.name, 2, '*')}</span>
						<span>({maskString(answer.expert.nickname, 2, '*')})</span>
						<span>| {sliceDate(answer.createdAt)}</span>
					</p>
					<p>{answer.content}</p>
				</AnswerWrapper>
			)}
		</>
	);
}

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
