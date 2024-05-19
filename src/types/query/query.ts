import {
	UseInfiniteQueryOptions,
	UseInfiniteQueryResult,
	UseMutationOptions,
	UseMutationResult,
	UseQueryOptions,
	UseQueryResult,
	UseSuspenseQueryOptions,
	UseSuspenseQueryResult,
} from '@tanstack/react-query';
import { CareerType } from 'types/career/careerDocument';

export type UseQueryOptionsType<
	ReturnType,
	OmitType extends keyof UseQueryOptions = never,
> = Omit<UseQueryOptions<ReturnType>, 'queryFn' | 'queryKey' | OmitType>;
export type UseQueryResultType<ReturnType> = UseQueryResult<ReturnType>;

export type UseInfiniteQueryOptionsType<
	ReturnType,
	OmitType extends keyof UseInfiniteQueryOptions,
> = Omit<UseInfiniteQueryOptions<ReturnType>, 'queryFn' | 'queryKey' | OmitType>;
export type UseInfiniteQueryResultType<ReturnType> = UseInfiniteQueryResult<
	PagingQueryResponse<ReturnType>
>;

export type UseSuspenseQueryOptionsType<
	ReturnType,
	OmitType extends keyof UseSuspenseQueryOptions = never,
> = Omit<UseSuspenseQueryOptions<ReturnType>, 'queryFn' | 'queryKey' | OmitType>;
export type UseSuspenseQueryResultType<ReturnType> = UseSuspenseQueryResult<ReturnType>;

export type UseMutationOptionsType<
	ReturnType,
	PropType,
	OmitType extends keyof UseMutationOptions = never,
> = Omit<
	UseMutationOptions<ReturnType, unknown, PropType, unknown>,
	'mutationFn' | OmitType
>;
export type UseMutationResultType<ReturnType, PropType> = UseMutationResult<
	ReturnType,
	unknown,
	PropType,
	unknown
>;

export type PagingQueryProps = {
	page?: number;
	pageSize?: number;
};

export type PagingQueryResponse<T> = {
	data: T[];
	totalDocs: number;
	limit: number;
	totalPages: number;
	page: number;
	pagingCounter: number;
};

export type NetworkPagingQuery = PagingQueryProps & {
	careerType?: CareerType;
};
