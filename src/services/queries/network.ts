import { fetchPublicCareers, fetchPublicResumeDetail } from '@api/network';
import { networkKeys } from '@queries/queryKeys';
import { UseQueryOptions, UseQueryResult, useQuery } from '@tanstack/react-query';
import { Career } from 'types/CareerDocument';
import { NetworkPagingQuery, PagingQueryResponse } from 'types/Query/Query';
import { Resume } from 'types/Resume';

export const networkQuery = (
	params?: NetworkPagingQuery,
	options?: Omit<UseQueryOptions<PagingQueryResponse<Career>>, 'queryKey' | 'queryFn'>,
): UseQueryResult<PagingQueryResponse<Career>> => {
	return useQuery({
		queryKey: networkKeys.career(params),
		queryFn: () => fetchPublicCareers(params),
		...options,
	});
};

export const networkDetailQuery = (
	id: string,
	options?: Omit<UseQueryOptions<Career<Resume>>, 'queryKey' | 'queryFn'>,
): UseQueryResult<Career<Resume>> => {
	return useQuery({
		queryKey: networkKeys.id(id),
		queryFn: () => fetchPublicResumeDetail(id),
		...options,
	});
};
