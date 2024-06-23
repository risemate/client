import { reviewCreateMutation, reviewQuery } from '@queries/review';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { RequestReview } from 'types/coach/product';

export default function useReview(id: string) {
	const { data } = reviewQuery(id);
	const createReviewMutation = reviewCreateMutation();
	const [openReviewInputs, setOpenReviewInputs] = useState<boolean[]>(
		Array(data?.length).fill(false),
	);
	const usedProduct = true;

	useEffect(() => {
		if (data) {
			setOpenReviewInputs(Array(data.length).fill(false));
		}
	}, [data]);

	const handleToggleReviewInput = (index: number) => {
		setOpenReviewInputs(prev => prev.map((state, i) => (i === index ? !state : false)));
	};

	const createReview = (data: RequestReview) => {
		toast('댓글이 성공적으로 등록되었습니다.');
		createReviewMutation.mutate(data);
	};

	return {
		openReviewInputs,
		usedProduct,
		handleToggleReviewInput,
		reviews: data || [],
		createReview,
	};
}
