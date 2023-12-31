//TODO: path is working, need to change later
import {
	UseMutationOptions,
	UseMutationResult,
	UseQueryOptions,
	UseQueryResult,
	useMutation,
	useQuery,
	useQueryClient,
} from '@tanstack/react-query';
import { Career } from 'types/CareerDocument';
import { CareersQueryProps } from 'types/Query/ResumeQuery';
import { Resume } from 'types/Resume';

import {
	fetchCareers,
	fetchCreateResume,
	fetchDeleteResume,
	fetchResumeDetail,
	fetchReviseCareers,
	fetchUpdateResume,
} from '../api/resume';
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

export const reviseCareersQuery = (
	id: string,
	options?: UseQueryOptions<Career<Resume>[]>,
): UseQueryResult<Career<Resume>[]> => {
	return useQuery({
		queryKey: resumeKeys.id(id),
		queryFn: () => fetchReviseCareers(id),
		...options,
	});
};

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

export const resumeCreateMutation = (
	options?: UseMutationOptions<Career<Resume>, unknown, Resume, unknown>,
): UseMutationResult<Career<Resume>, unknown, Resume, unknown> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (body: Resume) => fetchCreateResume(body),
		onSuccess(data) {
			queryClient.invalidateQueries({
				queryKey: resumeKeys.id(data._id),
				refetchType: 'active',
			});
		},
		...options,
	});
};

interface ResumeUpdateProps {
	id: string;
	body: Resume;
}

export const resumeUpdateMutation = (
	options?: UseMutationOptions<Career<Resume>, unknown, ResumeUpdateProps, unknown>,
): UseMutationResult<Career<Resume>, unknown, ResumeUpdateProps, unknown> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: ({ id, body }: ResumeUpdateProps) => fetchUpdateResume(id, body),
		onSuccess(data) {
			queryClient.invalidateQueries({
				queryKey: resumeKeys.id(data._id),
				refetchType: 'active',
			});
		},
		...options,
	});
};

export const resumeDeleteMutation = (
	options?: UseMutationOptions<void, unknown, string, unknown>,
): UseMutationResult<void, unknown, string, unknown> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (id: string) => fetchDeleteResume(id),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: resumeKeys.base,
				refetchType: 'active',
			});
		},
		...options,
	});
};

// // Public Resumes
// export const fetchPublicCareers = async (params: {page?: number, pageSize?: number}) => {
//     return await axios.get(RESUME_PATH.PUBLIC(), {params});
// }

// export const fetchPublicResumeDetail = async (id: string) => {
//     return await axios.get(RESUME_PATH.PUBLIC(id))
// }
