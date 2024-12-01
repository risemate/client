import { useModal } from '@hooks/atoms/useModalAtom';
import { decideCoachingMutation } from '@queries/coaching';
import { isEmpty } from '@utils/helpers';
import { calculateTimeRemaining } from '@utils/timeUtil';
import { useEffect, useState } from 'react';
import { useController, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CoachingDecideRequest, CoachingExpertResponse } from 'types/coach/coaching';

export default function usePendingItem(pending: CoachingExpertResponse) {
	const [timeRemain, setTimeRemain] = useState<string>('00:00:00');
	const navigate = useNavigate();
	const coachingDecideMutation = decideCoachingMutation();
	const refuseModalQueryKey = 'refuse-revise';
	const acceptModalQueryKey = 'accept-revise';
	const {
		isModal: isAcceptModalOpen,
		openModal: openAcceptModal,
		closeModal: closeAcceptModal,
	} = useModal(acceptModalQueryKey);
	const {
		isModal: isRefuseModalOpen,
		openModal: openRefuseModal,
		closeModal: closeRefuseModal,
	} = useModal(refuseModalQueryKey);

	const expertActionMethods = useForm<CoachingDecideRequest>({
		mode: 'onChange',
		defaultValues: {
			approve: false,
			message: '',
		},
	});

	const { control, setValue, reset, handleSubmit } = expertActionMethods;

	const updateApprove = (mode: 'accept' | 'refused') =>
		setValue('approve', mode === 'accept');
	const messageFields = useController({
		name: 'message',
		control,
		rules: { required: true },
	});

	const onSubmit = handleSubmit(async data => {
		try {
			await coachingDecideMutation.mutateAsync({ id: pending._id, body: data });
			isAcceptModalOpen && toast.success('수락 요청을 성공적으로 처리하였습니다');
			isRefuseModalOpen && toast.success('거절 요청을 성공적으로 처리하였습니다');
		} catch (error) {
			toast.error('처리 중 오류가 발생했습니다.');
		} finally {
			isAcceptModalOpen && closeAcceptModal();
			isRefuseModalOpen && closeRefuseModal();
		}
	});

	useEffect(() => {
		reset();
		if (isAcceptModalOpen) {
			updateApprove('accept');
		}
	}, [isAcceptModalOpen, isRefuseModalOpen]);

	return {
		timeRemain,
		navigateToResume: () => navigate(`/my-info/docs/${pending.originDoc}`),
		refuseModal: {
			queryKey: refuseModalQueryKey,
			open: openRefuseModal,
		},
		acceptModal: {
			queryKey: acceptModalQueryKey,
			open: openAcceptModal,
		},
		messageField: {
			textAreaProps: {
				...messageFields.field,
				placeholder: '메세지를 남겨주세요.',
				error: !isEmpty(messageFields.fieldState.error),
			},
			onSubmit,
		},
	};
}
