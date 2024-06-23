import { reviewAnswerCreateMutation, reviewAnswerUpdateMutation } from '@queries/review';
import { toast } from 'react-toastify';
import { RequestReview } from 'types/coach/product';

export default function useReviewAsnwer(onToggleReviewInput: () => void) {
	const createReviewAnswerMutation = reviewAnswerCreateMutation();
	const updateReviewAnswerMutation = reviewAnswerUpdateMutation();

	const createReviewAnswer = (data: RequestReview) => {
		toast('답글이 성공적으로 등록되었습니다.');
		createReviewAnswerMutation.mutate(data);
		onToggleReviewInput();
	};

	const updateReviewAnswer = (data: RequestReview) => {
		toast('답글이 성공적으로 수정되었습니다.');
		updateReviewAnswerMutation.mutate(data);
		onToggleReviewInput();
	};
	return { createReviewAnswer, updateReviewAnswer };
}
