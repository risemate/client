import { authQuery } from '@queries/user';
import { useState } from 'react';

export default function useReviewItem(authorId: string) {
	const [editState, setEditState] = useState<boolean>(false);
	const { data: authData } = authQuery();
	const isMyReview = authorId === authData?._id;

	const changeState = () => setEditState(prev => !prev);
	return { isMyReview, editState: { value: editState, change: changeState } };
}
