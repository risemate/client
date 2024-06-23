import { reviewUpdateMutation } from '@queries/review';
import { authQuery } from '@queries/user';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { RequestReview } from 'types/coach/product';

export default function useReviewItem(authorId: string) {
	const [editState, setEditState] = useState<boolean>(false);
	const { data: authData } = authQuery();
	const isMyReview = authorId === authData?._id;

	const changeState = () => setEditState(prev => !prev);

	const updateReviewMutation = reviewUpdateMutation();
	const updateReview = (data: RequestReview) => {
		toast('댓글이 성공적으로 수정되었습니다');
		updateReviewMutation.mutate(data);
		changeState();
	};

	return {
		isMyReview,
		editState: { value: editState, change: changeState },
		updateReview,
	};
}
