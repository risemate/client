import { useSearchParam } from '@hooks/common/useSearchParam';
import { authQuery } from '@queries/user';
import { useNavigate } from 'react-router-dom';

export default function useMyInfoDetail() {
	const { data: auth } = authQuery();
	const { queryParam, changeParam } = useSearchParam('mode');
	const navigate = useNavigate();
	return {
		displayedAuth: {
			coin: `${auth?.coin || 0}p`,
			cash: `${auth?.cash || 0}개`,
			review: `${auth?.reviewCount || 0}개`,
			waiting: `${auth?.responseWaitngCoachingCount || 0}개`,
			progress: `${auth?.inProgressCoachingCount || 0}게`,
			complete: `${auth?.completedCoachingCount || 0}개`,
		},
		changeParam: {
			toPayment: () => changeParam('payment'),
			toReview: () => changeParam('review'),
		},
		queryParam: {
			detail: !queryParam,
			edit: queryParam === 'edit',
			payment: queryParam === 'payment',
			review: queryParam === 'review',
		},
		navigateToDocs: () => navigate('/my-info/docs'),
	};
}
