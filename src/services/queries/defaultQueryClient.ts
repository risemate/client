import { QueryClient } from '@tanstack/react-query';

export const queryClient = () => {
	return new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				staleTime: 1000 * 60 * 10,
				retry: false,
			},
		},
	});
};
