import { CareersQueryProps } from 'types/Query/ResumeQuery';

export const resumeKeys = {
	base: ['careers, resume'] as const,
	id: (id: string) => [...resumeKeys.base, { id }] as const,
	career: (params: CareersQueryProps) => [...resumeKeys.base, params] as const,
};
