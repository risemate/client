import { csAnswerCreateMutation, csAnswerUpdateMutation } from '@queries/cs';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { RequestAnswer } from 'types/coach/product';

export default function useInquiryAnswer(onToggleInquiryInput: () => void) {
	const [editState, setEditState] = useState<boolean>(false);
	const createCsAnswerMutation = csAnswerCreateMutation();
	const updateCsAnswerMutation = csAnswerUpdateMutation();

	const createCsAnswer = (data: RequestAnswer) => {
		toast('답글이 성공적으로 등록되었습니다.');
		createCsAnswerMutation.mutate(data);
		onToggleInquiryInput();
	};

	const updateCsAnswer = (data: RequestAnswer) => {
		toast('답글이 성공적으로 수정되었습니다.');
		updateCsAnswerMutation.mutate(data);
		onToggleInquiryInput();
	};

	const changeEditState = () => setEditState(prev => !prev);

	return {
		createCsAnswer,
		updateCsAnswer,
		editState: { value: editState, change: changeEditState },
	};
}
