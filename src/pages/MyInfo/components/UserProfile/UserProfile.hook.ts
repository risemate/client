import { useSearchParam } from '@hooks/common/useSearchParam';
import { useAuth } from '@queries/user';
import { useNavigate } from 'react-router-dom';

export default function useUserProfile() {
	const { data: auth } = useAuth();
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
			isExpert: auth?.role === 1,
		},
		logout,
		changeParamToEdit: () => changeParam('edit'),
	};
}
