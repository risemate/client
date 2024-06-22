import { CAREER_PATH, fetchCareerDetail } from '@api/common';
import { UseQueryOptions, UseQueryResult, useQuery } from '@tanstack/react-query';
import { Career } from 'types/career/careerDocument';
import { Resume } from 'types/career/resume';

import { resumeKeys } from './queryKeys';

export const careerDetailQuery = <T = Resume>(
	id: string,
	options?: Omit<UseQueryOptions<Career<T>>, 'queryKey' | 'queryFn'>,
): UseQueryResult<Career<T>> => {
	return useQuery({
		queryKey: resumeKeys.id(id),
		queryFn: () => fetchCareerDetail<T>(CAREER_PATH.DETAIL(id)),
		...options,
	});
};
