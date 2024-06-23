import { useSearchParam } from '@hooks/common/useSearchParam';
import { authQuery } from '@queries/user';
import { useNavigate } from 'react-router-dom';

export default function useUserProfile() {
	const { data: auth } = authQuery();
	const navigate = useNavigate();
	const { changeParam } = useSearchParam('mode');
	const logout = () => {
		localStorage.removeItem('rm-checkpoint');
		navigate('/');
	};

	const expertButton = {
		to: auth?.role === 'EXPERT' ? '/coach-info' : '/form/expert',
		label: () => {
			if (auth?.role === 'EXPERT') return '전문가로 변환하기';
			else if (auth?.role === 'REVIEWING') return '검토 중';
			return '전문가 신청하기';
		},
		disabled: auth?.role === 'REVIEWING',
	};
	return {
		displayAuth: {
			name: auth?.name || auth?.nickname || '000',
			nickname: auth?.nickname || '000',
			email: auth?.email || '-',
			picture: auth?.picture || '',
		},
		expertButton,
		logout,
		changeParamToEdit: () => changeParam('edit'),
	};
}
