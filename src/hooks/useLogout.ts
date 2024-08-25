import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function useLogout() {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const logout = async () => {
		try {
			await queryClient.clear();
			localStorage.removeItem('rm-checkpoint');
			navigate('/');
			window.location.reload();
			toast.success('로그아웃 성공');
		} catch (error) {
			toast.error('로그아웃 실패. 다시 시도해주세요.');
		}
	};
	return { logout };
}
