import {
	fetchApplyExpert,
	fetchCreateExpertResume,
	fetchExpertResume,
	fetchUpdateExpertResume,
} from '@api/expert';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Career, CareerExpert } from 'types/career/careerDocument';
import { ApplyExpertResponse, ExpertResumeType } from 'types/coach/expert';
import { ApplyExpertProps } from 'types/coach/expert';
import {
	UseMutationOptionsType,
	UseMutationResultType,
	UseQueryOptionsType,
	UseQueryResultType,
} from 'types/query/query';

import { expertKeys } from './queryKeys';

export const expertApplyMutation = (
	options?: UseMutationOptionsType<ApplyExpertResponse, ApplyExpertProps, 'onSuccess'>,
): UseMutationResultType<ApplyExpertResponse, ApplyExpertProps> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (body: ApplyExpertProps) => fetchApplyExpert(body),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: expertKeys.base,
				refetchType: 'active',
			});
		},
		...options,
	});
};

export const expertResumeQuery = (
	options?: UseQueryOptionsType<CareerExpert<ExpertResumeType>>,
): UseQueryResultType<CareerExpert<ExpertResumeType>> => {
	return useQuery({
		queryKey: expertKeys.base,
		queryFn: () => fetchExpertResume(),
		...options,
	});
};

export const expertResumeCreateMutation = (
	options?: UseMutationOptionsType<
		Career<ExpertResumeType>,
		ExpertResumeType,
		'onSuccess'
	>,
): UseMutationResultType<Career<ExpertResumeType>, ExpertResumeType> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (body: ExpertResumeType) => fetchCreateExpertResume(body),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: expertKeys.base,
				refetchType: 'active',
			});
		},
		...options,
	});
};

export const expertResumeUpdateutation = (
	options?: UseMutationOptionsType<
		Career<ExpertResumeType>,
		Partial<ExpertResumeType>,
		'onSuccess'
	>,
): UseMutationResultType<Career<ExpertResumeType>, Partial<ExpertResumeType>> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (body: Partial<ExpertResumeType>) => fetchUpdateExpertResume(body),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: expertKeys.base,
				refetchType: 'active',
			});
		},
		...options,
	});
};
