import { getErrorDataByCode } from '#services/errors/errorMessage';
import { FallbackProps } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';

import Button from '@common/Button';

export default function GlobalErrorFallback({
	error,
	resetErrorBoundary,
}: FallbackProps) {
	const navigate = useNavigate();
	const navigatePage = (to: string) => {
		resetErrorBoundary();
		navigate(to);
	};
	const errorData = getErrorDataByCode(error);
	return (
		<div>
			<h1>{errorData.code}</h1>
			<h2>{errorData.message}</h2>
			<Button onClick={() => navigatePage(errorData.requireLogin ? '/login' : '/main')}>
				{errorData.requireLogin ? '로그인 이동' : '메인화면 이동'}
			</Button>
		</div>
	);
}
