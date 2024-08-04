import { useModal } from '@hooks/atoms/useModalAtom';
import { calculateTimeRemaining } from '@utils/timeUtil';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CoachingResponse } from 'types/coach/coaching';

export default function usePendingItem(pending: CoachingResponse) {
	const [timeRemain, setTimeRemain] = useState<string>('00:00:00');
	const navigate = useNavigate();
	const cancelModalQueryKey = 'cancel-revise';
	const { openModal: openCancelModal } = useModal(cancelModalQueryKey);
	useEffect(() => {
		const settingTimeRemain = () => {
			setTimeRemain(calculateTimeRemaining(pending.createdAt));
		};
		const intervalId = setInterval(settingTimeRemain, 1000);
		return () => clearInterval(intervalId);
	}, [pending.createdAt]);
	return {
		timeRemain,
		navigateToResume: () => navigate(`/my-info/docs/${pending.originDoc}`),
		navigateToProduct: () => navigate(`/experts/${pending.product}`),
		cancelModel: {
			queryKey: cancelModalQueryKey,
			open: openCancelModal,
		},
	};
}
