import useLogout from '@hooks/useLogout';

import Modal from './base/Modal';

export default function LogoutModal() {
	const { logout } = useLogout();
	return (
		<Modal title='로그아웃' queryKey='logout' onClick={logout}>
			로그아웃하시겠습니까?
		</Modal>
	);
}
