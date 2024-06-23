import {
	fetchCreateReview,
	fetchCreateReviewAnswer,
	fetchReview,
	fetchUpdateReview,
	fetchUpdateReviewAnswer,
	fetchUserReview,
} from '@api/review';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { RequestReview, Review } from 'types/coach/product';
import {
	UseMutationOptionsType,
	UseMutationResultType,
	UseQueryOptionsType,
	UseQueryResultType,
} from 'types/query/query';

import { authKeys, productKeys } from './queryKeys';

export const reviewQuery = (
	id: string,
	options?: UseQueryOptionsType<Review[]>,
): UseQueryResultType<Review[]> => {
	return useQuery({
		queryKey: productKeys.review(id),
		queryFn: () => fetchReview(id),
		enabled: !!id,
		...options,
	});
};

export const reviewCreateMutation = (
	options?: UseMutationOptionsType<Review, RequestReview, 'onSuccess'>,
): UseMutationResultType<Review, RequestReview> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (body: RequestReview) => fetchCreateReview(body),
		onSuccess: data => {
			queryClient.invalidateQueries({ queryKey: productKeys.review(data.product) });
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
			queryClient.invalidateQueries({ queryKey: productKeys.review(data.product) });
		},
		...options,
	});
};

export const reviewAnswerCreateMutation = (
	options?: UseMutationOptionsType<Review, RequestReview, 'onSuccess'>,
): UseMutationResultType<Review, RequestReview> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (body: RequestReview) => fetchCreateReviewAnswer(body),
		onSuccess: data => {
			queryClient.invalidateQueries({ queryKey: productKeys.review(null, data._id) });
		},
		...options,
	});
};

export const reviewAnswerUpdateMutation = (
	options?: UseMutationOptionsType<Review, RequestReview, 'onSuccess'>,
): UseMutationResultType<Review, RequestReview> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (body: RequestReview) => fetchUpdateReviewAnswer(body),
		onSuccess: data => {
			queryClient.invalidateQueries({ queryKey: productKeys.review(null, data._id) });
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
