import { useQuery } from '@tanstack/react-query';
import { fetchAuth } from 'api/user';
import { Auth } from 'types/User';

export function useAuth(): { auth: Auth | undefined; refetch: () => void } {
	const { data: auth, refetch } = useQuery(['auth'], fetchAuth, {
		// refetchOnMount: true,
		staleTime: Infinity,
	});
	return { auth, refetch };
}
