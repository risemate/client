import { CareersQueryProps } from "types/Query/ResumeQuery";

export const RESUME_KEYS = {
    DEFAULT: ['careers, resume'] as const,
    CAREERS: (params: CareersQueryProps) => [...RESUME_KEYS.DEFAULT, params] as const
}