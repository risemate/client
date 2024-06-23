import { authQuery } from '@queries/user';
import { useState } from 'react';

export default function useReviewItem(authorId: string) {
	const [editState, setEditState] = useState<boolean>(false);
	const { data: authData } = authQuery();
	const isMyReview = authorId === authData?._id;

	const sliceDate = (date: string) => {
		return date.slice(2, 10).replaceAll('-', '.') + ' ' + date.slice(11, 16);
	};

	const changeState = () => setEditState(prev => !prev);
	return { isMyReview, sliceDate, editState: { value: editState, change: changeState } };
}
