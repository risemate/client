import { useModal } from '@hooks/atoms/useModalAtom';
import { calculateTimeRemaining } from '@utils/timeUtil';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CoachingExpertResponse } from 'types/coach/coaching';

export default function usePendingItem(pending: CoachingExpertResponse) {
	const [timeRemain, setTimeRemain] = useState<string>('00:00:00');
	const navigate = useNavigate();
	const refuseModalQueryKey = 'refuse-revise';
	const acceptModalQueryKey = 'accept-revise';
	const { openModal: openRefuseModal } = useModal(refuseModalQueryKey);
	const { openModal: openAcceptModal } = useModal(acceptModalQueryKey);
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
		refuseModal: {
			queryKey: refuseModalQueryKey,
			open: openRefuseModal,
		},
		acceptModal: {
			queryKey: acceptModalQueryKey,
			open: openAcceptModal,
		},
	};
}
