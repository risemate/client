import { getErrorDataByCode } from '#services/errors/errorMessage';
import { QueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export const queryClient = () => {
	return new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				staleTime: 1000 * 60 * 10,
				retry: false,
				throwOnError: true,
			},
			mutations: {
				throwOnError: false,
				// eslint-disable-next-line
				onError: (error: any) => {
					const errorData = getErrorDataByCode(error);
					toast.error(`[${errorData.code}] ${errorData.message}`);
				},
			},
		},
	});
};
