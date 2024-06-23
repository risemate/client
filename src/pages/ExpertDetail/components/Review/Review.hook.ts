import { reviewQuery } from '@queries/review';
import { useState } from 'react';
import { mockReview } from 'types/coach/productData';

export default function useReview(id: string) {
	const { data } = reviewQuery(id);
	const [openReviewInputs, setOpenReviewInputs] = useState<boolean[]>(
		Array(mockReview.length).fill(false),
	);
	const usedProduct = true;

	const handleToggleReviewInput = (index: number) => {
		setOpenReviewInputs(prev => prev.map((state, i) => (i === index ? !state : false)));
	};

	return {
		openReviewInputs,
		usedProduct,
		handleToggleReviewInput,
		reviews: data || [],
	};
}
