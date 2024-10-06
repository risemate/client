import { authKeys } from '@queries/queryKeys';
import { useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { fetchAuth, fetchUpdateUserInfo } from 'services/api/user';
import { Auth, UserInfoRequestProps } from 'types/auth';
import {
	UseMutationOptionsType,
	UseMutationResultType,
	UseSuspenseQueryOptionsType,
	UseSuspenseQueryResultType,
} from 'types/query/query';

export const authQuery = (
	options?: UseSuspenseQueryOptionsType<Auth>,
): UseSuspenseQueryResultType<Auth> => {
	// const token = localStorage.getItem('rm-checkpoint');
	return useSuspenseQuery({
		queryKey: authKeys.base,
		queryFn: () => fetchAuth(),
		staleTime: Infinity,
		// enabled: !!token,
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
