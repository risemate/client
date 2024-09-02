import { authQuery } from '@queries/user';
import { Navigate, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';

import Spinner from '@common/Spinner';

interface PrivateRouteProps {
	expert?: boolean;
	admin?: boolean;
}

export default function PrivateRoute({
	expert = false,
	admin = false,
}: PrivateRouteProps) {
	const token = localStorage.getItem('rm-checkpoint');
	const { data: auth, isLoading, isError } = authQuery();
	const isExpert = auth?.role === 'EXPERT';
	const isAdmin = auth?.admin;

	if (isLoading) {
		return <Spinner />;
	}

	// 인증에 실패했을 경우
	if (isError || !auth) {
		toast.error('인증에 실패했습니다. 다시 로그인해 주세요.');
		return <Navigate to='/' />;
	}

	// 로그인하지 않았을 경우
	if (!token) {
		toast.error('로그인이 필요합니다!');
		return <Navigate to='/' state={{ requireLogin: true }} />;
	}

	// 전문가만 갈 수 있는 곳에 전문가가 아닐 경우
	if (expert && !isExpert) {
		toast.error('전문가 전용 페이지입니다. 인증된 계정으로 다시 시도해 주세요.');
		return <Navigate to='/' />;
	}

	// Admin만 갈 수 있는 곳에 Admin가 아닐 경우
	if (admin && !isAdmin) {
		toast.error('Admin 전용 페이지입니다. 인증된 계정으로 다시 시도해 주세요.');
		return <Navigate to='/' />;
	}

	return <Outlet />;
}
