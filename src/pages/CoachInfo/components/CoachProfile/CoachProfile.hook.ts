import { authQuery } from '@queries/user';

export default function useCoachProfile() {
	const { data: auth } = authQuery();
	const hasPost = true;
	return {
		displayAuth: {
			name: auth?.name || auth?.nickname || '000',
			hasPost,
		},
	};
}
