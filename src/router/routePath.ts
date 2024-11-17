export const routePath = {
	root: '/' as const,
	login: '/login' as const,
	network: {
		default: 'networks' as const,
		detail: (id?: number) => (id ? `resumes/${id}` : ('resumes/:id' as const)),
	},
	export: {
		default: 'experts' as const,
		detail: (id?: number) => (id ? `/${id}` : (':id' as const)),
	},
	myInfo: {
		default: 'my-info' as const,
		resume: 'resumes' as const,
		resumeDetail: (id?: number) => (id ? `/${id}` : (':id' as const)),
	},
	coachInfo: {
		default: 'coachInfo' as const,
		management: 'management' as const,
	},
};
