import {
	fetchCoverletterDetail,
	fetchCreateCoverletter,
	fetchDeleteCoverletter,
	fetchUpdateCoverletter,
} from '@api/coverletter';
import { coverletterKeys } from '@queries/queryKeys';
import {
	UseMutationOptions,
	UseMutationResult,
	UseQueryOptions,
	UseQueryResult,
	useMutation,
	useQuery,
	useQueryClient,
} from '@tanstack/react-query';
import { Career } from 'types/CareerDocument';
import { Coverletter } from 'types/Coverletter';
import { CoverletterUpdateProps } from 'types/Query/CoverletterQuery';

export const coverletterDetailQuery = (
	id: string,
	options?: Omit<UseQueryOptions<Career<Coverletter>>, 'queryKey' | 'queryFn'>,
): UseQueryResult<Career<Coverletter>> => {
	return useQuery({
		queryKey: coverletterKeys.id(id),
		queryFn: () => fetchCoverletterDetail(id),
		...options,
	});
};

export const coverletterCreateMutation = (
	options?: UseMutationOptions<Career<Coverletter>, unknown, Coverletter, unknown>,
): UseMutationResult<Career<Coverletter>, unknown, Coverletter, unknown> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (body: Coverletter) => fetchCreateCoverletter(body),
		onSuccess(data) {
			queryClient.invalidateQueries({
				queryKey: coverletterKeys.id(data._id),
				refetchType: 'active',
			});
		},
		...options,
	});
};

export const coverletterUpdateMutation = (
	options?: UseMutationOptions<
		Career<Coverletter>,
		unknown,
		CoverletterUpdateProps,
		unknown
	>,
): UseMutationResult<Career<Coverletter>, unknown, CoverletterUpdateProps, unknown> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: ({ id, body }: CoverletterUpdateProps) =>
			fetchUpdateCoverletter(id, body),
		onSuccess(data) {
			queryClient.invalidateQueries({
				queryKey: coverletterKeys.id(data._id),
				refetchType: 'active',
			});
		},
		...options,
	});
};

export const coverletterDeleteMutation = (
	options?: UseMutationOptions<void, unknown, string, unknown>,
): UseMutationResult<void, unknown, string, unknown> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (id: string) => fetchDeleteCoverletter(id),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: coverletterKeys.base,
				refetchType: 'active',
			});
		},
		...options,
	});
};
