import { authKeys } from '@queries/queryKeys';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchAuth, fetchUpdateUserInfo } from 'services/api/user';
import { Auth, UserInfoRequestProps } from 'types/auth';
import {
	UseMutationOptionsType,
	UseMutationResultType,
	UseQueryOptionsType,
	UseQueryResultType,
} from 'types/Query/Query';

// export function authQuery(): { auth: Auth | undefined; refetch: () => void } {
// 	const { data: auth, refetch } = useQuery(['auth'], fetchAuth, {
// 		// refetchOnMount: true,
// 		staleTime: Infinity,
// 	});
// 	return { auth, refetch };
// }

export const authQuery = (
	options?: UseQueryOptionsType<Auth>,
): UseQueryResultType<Auth> => {
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
	options?: UseMutationOptionsType<Auth, UserInfoRequestProps, 'onSuccess'>,
): UseMutationResultType<Auth, UserInfoRequestProps> => {
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
