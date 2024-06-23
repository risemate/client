import { isEmpty, maskString, sliceDate } from '@utils/helpers';
import React from 'react';
import styled from 'styled-components';
import { Answer } from 'types/coach/product';

import Button from '@common/Button';

import ReviewForm from '../ReviewForm/ReviewForm';

interface ReviewAsnwerProps {
	isOpenReviewInput: boolean;
	onToggleReviewInput: () => void;
	isMyProduct: boolean;
	answer: Answer | null;
}

export default function ReviewAnswer({
	isOpenReviewInput,
	onToggleReviewInput,
	isMyProduct,
	answer,
}: ReviewAsnwerProps) {
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
				<ReviewForm isMyProduct={isMyProduct} />
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

// const ReviewAnswerWrapper = styled.div`
// 	& > p:nth-of-type(2) {
// 		grid-column: 1 / 4;
// 		margin-top: 20px;
// 		line-height: 25px;
// 		color: ${({ theme }) => theme.colors.darkerGrey};
// 	}
// 	& > form,
// 	& > button {
// 		grid-column: 1 / 4;
// 		text-align: center;
// 		margin-top: 15px;
// 	}
// 	& > button {
// 		margin: 15px auto 0;
// 	}
// `;

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
