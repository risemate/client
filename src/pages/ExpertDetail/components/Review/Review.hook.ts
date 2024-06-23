import { reviewQuery } from '@queries/review';
import { useState } from 'react';
import { mockReview } from 'types/coach/productData';

export default function useReview(id: string) {
	const [openReviewInputs, setOpenReviewInputs] = useState<boolean[]>(
		Array(mockReview.length).fill(false),
	);
	const isMyProduct = true;
	const usedProduct = false;

	const handleToggleReviewInput = (index: number) => {
		setOpenReviewInputs(prev => prev.map((state, i) => (i === index ? !state : false)));
	};

	const { data } = reviewQuery(id);
	return {
		openReviewInputs,
		isMyProduct,
		usedProduct,
		handleToggleReviewInput,
		reviews: data || [],
	};
}
