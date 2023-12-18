import { isEmpty } from '@utils/helpers';
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import Button from '@common/Button';
import TextArea from '@components/input/TextArea';

import StarRating from '../../../../components/experts/StarRating';

interface ReviewFormProps {
	isMyProduct: boolean;
}

export default function ReviewForm({ isMyProduct }: ReviewFormProps) {
	type AddReviewType = {
		content: string;
		rating: number;
	};
	const reviewInput: AddReviewType = {
		content: '',
		rating: 0,
	};

	const { register, watch, setValue, reset, handleSubmit } = useForm({
		mode: 'onSubmit',
		defaultValues: reviewInput,
	});

	const checkEmpty = () => {
		if (isMyProduct) {
			return isEmpty(watch('content'));
		}
		return isEmpty(watch('content')) || watch('rating') === 0;
	};
	const updateRating = (rating: number) => setValue('rating', rating);

	const addReview = (data: AddReviewType) => {
		// eslint-disable-next-line
		console.log(data);
		reset();
	};

	return (
		<StyledReviewForm onSubmit={handleSubmit(addReview)}>
			<TextArea
				placeholder={
					isMyProduct
						? '해당 리뷰에 대한 답변을 남겨보세요!'
						: '해당 서비스에 대한 후기를 남겨보세요!'
				}
				{...register('content')}
				autoFocus
			/>
			<div>
				{!isMyProduct && <StarRating rating={watch('rating')} onClick={updateRating} />}
				<Button variant='navy' size='small' type='submit' disabled={checkEmpty()}>
					{isMyProduct ? '답변 남기기' : '후기 남기기'}
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
