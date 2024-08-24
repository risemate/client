import {
	fetchCareers,
	fetchCreateResume,
	fetchDeleteResume,
	fetchResumeDetail,
	fetchReviseCareers,
	fetchUpdateResume,
} from '@api/career';
import { resumeKeys } from '@queries/queryKeys';
import {
	useMutation,
	useQuery,
	useQueryClient,
	useSuspenseQuery,
} from '@tanstack/react-query';
import { Career } from 'types/career/careerDocument';
import { Resume, ReviseResume } from 'types/career/resume';
import {
	UseMutationOptionsType,
	UseMutationResultType,
	UseQueryOptionsType,
	UseQueryResultType,
	UseSuspenseQueryOptionsType,
	UseSuspenseQueryResultType,
} from 'types/query/query';
import { CareersQueryProps, ResumeUpdateProps } from 'types/query/queryProps';

export const careersQuery = (
	params: CareersQueryProps,
	options?: UseSuspenseQueryOptionsType<Career<Resume>[]>,
): UseSuspenseQueryResultType<Career<Resume>[]> => {
	return useSuspenseQuery({
		queryKey: resumeKeys.career(params),
		queryFn: () => fetchCareers(params),
		...options,
	});
};

export const reviseResumeQuery = (
	id: string,
	options?: UseQueryOptionsType<Career<ReviseResume>[]>,
): UseQueryResultType<Career<ReviseResume>[]> => {
	return useQuery({
		queryKey: resumeKeys.reviseDocs(id),
		queryFn: () => fetchReviseCareers(id),
		...options,
	});
};

export const reviseResumeDetailQuery = (
	id: string,
	options?: UseQueryOptionsType<Career<ReviseResume>>,
): UseQueryResultType<Career<ReviseResume>> => {
	return useQuery({
		queryKey: resumeKeys.id(id),
		queryFn: () => fetchResumeDetail<ReviseResume>(id),
		...options,
	});
};

export const resumeDetailQuery = (
	id: string,
	options?: UseQueryOptionsType<Career<Resume>, 'enabled'>,
): UseQueryResultType<Career<Resume>> => {
	return useQuery({
		queryKey: resumeKeys.id(id),
		queryFn: () => fetchResumeDetail(id),
		enabled: !!id,
		...options,
	});
};

export const resumeCreateMutation = (
	options?: UseMutationOptionsType<Career<Resume>, Resume, 'onSuccess'>,
): UseMutationResultType<Career<Resume>, Resume> => {
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

export const resumeUpdateMutation = (
	options?: UseMutationOptionsType<Career<Resume>, ResumeUpdateProps, 'onSuccess'>,
): UseMutationResultType<Career<Resume>, ResumeUpdateProps> => {
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
	options?: UseMutationOptionsType<void, string, 'onSuccess'>,
): UseMutationResultType<void, string> => {
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
