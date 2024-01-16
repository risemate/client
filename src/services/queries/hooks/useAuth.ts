import { authKeys } from '@queries/queryKeys';
import { UseQueryOptions, UseQueryResult, useQuery } from '@tanstack/react-query';
import { fetchAuth } from 'services/api/user';
import { Auth } from 'types/User';

// export function useAuth(): { auth: Auth | undefined; refetch: () => void } {
// 	const { data: auth, refetch } = useQuery(['auth'], fetchAuth, {
// 		// refetchOnMount: true,
// 		staleTime: Infinity,
// 	});
// 	return { auth, refetch };
// }

export const useAuth = (options?: UseQueryOptions<Auth>): UseQueryResult<Auth> => {
	const token = localStorage.getItem('rm-checkpoint');
	return useQuery({
		queryKey: authKeys.base,
		queryFn: () => fetchAuth(),
		staleTime: Infinity,
		enabled: !!token,
		...options,
	});
};
