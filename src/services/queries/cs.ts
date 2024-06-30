import {
	fetchCreateCs,
	fetchCreateCsAsnwer,
	fetchCsList,
	fetchUpdateCs,
	fetchUpdateCsAsnwer,
	fetchUserCs,
} from '@api/cs';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { CS, RequestAnswer } from 'types/coach/product';
import {
	UseMutationOptionsType,
	UseMutationResultType,
	UseQueryOptionsType,
	UseQueryResultType,
} from 'types/query/query';

import { authKeys, productKeys } from './queryKeys';

export const csCreateMutation = (
	options?: UseMutationOptionsType<CS, RequestAnswer, 'onSuccess'>,
): UseMutationResultType<CS, RequestAnswer> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (body: RequestAnswer) => fetchCreateCs(body),
		onSuccess: data => {
			queryClient.invalidateQueries({ queryKey: productKeys.cs(data.product) });
		},
		...options,
	});
};

export const csUpdateMutation = (
	options?: UseMutationOptionsType<CS, RequestAnswer, 'onSuccess'>,
): UseMutationResultType<CS, RequestAnswer> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (body: RequestAnswer) => fetchUpdateCs(body),
		onSuccess: data => {
			queryClient.invalidateQueries({ queryKey: productKeys.cs(data.product) });
		},
		...options,
	});
};

export const csAnswerCreateMutation = (
	options?: UseMutationOptionsType<CS, RequestAnswer, 'onSuccess'>,
): UseMutationResultType<CS, RequestAnswer> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (body: RequestAnswer) => fetchCreateCsAsnwer(body),
		onSuccess: data => {
			queryClient.invalidateQueries({ queryKey: productKeys.cs(null, data._id) });
		},
		...options,
	});
};

export const csAnswerUpdateMutation = (
	options?: UseMutationOptionsType<CS, RequestAnswer, 'onSuccess'>,
): UseMutationResultType<CS, RequestAnswer> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (body: RequestAnswer) => fetchUpdateCsAsnwer(body),
		onSuccess: data => {
			queryClient.invalidateQueries({ queryKey: productKeys.cs(null, data._id) });
		},
		...options,
	});
};

export const userCsQuery = (
	options?: UseQueryOptionsType<CS[]>,
): UseQueryResultType<CS[]> => {
	return useQuery({
		queryKey: authKeys.base,
		queryFn: () => fetchUserCs(),
		...options,
	});
};

export const csListQuery = (
	id: string,
	options?: UseQueryOptionsType<CS[]>,
): UseQueryResultType<CS[]> => {
	return useQuery({
		queryKey: productKeys.cs(id),
		queryFn: () => fetchCsList(id),
		...options,
	});
};
