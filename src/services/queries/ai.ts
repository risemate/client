import { fetchReviseAi, fetchReviseAiAgain } from '@api/ai';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Career } from 'types/career/careerDocument';
import { Resume } from 'types/career/resume';
import { UseMutationOptionsType, UseMutationResultType } from 'types/Query/Query';
import { AiQueryProps } from 'types/Query/QueryProps';

import { aiKeys } from './queryKeys';

export const aiRevisionMutation = (
	options?: UseMutationOptionsType<Career<Resume>, AiQueryProps, 'onSuccess'>,
): UseMutationResultType<Career<Resume>, AiQueryProps> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (body: AiQueryProps) => fetchReviseAi(body),
		onSuccess(_, variables) {
			queryClient.invalidateQueries({
				queryKey: aiKeys.id(variables.orgCareerId),
				refetchType: 'active',
			});
		},
		...options,
	});
};

export const aiRevisionAgainMutation = (
	options?: UseMutationOptionsType<Career<Resume>, AiQueryProps, 'onSuccess'>,
): UseMutationResultType<Career<Resume>, AiQueryProps> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (body: AiQueryProps) => fetchReviseAiAgain(body),
		onSuccess(_, variables) {
			queryClient.invalidateQueries({
				queryKey: aiKeys.id(variables.orgCareerId),
				refetchType: 'active',
			});
		},
		...options,
	});
};
