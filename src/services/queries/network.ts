import { fetchPublicCareers, fetchPublicResumeDetail } from '@api/network';
import { networkKeys } from '@queries/queryKeys';
import { UseQueryOptions, UseQueryResult, useQuery } from '@tanstack/react-query';
import { Career } from 'types/CareerDocument';
import { PagingQueryProps, PagingQueryResponse } from 'types/Query/Query';
import { Resume } from 'types/Resume';

export const networkQuery = (
	params?: PagingQueryProps,
	options?: UseQueryOptions<PagingQueryResponse<Career>>,
): UseQueryResult<PagingQueryResponse<Career>> => {
	return useQuery({
		queryKey: networkKeys.base,
		queryFn: () => fetchPublicCareers(params),
		...options,
	});
};

export const networkDetailQuery = (
	id: string,
	options?: UseQueryOptions<Career<Resume>>,
): UseQueryResult<Career<Resume>> => {
	return useQuery({
		queryKey: networkKeys.id(id),
		queryFn: () => fetchPublicResumeDetail(id),
		...options,
	});
};
