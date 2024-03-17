import { CAREER_PATH, fetchCareerDetail } from '@api/common';
import { UseQueryOptions, UseQueryResult, useQuery } from '@tanstack/react-query';
import { Career } from 'types/CareerDocument';
import { Resume } from 'types/Resume';

import { resumeKeys } from './queryKeys';

export const careerDetailQuery = <T = Resume>(
	id: string,
	isPublic = false,
	options?: Omit<UseQueryOptions<Career<T>>, 'queryKey' | 'queryFn'>,
): UseQueryResult<Career<T>> => {
	return useQuery({
		queryKey: resumeKeys.id(id),
		queryFn: () =>
			fetchCareerDetail<T>(isPublic ? CAREER_PATH.PUBLIC(id) : CAREER_PATH.DETAIL(id)),
		...options,
	});
};
