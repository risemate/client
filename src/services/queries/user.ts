import { authKeys } from '@queries/queryKeys';
import {
	UseMutationOptions,
	UseMutationResult,
	UseQueryOptions,
	UseQueryResult,
	useMutation,
	useQuery,
	useQueryClient,
} from '@tanstack/react-query';
import { fetchAuth, fetchUpdateUserInfo } from 'services/api/user';
import { Auth, UserInfoRequestProps } from 'types/User';

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

export const userInfoUpdateMutation = (
	options?: Omit<
		UseMutationOptions<Auth, unknown, UserInfoRequestProps, unknown>,
		'mutationFn' | 'onSuccess'
	>,
): UseMutationResult<Auth, unknown, UserInfoRequestProps, unknown> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (body: UserInfoRequestProps) => fetchUpdateUserInfo(body),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: authKeys.base,
				refetchType: 'active',
			});
		},
		...options,
	});
};
