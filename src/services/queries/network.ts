import { fetchPublicCareers, fetchPublicResumeDetail } from '@api/network';
import { networkKeys } from '@queries/queryKeys';
import { useQuery } from '@tanstack/react-query';
import { Career } from 'types/career/careerDocument';
import { Resume } from 'types/career/resume';
import {
	NetworkPagingQuery,
	PagingQueryResponse,
	UseQueryOptionsType,
	UseQueryResultType,
} from 'types/query/Query';

export const networkQuery = (
	params?: NetworkPagingQuery,
	options?: UseQueryOptionsType<PagingQueryResponse<Career>>,
): UseQueryResultType<PagingQueryResponse<Career>> => {
	return useQuery({
		queryKey: networkKeys.career(params),
		queryFn: () => fetchPublicCareers(params),
		...options,
	});
};

export const networkDetailQuery = (
	id: string,
	options?: UseQueryOptionsType<Career<Resume>>,
): UseQueryResultType<Career<Resume>> => {
	return useQuery({
		queryKey: networkKeys.id(id),
		queryFn: () => fetchPublicResumeDetail(id),
		...options,
	});
};
