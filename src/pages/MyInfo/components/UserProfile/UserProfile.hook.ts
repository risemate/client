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
	return {
		displayAuth: {
			name: auth?.name || auth?.nickname || '000',
			nickname: auth?.nickname || '000',
			email: auth?.email || '-',
			picture: auth?.picture || '',
			isExpert: auth?.role === 'EXPERT',
		},
		logout,
		changeParamToEdit: () => changeParam('edit'),
	};
}
