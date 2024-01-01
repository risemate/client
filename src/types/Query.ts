import { MutationObserverOptions, QueryKey, UseMutationOptions, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

export type UseQueryOptionsType<T> = UseQueryOptions<AxiosResponse<T>, AxiosError, T, QueryKey[]>;

export type UseMutationOptionsType<T> = UseMutationOptions<AxiosResponse<T>, AxiosError, T, unknown>;

// export interface UseMutationOptions<TData = unknown, TError = unknown, TVariables = void, TContext = unknown>
// extends Omit<MutationObserverOptions<TData, TError, TVariables, TContext>, '_defaulted' | 'variables'> {
// }

// useQueryOption type 지정, general hook 찾기
// suspense, errorBoundary 사용하는 법 w/ react-query
// 