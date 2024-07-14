// hooks/coaching.ts
import {
	fetchApplyCoaching,
	fetchDecideCoaching,
	fetchUserCoachingList,
	fetchUserCoachingDetail,
	fetchUserCoachingAction,
	fetchExpertCoachingList,
	fetchExpertCoachingDetail,
	fetchExpertCoachingAction,
	fetchCoachingCareer,
} from '@api/coaching';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
	CoachingDecideRequest,
	CoachingRequest,
	CoachingResponse,
} from 'types/coach/coaching';
import { PropsWithId } from 'types/common/column';
import {
	UseMutationOptionsType,
	UseMutationResultType,
	UseQueryOptionsType,
	UseQueryResultType,
} from 'types/query/query';

import { coachingKeys } from './queryKeys';

export const applyCoachingMutation = (
	options?: UseMutationOptionsType<CoachingResponse, CoachingRequest, 'onSuccess'>,
): UseMutationResultType<CoachingResponse, CoachingRequest> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (body: CoachingRequest) => fetchApplyCoaching(body),
		onSuccess(_, variables) {
			queryClient.invalidateQueries({
				queryKey: coachingKeys.coaching_request(variables),
				refetchType: 'active',
			});
		},
		...options,
	});
};

export const decideCoachingMutation = (
	options?: UseMutationOptionsType<
		CoachingResponse,
		PropsWithId<CoachingDecideRequest>,
		'onSuccess'
	>,
): UseMutationResultType<CoachingResponse, PropsWithId<CoachingDecideRequest>> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (variables: PropsWithId<CoachingDecideRequest>) =>
			fetchDecideCoaching(variables.id, variables.body),
		onSuccess(_, variables) {
			queryClient.invalidateQueries({
				queryKey: coachingKeys.coaching_decide(variables),
				refetchType: 'active',
			});
		},
		...options,
	});
};

export const userCoachingListQuery = (
	options?: UseQueryOptionsType<CoachingResponse[]>,
): UseQueryResultType<CoachingResponse[]> => {
	return useQuery({
		queryKey: coachingKeys.base,
		queryFn: () => fetchUserCoachingList(),
		...options,
	});
};

export const userCoachingDetailQuery = (
	id: string,
	options?: UseQueryOptionsType<CoachingResponse>,
): UseQueryResultType<CoachingResponse> => {
	return useQuery({
		queryKey: coachingKeys.id(id),
		queryFn: () => fetchUserCoachingDetail(id),
		...options,
	});
};

export const userCoachingActionMutation = (
	options?: UseMutationOptionsType<CoachingResponse, string, 'onSuccess'>,
): UseMutationResultType<CoachingResponse, string> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (id: string) => fetchUserCoachingAction(id),
		onSuccess(_, id) {
			queryClient.invalidateQueries({
				queryKey: coachingKeys.id(id),
				refetchType: 'active',
			});
		},
		...options,
	});
};

export const expertCoachingListQuery = (
	options?: UseQueryOptionsType<CoachingResponse[]>,
): UseQueryResultType<CoachingResponse[]> => {
	return useQuery({
		queryKey: coachingKeys.base,
		queryFn: () => fetchExpertCoachingList(),
		...options,
	});
};

export const expertCoachingDetailQuery = (
	id: string,
	options?: UseQueryOptionsType<CoachingResponse>,
): UseQueryResultType<CoachingResponse> => {
	return useQuery({
		queryKey: coachingKeys.id(id),
		queryFn: () => fetchExpertCoachingDetail(id),
		...options,
	});
};

export const expertCoachingActionMutation = (
	options?: UseMutationOptionsType<CoachingResponse, string, 'onSuccess'>,
): UseMutationResultType<CoachingResponse, string> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (id: string) => fetchExpertCoachingAction(id),
		onSuccess(_, id) {
			queryClient.invalidateQueries({
				queryKey: coachingKeys.id(id),
				refetchType: 'active',
			});
		},
		...options,
	});
};

export const coachingCareerMutation = (
	options?: UseMutationOptionsType<CoachingResponse, string, 'onSuccess'>,
): UseMutationResultType<CoachingResponse, string> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (id: string) => fetchCoachingCareer(id),
		onSuccess(_, id) {
			queryClient.invalidateQueries({
				queryKey: coachingKeys.id(id),
				refetchType: 'active',
			});
		},
		...options,
	});
};
