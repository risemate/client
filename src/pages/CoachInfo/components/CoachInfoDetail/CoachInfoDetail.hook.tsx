import { useSearchParam } from '@hooks/common/useSearchParam';
import { authQuery } from '@queries/user';
import { useNavigate } from 'react-router-dom';

export default function useCoachInfoDetail() {
	const { queryParam, changeParam } = useSearchParam('mode');
	const navigate = useNavigate();
	const { data: auth } = authQuery();
	const hasPost = true;
	return {
		hasPost,
		queryParam: {
			detail: !queryParam,
			withdraw: queryParam === 'withdraw',
		},
		changeParam: {
			toWithdraw: () => changeParam('withdraw'),
		},
		navigate: {
			toProduct: () => navigate('/write'),
			toManagement: () => navigate('management'),
		},
		displayInfo: {
			coin: `${auth?.coin || 0}p`,
			cash: `${auth?.cash || 0}개`,
			cs: `${auth?.csCount || 0}개`,
			review: `${auth?.reviewCount || 0}개`,
			waiting: `${auth?.responseWaitngCoachingCount || 0}개`,
			progress: `${auth?.inProgressCoachingCount || 0}개`,
			complete: `${auth?.completedCoachingCount || 0}개`,
		},
	};
}
