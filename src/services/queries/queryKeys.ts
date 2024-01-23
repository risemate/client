import { CareersQueryProps } from 'types/Query/ResumeQuery';

export const authKeys = {
	base: ['auth'] as const,
};

export const resumeKeys = {
	base: ['careers'] as const,
	id: (id: string) => [...resumeKeys.base, { id }] as const,
	career: (params: CareersQueryProps) => [...resumeKeys.base, params] as const,
};

export const networkKeys = {
	base: ['networks'] as const,
	id: (id: string) => [...networkKeys.base, { id }] as const,
};

export const alarmKeys = {
	base: ['alams'] as const,
	id: (id: string) => [...alarmKeys.base, { id }] as const,
};
