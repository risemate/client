import {
	fetchCoverletterDetail,
	fetchCreateCoverletter,
	fetchDeleteCoverletter,
	fetchUpdateCoverletter,
} from '@api/coverletter';
import { coverletterKeys } from '@queries/queryKeys';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Career } from 'types/career/careerDocument';
import { Coverletter } from 'types/career/coverletter';
import {
	UseMutationOptionsType,
	UseMutationResultType,
	UseQueryOptionsType,
	UseQueryResultType,
} from 'types/query/query';
import { CoverletterUpdateProps } from 'types/query/queryProps';

export const coverletterDetailQuery = (
	id: string,
	options?: UseQueryOptionsType<Career<Coverletter>>,
): UseQueryResultType<Career<Coverletter>> => {
	return useQuery({
		queryKey: coverletterKeys.id(id),
		queryFn: () => fetchCoverletterDetail(id),
		...options,
	});
};

export const coverletterCreateMutation = (
	options?: UseMutationOptionsType<Career<Coverletter>, Coverletter, 'onSuccess'>,
): UseMutationResultType<Career<Coverletter>, Coverletter> => {
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
	options?: UseMutationOptionsType<Career<Coverletter>, CoverletterUpdateProps>,
): UseMutationResultType<Career<Coverletter>, CoverletterUpdateProps> => {
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
	options?: UseMutationOptionsType<void, string, 'onSuccess'>,
): UseMutationResultType<void, string> => {
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
