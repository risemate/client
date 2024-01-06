//TODO: path is working, need to change later
import { UseQueryOptions, UseQueryResult, useQuery } from '@tanstack/react-query';
import { Career } from 'types/CareerDocument';
import { CareersQueryProps } from 'types/Query/ResumeQuery';
import { Resume } from 'types/Resume';

import { fetchCareers, fetchResumeDetail } from '../api/resume';
import { resumeKeys } from '../queries/queryKeys';

// Personal Resumes
export const careersQuery = (
	params: CareersQueryProps,
	options?: UseQueryOptions<Career<Resume>[]>,
): UseQueryResult<Career<Resume>[]> => {
	return useQuery({
		queryKey: resumeKeys.career(params),
		queryFn: () => fetchCareers(params),
		...options,
	});
};

// export const fetchEditingCareers = async (id: string) => {
//     return await axios.get(RESUME_PATH.EDITING(id));
// }

export const resumeDetailQuery = (
	id: string,
	options?: UseQueryOptions<Career<Resume>>,
): UseQueryResult<Career<Resume>> => {
	return useQuery({
		queryKey: resumeKeys.id(id),
		queryFn: () => fetchResumeDetail(id),
		...options,
	});
};

// export const fetchCreateResume = async () => {
//     return await axios.post(RESUME_PATH.DETAIL());
// }

// export const fetchUpdateResume = async (id: string) => {
//     return await axios.patch(RESUME_PATH.DETAIL(id));
// }

// export const fetchDeleteResume = async (id: string) => {
//     return await axios.delete(RESUME_PATH.DETAIL(id));
// }

// // Public Resumes
// export const fetchPublicCareers = async (params: {page?: number, pageSize?: number}) => {
//     return await axios.get(RESUME_PATH.PUBLIC(), {params});
// }

// export const fetchPublicResumeDetail = async (id: string) => {
//     return await axios.get(RESUME_PATH.PUBLIC(id))
// }
