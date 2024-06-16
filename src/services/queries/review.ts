import {
	fetchCreateReview,
	fetchCreateReviewAnswer,
	fetchUpdateReview,
	fetchUpdateReviewAnswer,
	fetchUserReview,
} from '@api/review';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { RequestAnswer, RequestReview, Review } from 'types/coach/product';
import {
	UseMutationOptionsType,
	UseMutationResultType,
	UseQueryOptionsType,
	UseQueryResultType,
} from 'types/query/query';

import { authKeys, productKeys } from './queryKeys';

export const reviewCreateMutation = (
	options?: UseMutationOptionsType<Review, RequestReview, 'onSuccess'>,
): UseMutationResultType<Review, RequestReview> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (body: RequestReview) => fetchCreateReview(body),
		onSuccess: data => {
			queryClient.invalidateQueries({ queryKey: productKeys.id(data._id) });
		},
		...options,
	});
};

export const reviewUpdateMutation = (
	options?: UseMutationOptionsType<Review, RequestReview, 'onSuccess'>,
): UseMutationResultType<Review, RequestReview> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (body: RequestReview) => fetchUpdateReview(body),
		onSuccess: data => {
			queryClient.invalidateQueries({ queryKey: productKeys.id(data._id) });
		},
		...options,
	});
};

export const reviewCreateReivewAnswer = (
	options?: UseMutationOptionsType<Review, RequestAnswer, 'onSuccess'>,
): UseMutationResultType<Review, RequestAnswer> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (body: RequestAnswer) => fetchCreateReviewAnswer(body),
		onSuccess: data => {
			queryClient.invalidateQueries({ queryKey: productKeys.id(data._id) });
		},
		...options,
	});
};

export const reviewUpdateAnswerMutation = (
	options?: UseMutationOptionsType<Review, RequestAnswer, 'onSuccess'>,
): UseMutationResultType<Review, RequestAnswer> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (body: RequestAnswer) => fetchUpdateReviewAnswer(body),
		onSuccess: data => {
			queryClient.invalidateQueries({ queryKey: productKeys.id(data._id) });
		},
		...options,
	});
};

export const userReviewListQuery = (
	options?: UseQueryOptionsType<Review[]>,
): UseQueryResultType<Review[]> => {
	return useQuery({
		queryKey: authKeys.base,
		queryFn: () => fetchUserReview(),
		...options,
	});
};
