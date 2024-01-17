import { QueryKey, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

export type UseQueryOptionsType<T> = UseQueryOptions<
	AxiosResponse<T>,
	AxiosError,
	T,
	QueryKey[]
>;

export type UseMutationOptionsType<T> = UseMutationOptions<
	AxiosResponse<T>,
	AxiosError,
	T,
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

// export interface UseMutationOptions<TData = unknown, TError = unknown, TVariables = void, TContext = unknown>
// extends Omit<MutationObserverOptions<TData, TError, TVariables, TContext>, '_defaulted' | 'variables'> {
// }

// useQueryOption type 지정, general hook 찾기
// suspense, errorBoundary 사용하는 법 w/ react-query
//
