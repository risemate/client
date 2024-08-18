import { CoachingDecideRequest, CoachingRequest } from 'types/coach/coaching';
import { PropsWithId } from 'types/common/column';
import { NetworkPagingQuery } from 'types/query/query';
import { CareersQueryProps } from 'types/query/queryProps';

export const authKeys = {
	base: ['auth'] as const,
};

export const resumeKeys = {
	base: ['careers'] as const,
	id: (id: string) => [...resumeKeys.base, { id }] as const,
	reviseDocs: (id: string) => [...resumeKeys.base, { id }, 'revise-docs'] as const,
	career: (params: CareersQueryProps) => [...resumeKeys.base, params] as const,
};

export const networkKeys = {
	base: ['networks'] as const,
	id: (id: string) => [...networkKeys.base, { id }] as const,
	career: (params?: NetworkPagingQuery) =>
		[...networkKeys.base, { ...params }] as const,
};

export const alarmKeys = {
	base: ['alams'] as const,
	id: (id: string) => [...alarmKeys.base, { id }] as const,
};

export const coverletterKeys = {
	base: ['careers/coverletter'] as const,
	id: (id: string) => [...resumeKeys.base, { id }] as const,
	reviseDocs: (id: string) => [...resumeKeys.base, { id }, 'revise-docs'] as const,
	career: (params: CareersQueryProps) => [...resumeKeys.base, params] as const,
};

export const aiKeys = {
	base: ['ai'] as const,
	id: (id: string) => [...aiKeys.base, ...resumeKeys.id(id)] as const,
};

export const productKeys = {
	base: ['product'] as const,
	id: (id: string) => [...productKeys.base, { id }] as const,
	review: (productId?: string | null, reviewId?: string) => [
		...productKeys.base,
		'review',
		{ productId, reviewId },
	],
	cs: (productId?: string | null, csId?: string) => [
		...productKeys.base,
		'cs',
		{ productId, csId },
	],
	pagingParam: (params?: NetworkPagingQuery) =>
		[...productKeys.base, { ...params }] as const,
};

export const expertKeys = {
	base: ['expert'] as const,
};

export const coachingKeys = {
	base: ['coaching'] as const,
	id: (id: string) => [...coachingKeys.base, { id }],
	coaching_request: (body: CoachingRequest) => [...coachingKeys.base, body],
	coaching_decide: (variables: PropsWithId<CoachingDecideRequest>) => [
		...coachingKeys.base,
		{ id: variables.id, ...variables.body },
	],
};
