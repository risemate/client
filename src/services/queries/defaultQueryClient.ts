import { QueryClient } from '@tanstack/react-query';

export const queryClient = () => {
	return new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				// cacheTime: 1000 * 60 * 10,
				staleTime: 1000 * 60 * 10,
				retry: false,
			},
		},
	});
};
