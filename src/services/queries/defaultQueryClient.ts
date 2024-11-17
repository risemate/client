import { getErrorDataByCode } from '#services/errors/errorMessage';
import { QueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

// QueryClient 인스턴스를 하나만 생성
export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false, // 창 포커스 시 refetch 비활성화
			staleTime: 1000 * 60 * 10, // 10분 동안 데이터를 재요청하지 않음
			retry: false, // 오류 시 자동 재시도 비활성화
			throwOnError: true, // 오류 발생 시 예외를 던짐
		},
		mutations: {
			throwOnError: false, // 오류 발생 시 예외를 던지지 않음
			onError: (error: any) => {
				// 에러 발생 시 처리 로직 (예: toast)
				const errorData = getErrorDataByCode(error); // 이건 사용자의 에러 처리 로직에 맞춰서 정의하셔야 합니다.
				toast.error(`[${errorData.code}] ${errorData.message}`);
			},
		},
	},
});
