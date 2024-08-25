import { useModal } from '@hooks/atoms/useModalAtom';
import { useSearchParam } from '@hooks/common/useSearchParam';
import { authQuery } from '@queries/user';

export default function useUserProfile() {
	const { data: auth } = authQuery();
	const { changeParam } = useSearchParam('mode');
	const { openModal: openLogoutModal } = useModal('logout');

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
		changeParamToEdit: () => changeParam('edit'),
		openLogoutModal,
	};
}
