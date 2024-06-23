import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Review } from 'types/coach/product';

import Button from '@common/Button';
import StarRating from '@components/experts/StarRating';
import TextArea from '@components/input/TextArea';

import useReviewForm from './ReviewForm.hook';

interface ReviewFormProps {
	isMyProduct: boolean;
	review?: Review;
	updateCallback?: () => void;
}

export default function ReviewForm({
	isMyProduct,
	review,
	updateCallback,
}: ReviewFormProps) {
	const { id } = useParams();
	const { contentFields, scoreFields, checkEmpty, addReview } = useReviewForm(
		id || '',
		isMyProduct,
		review,
		updateCallback,
	);

	return (
		<StyledReviewForm onSubmit={addReview}>
			<TextArea
				placeholder={
					isMyProduct
						? '해당 리뷰에 대한 답변을 남겨보세요!'
						: '해당 서비스에 대한 후기를 남겨보세요!'
				}
				{...contentFields}
				autoFocus
			/>
			<div>
				{!isMyProduct && <StarRating {...scoreFields} />}
				<Button variant='navy' size='small' type='submit' disabled={checkEmpty()}>
					{review && '수정'}
					{!review && (isMyProduct ? '답변 남기기' : '후기 남기기')}
				</Button>
			</div>
		</StyledReviewForm>
	);
}

const StyledReviewForm = styled.form`
	position: relative;
	& > div {
		position: absolute;
		right: 10px;
		bottom: 10px;
		display: flex;
		gap: 10px;
		align-items: center;
	}
`;
