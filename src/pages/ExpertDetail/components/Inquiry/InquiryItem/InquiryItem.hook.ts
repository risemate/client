import { csUpdateMutation } from '@queries/cs';
import { authQuery } from '@queries/user';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { RequestAnswer } from 'types/coach/product';

export default function useInquiryitem(authorId: string) {
	const [editState, setEditState] = useState<boolean>(false);
	const { data: authData } = authQuery();
	const isMyCS = authorId === authData?._id;

	const changeState = () => setEditState(prev => !prev);

	const updateCsMutation = csUpdateMutation();
	const updateCS = (data: RequestAnswer) => {
		toast('문의가 성공적으로 수정되었습니다');
		updateCsMutation.mutate(data);
		changeState();
	};

	return {
		isMyCS,
		editState: { value: editState, change: changeState },
		updateCS,
	};
}
